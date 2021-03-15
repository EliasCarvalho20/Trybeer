import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../models/UserModels';
import { emailAlreadyInUse, invalidEntry } from '../errors';
import { UserInterface } from '../interface';

class CreateUser {
  public async execute({ name, email, password, role = 'user' }: UserInterface): Promise<User> {
    const usersRepository = getRepository(User);

    if (!name || !email || !password) throw invalidEntry;

    const checkEmailExists = await usersRepository.findOne({ where: { email } });
    if (checkEmailExists) throw emailAlreadyInUse;

    // const hashedPassword = await hash(password, 16);

    const user = usersRepository.create({
      name,
      email,
      password,
      role,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUser;
