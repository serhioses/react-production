import type { DeepPartial } from 'shared/types/deepPartial';

import { selectCounterValue } from 'entities/Counter/model/selectors/select-counter-value/select-counter-value';

import type { TRootState } from 'app/providers/StoreProvider/public-api';

describe('selectCounterValue', () => {
  test('should return counter value', () => {
    const state: DeepPartial<TRootState> = { counter: { value: 10 } };

    expect(selectCounterValue(state as TRootState)).toBe(10);
  });
});
