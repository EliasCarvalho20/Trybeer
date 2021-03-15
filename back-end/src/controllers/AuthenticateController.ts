import { JsonController, OnUndefined, Body, Post } from 'routing-controllers';

import { AuthInterface } from '../interface';
import AuthenticateService from '../services/AuthenticateService';

@JsonController()
class AuthenticateController {
  @Post('/login')
  @OnUndefined(200)
  async createSession(@Body() { email, password, role = 'user' }: AuthInterface): Promise<void> {
    const isAuthenticated = new AuthenticateService();
    await isAuthenticated.execute({ email, password, role });
  }
}

export default AuthenticateController;
