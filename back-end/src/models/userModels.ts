import { Entity, PrimaryGeneratedColumn, Column, BeforeUpdate, BeforeInsert } from 'typeorm';
// import { hashSync } from 'bcryptjs';

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

  // @BeforeInsert()
  // @BeforeUpdate()
  // hashPassword(): void {
  //   this.password = hashSync(this.password, 8);
  // }
}

export default User;
