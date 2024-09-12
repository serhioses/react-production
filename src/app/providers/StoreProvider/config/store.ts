import { combineReducers, configureStore, EnhancedStore, Reducer } from '@reduxjs/toolkit';

import { counterReducer, TCounterState } from 'entities/Counter/public-api';
import { TUserState, userReducer } from 'entities/User/public-api';

import { TLoginState } from 'features/AuthByUsername/model/types/login-state';

type TReducerInjection<T> = {
  key: string;
  asyncReducer: Reducer<T>;
};

type TReducerInjectionTuple<Reducers extends unknown[]> = {
  [K in keyof Reducers]: TReducerInjection<Reducers[K]>;
};

export type TStoreWithAsyncReducers = EnhancedStore & {
  asyncReducers: Record<string, Reducer>;
  injectReducers: <Reducers extends unknown[]>(
    asyncReducers: TReducerInjectionTuple<Reducers>,
  ) => void;
};

const rootReducer = {
  counter: counterReducer,
  user: userReducer,
};

function createReducer(asyncReducers?: Record<string, Reducer>) {
  return combineReducers({
    ...rootReducer,
    ...asyncReducers,
  });
}

export const createStore = (preloadedState?: Partial<TRootState>) => {
  const store = configureStore({
    reducer: createReducer(),
    devTools: process.env.NODE_ENV === 'development',
    preloadedState,
  });

  const s = store as TStoreWithAsyncReducers;

  // Add a dictionary to keep track of the registered async reducers
  s.asyncReducers = {};

  // Create an inject reducer function
  // This function adds the async reducer, and creates a new combined reducer
  s.injectReducers = (asyncReducers) => {
    asyncReducers.forEach(({ key, asyncReducer }) => {
      if (s.asyncReducers[key]) {
        return;
      }

      s.asyncReducers[key] = asyncReducer;
    });

    s.replaceReducer(createReducer(s.asyncReducers));
  };

  return store;
};

export type TRootState = { counter: TCounterState; user: TUserState; login?: TLoginState };
export type TAppStore = ReturnType<typeof createStore>;
export type TAppDispatch = TAppStore['dispatch'];
