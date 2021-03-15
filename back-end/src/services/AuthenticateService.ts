import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';

import User from '../models/UserModels';
import { AuthInterface } from '../interface';
import { invalidEmailOrPassword, invalidEntry } from '../errors';

class AuthenticateService {
  public async execute({ email, password, role }: AuthInterface): Promise<User> {
    const usersRepository = getRepository(User);

    if (!email || !password) throw invalidEntry;

    const isUserValid = await usersRepository.findOne({ where: { email } });
    if (!isUserValid) throw invalidEmailOrPassword;

    // const passwordMatched = await compare(password, isUserValid.password);
    // if (!passwordMatched) throw invalidEmailOrPassword;

    return isUserValid;
  }
}

export default AuthenticateService;
