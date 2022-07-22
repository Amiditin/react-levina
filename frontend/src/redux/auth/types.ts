export enum Status {
  LOADING = 'loading',
  LOGGED = 'logged',
  NOT_LOGGED = 'not_logged',
}

export interface IUser {
  __v: number;
  _id: string;
  email: string;
  fullName: string;
  token: string;
  createdAt: Date;
  updatedAt: Date;
  avatarUrl?: string;
}

export interface AuthState {
  status: Status;
  user: IUser | null;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserRegister {
  email: string;
  fullName: string;
  password: string;
}
