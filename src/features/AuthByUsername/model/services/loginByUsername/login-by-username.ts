import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { LOCAL_STORAGE_AUTH_DATA_KEY } from 'shared/constants/local-storage';
import { buildErrorKey } from 'shared/utils/buildErrorKey';

import { userActions, type TUser } from 'entities/User/public-api';

type TLoginByUsernameParams = {
  username: string;
  password: string;
  onSuccess?: VoidFunction;
};

export const loginByUsername = createAsyncThunk<
  TUser,
  TLoginByUsernameParams,
  { rejectValue: string }
>('login/loginByusername', async ({ username, password, onSuccess }, thunkAPI) => {
  try {
    const response = await axios.post<TUser>(
      'http://localhost:8000/login',
      { username, password },
      {
        headers: { authorization: 'any' },
      },
    );

    const userData = response.data;

    if (!userData) {
      throw new Error(buildErrorKey('noDataRecived'));
    }

    localStorage.setItem(LOCAL_STORAGE_AUTH_DATA_KEY, JSON.stringify(userData));
    thunkAPI.dispatch(userActions.setAuthData(userData));
    onSuccess?.();

    return userData;
  } catch (err) {
    console.warn(err);

    if (axios.isAxiosError(err) && err.status === 403) {
      return thunkAPI.rejectWithValue(buildErrorKey('wrongCredentials'));
    }

    return thunkAPI.rejectWithValue(buildErrorKey('errorDuringAuthRequest'));
  }
});
