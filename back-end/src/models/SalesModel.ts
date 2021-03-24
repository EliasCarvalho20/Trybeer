import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

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
  total_price: number;

  @Column()
  delivery_address: string;

  @Column()
  delivery_number: string;

  @CreateDateColumn()
  sale_date: Date;

  @Column()
  status: string;
}

export default Sale;
