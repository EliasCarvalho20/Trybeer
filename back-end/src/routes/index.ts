import { Router } from 'express';

import { useExpressServer } from 'routing-controllers';

import UserController from '../controllers/UserController';
import AuthenticateController from '../controllers/AuthenticateController';
import ErrorHandler from '../middlewares/ErrorMiddleware';

const routes = Router();

useExpressServer(routes, {
  cors: true,
  controllers: [UserController, AuthenticateController],
  middlewares: [ErrorHandler],
  defaultErrorHandler: false,
});

export default routes;
