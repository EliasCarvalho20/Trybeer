import { verify } from 'jsonwebtoken';
import { Action } from 'routing-controllers';
import { getRepository } from 'typeorm';
import User from '../models/UsersModel';

import { missingToken, notAuthorized } from '../library/errors';

const secret = 'ThisIsNotASecret';

export default async ({ request }: Action, roles: string[]): Promise<boolean> => {
  const token = request.headers.authorization;
  if (!token) throw missingToken;

  const isTokenValid = verify(token, secret);

  const { email, role }: any = isTokenValid;
  const user = await getRepository(User).findOne({ where: { email, role } });

  if (!user && roles.findIndex(item => role === item) === -1) throw notAuthorized;
  request.id = user.id;

  return true;
};
