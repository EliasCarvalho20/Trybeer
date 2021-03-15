import { JsonController, OnUndefined, Get, Authorized } from 'routing-controllers';

import { getRepository } from 'typeorm';
import Product from '../models/ProductsModel';
import { productArray } from '../interface';

@JsonController()
class ProductsController {
  @Authorized(['client', 'administrator'])
  @Get('/products')
  @OnUndefined(404)
  async getAllProducts(): Promise<productArray> {
    return getRepository(Product).find();
  }
}

export default ProductsController;
