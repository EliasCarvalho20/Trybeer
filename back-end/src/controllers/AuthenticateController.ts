import { JsonController, OnUndefined, Post, Body } from 'routing-controllers';

import { userWithTokenInterface } from '../interface';
import CreateUser from '../services/UserServices';

@JsonController()
class AuthenticateController {
  @Post('/login')
  @OnUndefined(404)
  async createSession(
    @Body({ validate: true }) login: CreateUser,
  ): Promise<userWithTokenInterface | boolean> {
    return new CreateUser().execute(login, true);
  }
}

export default AuthenticateController;
