import { verify } from 'jsonwebtoken';
import { Action } from 'routing-controllers';
import { getRepository } from 'typeorm';
import User from '../models/UsersModel';

import { missingToken, invalidToken } from '../errors';

const secret = 'ThisIsNotASecret';

export default async (action: Action, roles: string[]): Promise<boolean> => {
  const token = action.request.headers.authorization;
  if (!token) throw missingToken;

  const isTokenValid = verify(token, secret);
  if (!isTokenValid) throw invalidToken;

  const { email, role }: any = isTokenValid;
  const user = await getRepository(User).findOne({ where: { email } });

  if (!user && roles.findIndex(item => role === item) === -1) return false;

  return true;
};
