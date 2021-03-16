import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Length, IsDecimal, IsDate } from 'class-validator';

import User from './UsersModel';

@Entity('sales')
class Sale {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  user_id: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  @IsDecimal()
  total_price: number;

  @Column()
  @Length(0, 100)
  delivery_address: string;

  @Column()
  @Length(0, 50)
  delivery_number: string;

  @CreateDateColumn()
  @IsDate()
  sale_date: Date;

  @Column()
  status: string;
}

export default Sale;
