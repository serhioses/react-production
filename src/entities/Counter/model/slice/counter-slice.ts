import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { TCounterState } from 'entities/Counter/model/types/counter-state';

const initialState: TCounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { actions: counterActions } = counterSlice;

export const { reducer: counterReducer } = counterSlice;
