import jwt from 'jsonwebtoken';

interface CreateJwtConfig {
  expiresIn: string;
  algorithm: string;
}

const secret = 'ThisIsNotASecret';
const jwtConfig = {
  expiresIn: '999999d',
  algorithm: 'HS256',
};

module.exports = (user: string) => jwt.sign({ data: user }, secret, jwtConfig);
