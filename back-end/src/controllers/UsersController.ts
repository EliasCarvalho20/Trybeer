import { Response } from 'express';
import { JsonController, OnUndefined, Res, Body, Post } from 'routing-controllers';

import { UserInterface } from '../interface';
import CreateUser from '../services/UserServices';

@JsonController()
class UsersController {
  @Post('/register')
  @OnUndefined(404)
  async createUser(@Res() res: Response, @Body() user: UserInterface): Promise<void> {
    const createUser = new CreateUser();
    await createUser.execute(user);
    res.send(201).end();
  }
}

export default UsersController;
