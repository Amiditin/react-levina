import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';
import { IUserLogin, IUser, IUserRegister } from './types';

export const getUser = createAsyncThunk<IUser>('auth/getUser', async () => {
  const { data } = await axios.get('/auth/user');

  return data;
});

export const loginUser = createAsyncThunk<IUser, IUserLogin>('auth/loginUser', async (params) => {
  const { email, password } = params;
  const { data } = await axios.post('/auth/login', { email, password });

  return data;
});

export const registerUser = createAsyncThunk<IUser, IUserRegister>(
  'auth/registerUser',
  async (params) => {
    const { email, fullName, password } = params;
    const { data } = await axios.post('/auth/register', { email, fullName, password });

    return data;
  },
);
