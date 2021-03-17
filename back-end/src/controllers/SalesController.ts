import { Request, Response } from 'express';
import {
  JsonController,
  Get,
  Post,
  Req,
  Res,
  Body,
  Param,
  Authorized,
  OnUndefined,
} from 'routing-controllers';

import Sale from '../models/SalesModel';
import CreateSale from '../services/SalesService';

@JsonController()
class SalesController {
  @Authorized(['client', 'administrator'])
  @Get('/checkout/:id')
  @OnUndefined(404)
  async getSale(@Param('id') id: number): Promise<Sale | void> {
    return new CreateSale().getSaleById(id);
  }

  @Authorized(['client', 'administrator'])
  @Post('/checkout')
  @OnUndefined(404)
  async createSale(
    @Req() req: Request,
    @Res() res: Response,
    @Body({ validate: true }) sale: CreateSale,
  ): Promise<void> {
    const {
      user: { id },
    } = req;
    const saleCreated = await new CreateSale().execute(id, sale);
    res.json(saleCreated);
  }
}

export default SalesController;
