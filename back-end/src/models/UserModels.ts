import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role: string;
}

export default User;
