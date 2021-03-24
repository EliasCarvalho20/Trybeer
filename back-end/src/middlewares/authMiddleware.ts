import { verify } from 'jsonwebtoken';
import { Action } from 'routing-controllers';
import { getRepository } from 'typeorm';
import User from '../models/UsersModel';

import { missingToken, notAuthorized } from '../library/errors';
import { tokenInterface } from '../interface';
import tokenConfig from '../config/tokenConfig';

export default async ({ request }: Action, roles: string[]): Promise<boolean> => {
  const token = request.headers.authorization;
  if (!token) throw missingToken;

  const { secret } = tokenConfig;

  const isTokenValid = verify(token, secret);

  const {
    user: { id, role },
  } = isTokenValid as tokenInterface;
  const user = await getRepository(User).findOne({ where: { id, role } });

  if (!user && roles.findIndex(item => role === item) === -1) throw notAuthorized;

  request.user = { id };

  return true;
};
