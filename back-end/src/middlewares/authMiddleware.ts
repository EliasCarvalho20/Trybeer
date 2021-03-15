import { verify } from 'jsonwebtoken';
import { Action } from 'routing-controllers';
import { getRepository } from 'typeorm';
import User from '../models/UserModels';

const secret = 'ThisIsNotASecret';

export default async (action: Action, roles: string[]): Promise<boolean> => {
  const token = action.request.headers.authorization;
  if (!token) return false;

  const isTokenValid = verify(token, secret);
  if (!isTokenValid) return false;

  const { email, role } = isTokenValid;
  const user = await getRepository(User).findOne({ where: { email } });

  if (user && role !== roles[0]) return false;

  return true;
};
