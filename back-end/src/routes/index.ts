import { Router } from 'express';
import path from 'path';

import { useExpressServer } from 'routing-controllers';

import { ErrorHandler, authMiddleware } from '../middlewares';

const routes = Router();

useExpressServer(routes, {
  cors: true,
  controllers: [path.resolve(__dirname, '..', 'controllers/*.ts')],
  middlewares: [ErrorHandler],
  authorizationChecker: authMiddleware,
  defaultErrorHandler: false,
  validation: false,
});

export default routes;
