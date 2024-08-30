import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { counterReducer } from 'entities/Counter/public-api';
import { userReducer } from 'entities/User/public-api';

import { loginReducer } from 'features/AuthByUsername/public-api';

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  login: loginReducer,
});

export const createStore = (preloadedState?: Partial<TRootState>) => {
  return configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === 'development',
    preloadedState,
  });
};

export type TRootState = ReturnType<typeof rootReducer>;
export type TAppStore = ReturnType<typeof createStore>;
export type TAppDispatch = TAppStore['dispatch'];
