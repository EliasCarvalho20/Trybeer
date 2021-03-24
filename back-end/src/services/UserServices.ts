import { getRepository, Repository } from 'typeorm';
import { IsEmail, IsNotEmpty, Length, ValidateIf } from 'class-validator';
import { sign } from 'jsonwebtoken';
import { hashSync } from 'bcryptjs';

import User from '../models/UsersModel';
import { emailAlreadyInUse, invalidEmailOrPassword } from '../library/errors';
import { UserInterface, userWithTokenInterface } from '../interface';
import isRegexValid from '../library/decorators';
import tokenConfig from '../config/tokenConfig';

class CreateUser {
  usersRepository: Repository<User>;

  @ValidateIf(property => property.login)
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

  login: boolean;

  public async execute(
    { name = '', email, password, role = 'client' }: UserInterface,
    login = false,
  ): Promise<boolean | userWithTokenInterface> {
    this.usersRepository = getRepository(User);
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
    this.login = login;

    return login ? this.createToken() : true;
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

  public async createToken(): Promise<userWithTokenInterface> {
    const { email, password } = this;

    const isUserValid = await this.usersRepository.findOne({ where: { email, password } });
    if (!isUserValid) throw invalidEmailOrPassword;

    // const passwordMatched = compareSync(password, isUserValid.password);
    // if (!passwordMatched) throw invalidEmailOrPassword;

    const { secret, expiresIn } = tokenConfig;
    const { password: _, ...userWithoutPassword } = isUserValid;

    const token = sign({ user: userWithoutPassword }, secret, { expiresIn });

    return {
      ...userWithoutPassword,
      token,
    };
  }
}

export default CreateUser;
