import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/login-by-username';
import { TLoginState } from 'features/AuthByUsername/model/types/login-state';

const initialState: TLoginState = {
  username: '',
  isLoading: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginByUsername.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(loginByUsername.fulfilled, (state, action) => {
      state.error = undefined;
      state.isLoading = false;
      state.username = action.payload.username;
    });
    builder.addCase(loginByUsername.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

export const { actions: loginActions, reducer: loginReducer } = loginSlice;
