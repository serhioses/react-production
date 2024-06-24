import type { DeepPartial } from 'shared/types/deepPartial';

import { selectCounter } from 'entities/Counter/model/selectors/select-counter/select-counter';

import type { TRootState } from 'app/providers/StoreProvider/public-api';

describe('selectCounter', () => {
  test('should return counter value', () => {
    const state: DeepPartial<TRootState> = { counter: { value: 10 } };

    expect(selectCounter(state as TRootState)).toEqual({ value: 10 });
  });
});
