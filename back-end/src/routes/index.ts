import { Router } from 'express';

import { useExpressServer } from 'routing-controllers';

import UserController from '../controllers/UserController';
import AuthenticateController from '../controllers/AuthenticateController';
import { ErrorHandler, authMiddleware } from '../middlewares';

const routes = Router();

useExpressServer(routes, {
  cors: true,
  controllers: [UserController, AuthenticateController],
  middlewares: [ErrorHandler],
  authorizationChecker: authMiddleware,
  defaultErrorHandler: false,
});

export default routes;
