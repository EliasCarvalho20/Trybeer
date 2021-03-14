import { Request, Response } from 'express';
import { Controller, Req, Res, Body, Get, Post, Redirect } from 'routing-controllers';

import userRequest from '../interface/userRequest';
import CreateUser from '../services/userServices';

@Controller()
class UserController {
  @Get('/')
  @Redirect('/login')
  @Post('/login')
  async createUser(
    @Req() req: Request,
    @Res() res: Response,
    @Body() user: userRequest,
  ): Promise<Response> {
    try {
      const createUser = new CreateUser();
      const userCreated = await createUser.execute(user);

      return res.status(201).send(userCreated);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

export default UserController;
