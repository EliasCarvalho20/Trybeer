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
