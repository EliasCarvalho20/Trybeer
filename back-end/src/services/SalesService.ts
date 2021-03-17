import { getRepository, Repository } from 'typeorm';
import { Length, IsDecimal, IsNotEmpty } from 'class-validator';

import Sale from '../models/SalesModel';
import User from '../models/UsersModel';
import { SalesInterface } from '../interface';

class CreateSale {
  salesRepository: Repository<Sale>;

  user_id: number;

  user: User;

  @IsNotEmpty()
  @IsDecimal()
  total_price: number;

  @IsNotEmpty()
  @Length(1, 100)
  delivery_address: string;

  @IsNotEmpty()
  @Length(1, 50)
  delivery_number: string;

  sale_date: Date;

  status: string;

  public async execute(
    user_id: number,
    { total_price, delivery_address, delivery_number, status = 'pending' }: SalesInterface,
  ): Promise<Sale> {
    this.salesRepository = getRepository(Sale);
    this.user_id = user_id;
    this.total_price = total_price;
    this.delivery_address = delivery_address;
    this.delivery_number = delivery_number;
    this.status = status;

    return this.createSale();
  }

  public async createSale(): Promise<Sale> {
    const dateTime = Date.now();
    this.sale_date = new Date(dateTime);

    const saleCreated = this.salesRepository.create({
      user_id: this.user_id,
      user: this.user,
      total_price: this.total_price,
      delivery_address: this.delivery_address,
      delivery_number: this.delivery_number,
      sale_date: this.sale_date,
      status: this.status,
    });

    await this.salesRepository.save(saleCreated);

    return saleCreated;
  }

  public async getSaleById(id: number): Promise<Sale | void> {
    this.salesRepository = getRepository(Sale);
    return this.salesRepository.findOne({ where: { id } });
  }
}

export default CreateSale;
