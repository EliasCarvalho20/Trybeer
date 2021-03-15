import { JsonController, OnUndefined, Get, Post, Body } from 'routing-controllers';

import { AuthInterface, userWithTokenInterface } from '../interface';
import AuthenticateService from '../services/AuthenticateService';

@JsonController()
class AuthenticateController {
  @Post('/login')
  @OnUndefined(404)
  async createSession(@Body() { email, password }: AuthInterface): Promise<userWithTokenInterface> {
    const isAuthenticated = new AuthenticateService();
    return isAuthenticated.execute({ email, password });
  }
}

export default AuthenticateController;
