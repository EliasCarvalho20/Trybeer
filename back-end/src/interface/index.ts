import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsDecimal, IsInt, Length } from 'class-validator';
import User from '../models/UsersModel';

export interface UserInterface {
  name: string;
  email: string;
  password: string;
  role?: string;
}

export interface AuthInterface {
  email: string;
  password: string;
}

export interface userWithTokenInterface {
  name: string;
  email: string;
  token: string;
  role: string;
}

export type productArray = Array<{
  id: number;
  price: number;
  url_image: string;
}>;

export interface SalesInterface {
  total_price: number;

  delivery_address: string;

  delivery_number: string;

  status?: string;
}
