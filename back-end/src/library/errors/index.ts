import { HttpError } from 'routing-controllers';

export const emailAlreadyInUse = new HttpError(409, 'This email is already in use');

export const invalidEntry = new HttpError(422, 'Invalid entries. Try again.');

export const invalidEmailOrPassword = new HttpError(400, 'Incorrect username or password');

export const missingToken = new HttpError(400, 'Missing authentication token');

export const notAuthorized = new HttpError(401, 'You are not authorized to access this page');

//   OK: 200,
//   CREATED: 201,
//   NO_CONTENT: 204,
//   BAD_REQUEST: 400,
//   UNAUTHORIZED: 401,
//   NOT_FOUND: 404,
//   CONFLICT: 409,
//   UNPROCESSABLE_ENTITY: 422,
// }
