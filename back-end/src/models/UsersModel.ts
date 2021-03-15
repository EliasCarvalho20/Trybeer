import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Length, IsEmail, IsInt } from 'class-validator';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @Length(3, 100)
  name: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  @Length(6, 20)
  password: string;

  @Column()
  role: string;
}

export default User;
