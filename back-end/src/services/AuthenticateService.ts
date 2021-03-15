import { getRepository } from 'typeorm';
import { compareSync } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import User from '../models/UsersModel';
import { AuthInterface, userWithTokenInterface } from '../interface';
import { invalidEmailOrPassword, invalidEntry } from '../errors';

const secret = 'ThisIsNotASecret';

class AuthenticateService {
  public async execute({ email, password }: AuthInterface): Promise<userWithTokenInterface> {
    const usersRepository = getRepository(User);

    if (!email || !password) throw invalidEntry;

    const isUserValid = await usersRepository.findOne({ where: { email, password } });
    if (!isUserValid) throw invalidEmailOrPassword;

    // const passwordMatched = compareSync(password, isUserValid.password);
    // if (!passwordMatched) throw invalidEmailOrPassword;

    const { name, role } = isUserValid;

    const token = sign({ email, role }, secret, { expiresIn: '2d' });

    return { name, email, token, role };
  }
}

export default AuthenticateService;
