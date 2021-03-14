import { getRepository } from 'typeorm';

import User from '../models/userModels';
import userRequest from '../interface/userRequest';

class CreateUser {
  public async execute({ name, email, password, role }: userRequest): Promise<User> {
    const usersRepository = getRepository(User);
    const checkEmailExists = await usersRepository.findOne({ where: { email } });

    if (checkEmailExists) throw new Error('Email address already in use');

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
