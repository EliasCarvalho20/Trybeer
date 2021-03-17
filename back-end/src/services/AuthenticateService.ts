import { getRepository } from 'typeorm';
import { compareSync } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import User from '../models/UsersModel';
import { AuthInterface, userWithTokenInterface } from '../interface';
import { invalidEmailOrPassword, invalidEntry } from '../library/errors';
import tokenConfig from '../config/tokenConfig';

class AuthenticateService {
  public async execute({ email, password }: AuthInterface): Promise<userWithTokenInterface> {
    const usersRepository = getRepository(User);

    if (!email || !password) throw invalidEntry;

    const isUserValid = await usersRepository.findOne({ where: { email, password } });
    if (!isUserValid) throw invalidEmailOrPassword;

    // const passwordMatched = compareSync(password, isUserValid.password);
    // if (!passwordMatched) throw invalidEmailOrPassword;

    const { secret, expiresIn } = tokenConfig;
    const { password: _, ...userWithoutPassword } = isUserValid;

    const token = sign({ user: userWithoutPassword }, secret, { expiresIn });

    return {
      ...userWithoutPassword,
      token,
    };
  }
}

export default AuthenticateService;
