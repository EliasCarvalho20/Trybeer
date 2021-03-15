import { JsonController, OnUndefined, Body, Post } from 'routing-controllers';

import { UserInterface } from '../interface';
import CreateUser from '../services/UserServices';

@JsonController()
class UserController {
  @Post('/register')
  @OnUndefined(404)
  async createUser(@Body() user: UserInterface): Promise<void> {
    const createUser = new CreateUser();
    await createUser.execute(user);
  }
}

export default UserController;
