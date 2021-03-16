import { getRepository, Repository } from 'typeorm';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import { hashSync } from 'bcryptjs';

import User from '../models/UsersModel';
import { emailAlreadyInUse } from '../library/errors';
import { UserInterface } from '../interface';
import isRegexValid from '../library/decorators';

class CreateUser {
  usersRepository: Repository<User>;

  @IsNotEmpty()
  @isRegexValid()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(6, 20)
  password: string;

  role: string;

  public async execute({ name, email, password, role = 'client' }: UserInterface): Promise<User> {
    this.usersRepository = getRepository(User);
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;

    return this.validateUser();
  }

  public async validateUser(): Promise<User> {
    const { email } = this;
    const checkEmailExists = await this.usersRepository.findOne({ where: { email } });
    if (checkEmailExists) throw emailAlreadyInUse;

    // const hashedPassword = hashSync(password, 16);

    const userCreated = this.usersRepository.create({
      name: this.name,
      email: this.email,
      password: this.password,
      role: this.role,
    });

    await this.usersRepository.save(userCreated);

    return userCreated;
  }
}

export default CreateUser;
