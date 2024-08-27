import { createSlice } from '@reduxjs/toolkit';

import { TUserState } from 'entities/User/model/types/user-state';

const initialState: TUserState = {
  authData: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const { actions: userActions } = userSlice;

export const { reducer: userReducer } = userSlice;
