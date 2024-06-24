import { counterActions, counterReducer } from 'entities/Counter/model/slice/counter-slice';
import { TCounterState } from 'entities/Counter/model/types/counter-state';

describe('counterSlice', () => {
  test('should increment counter value by 1', () => {
    const state: TCounterState = { value: 0 };

    expect(counterReducer(state, counterActions.increment())).toEqual({
      value: 1,
    });
  });

  test('should decrement counter value by 1', () => {
    const state: TCounterState = { value: 20 };

    expect(counterReducer(state, counterActions.decrement())).toEqual({
      value: 19,
    });
  });

  test('should work with undefined state', () => {
    expect(counterReducer(undefined, counterActions.decrement())).toEqual({
      value: -1,
    });
  });

  test('should set correct value', () => {
    const state: TCounterState = { value: 100 };

    expect(counterReducer(state, counterActions.setValue(50))).toEqual({
      value: 50,
    });
  });
});
