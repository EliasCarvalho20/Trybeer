import { Router } from 'express';
import { useExpressServer } from 'routing-controllers';
import UserController from '../controllers/userController';

const routes = Router();

useExpressServer(routes, {
  controllers: [UserController],
});

export default routes;
