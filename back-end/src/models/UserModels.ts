import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Length, IsEmail } from 'class-validator';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('increment')
  id: string;

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
