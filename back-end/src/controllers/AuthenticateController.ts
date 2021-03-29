import { JsonController, OnUndefined, Post, Body } from 'routing-controllers';

import { userWithTokenInterface } from '../interface';
import CreateUser from '../services/UserServices';
import User from '../models/UsersModel';

@JsonController()
class AuthenticateController {
  @Post('/login')
  @OnUndefined(404)
  async createSession(
    @Body({ validate: true }) login: CreateUser,
  ): Promise<userWithTokenInterface | User> {
    return new CreateUser().execute(login, true);
  }
}

export default AuthenticateController;
