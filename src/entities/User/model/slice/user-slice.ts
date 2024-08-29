import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LOCAL_STORAGE_AUTH_DATA_KEY } from 'shared/constants/local-storage';

import { TUser, TUserState } from 'entities/User/model/types/user-state';

const initialState: TUserState = {
  authData: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    initAuthData: (state) => {
      const authData = localStorage.getItem(LOCAL_STORAGE_AUTH_DATA_KEY);
      if (authData) {
        state.authData = JSON.parse(authData);
      }
    },
    setAuthData: (state, action: PayloadAction<TUser>) => {
      state.authData = action.payload;
    },
    resetAuthData: (state) => {
      state.authData = undefined;
      localStorage.removeItem(LOCAL_STORAGE_AUTH_DATA_KEY);
    },
  },
});

export const { actions: userActions } = userSlice;

export const { reducer: userReducer } = userSlice;
