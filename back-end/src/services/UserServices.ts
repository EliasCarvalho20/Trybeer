import { getRepository, Repository } from 'typeorm';
import { hashSync } from 'bcryptjs';

import User from '../models/UsersModel';
import { emailAlreadyInUse } from '../library/errors';
import { UserInterface } from '../interface';

class CreateUser {
  usersRepository: Repository<User>;

  name: string;

  email: string;

  password: string;

  role: string;

  constructor({ name, email, password, role = 'client' }: UserInterface) {
    this.usersRepository = getRepository(User);
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  public async execute(): Promise<User> {
    return this.validateUser();
  }

  public async validateUser(): Promise<User> {
    const { email } = this;
    const checkEmailExists = await this.usersRepository.findOne({ where: { email } });
    if (checkEmailExists) throw emailAlreadyInUse;

    // const hashedPassword = hashSync(password, 16);

    const userCreated = this.usersRepository.create({
      name: this.name,
      email: this.email,
      password: this.password,
      role: this.role,
    });

    await this.usersRepository.save(userCreated);

    return userCreated;
  }
}

export default CreateUser;
