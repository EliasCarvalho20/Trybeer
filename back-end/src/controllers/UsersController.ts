import { Response } from 'express';
import { JsonController, OnUndefined, Res, Body, Post } from 'routing-controllers';

import CreateUser from '../services/UserServices';

@JsonController()
class UsersController {
  @Post('/register')
  @OnUndefined(404)
  async createUser(
    @Res() res: Response,
    @Body({ validate: true }) user: CreateUser,
  ): Promise<void> {
    await new CreateUser().execute(user);
    res.sendStatus(201).end();
  }
}

export default UsersController;
