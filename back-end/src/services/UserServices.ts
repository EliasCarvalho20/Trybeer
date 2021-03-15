import { getRepository } from 'typeorm';
import { validateOrReject } from 'class-validator';
import { hashSync } from 'bcryptjs';

import { Repository } from 'typeorm/repository/Repository';
import User from '../models/UsersModel';
import { emailAlreadyInUse, invalidEntry } from '../errors';
import { UserInterface } from '../interface';

class CreateUser {
  public async execute({ name, email, password, role = 'client' }: UserInterface): Promise<User> {
    const usersRepository = getRepository(User);

    await this.validateUserFields({ name, email, password });

    return this.validateUser(usersRepository, { name, email, password, role });
  }

  public async validateUser(
    usersRepository: Repository<User>,
    { name, email, password, role }: UserInterface,
  ): Promise<User> {
    const checkEmailExists = await usersRepository.findOne({ where: { email } });
    if (checkEmailExists) throw emailAlreadyInUse;

    // const hashedPassword = hashSync(password, 16);

    const userCreated = usersRepository.create({
      name,
      email,
      password,
      role,
    });

    await usersRepository.save(userCreated);

    return userCreated;
  }

  public async validateUserFields({ name, email, password }: UserInterface): Promise<void> {
    if (!name || !email || !password) throw invalidEntry;

    const userToValidate = new User();
    userToValidate.name = name;
    userToValidate.email = email;
    userToValidate.password = password;

    return validateOrReject(userToValidate);
  }
}

export default CreateUser;
