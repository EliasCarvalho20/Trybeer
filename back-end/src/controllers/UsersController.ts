import { Response } from 'express';
import { JsonController, OnUndefined, Res, Body, Post } from 'routing-controllers';

import CreateUser from '../services/UserServices';
import User from '../models/UsersModel';

@JsonController()
class UsersController {
  @Post('/register')
  @OnUndefined(404)
  async createUser(@Res() res: Response, @Body({ validate: true }) user: User): Promise<void> {
    await new CreateUser(user).execute();
    res.sendStatus(201).end();
  }
}

export default UsersController;
