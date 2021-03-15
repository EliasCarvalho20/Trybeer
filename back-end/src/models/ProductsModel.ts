import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Length, IsInt, IsDecimal } from 'class-validator';

@Entity('products')
class Product {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @IsDecimal()
  price: number;

  @Column()
  @Length(0, 200)
  url_image: string;
}

export default Product;
