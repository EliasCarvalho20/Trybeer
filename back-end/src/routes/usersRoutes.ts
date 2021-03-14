import { Router } from 'express';

import { useExpressServer } from 'routing-controllers';
import UserController from '../controllers/userController';

const usersRouter = Router();

useExpressServer(usersRouter, {
  controllers: [UserController],
});

export default usersRouter;
