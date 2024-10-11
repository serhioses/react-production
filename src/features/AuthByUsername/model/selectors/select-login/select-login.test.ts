import type { DeepPartial } from 'shared/types/deepPartial';

import { selectLogin } from 'features/AuthByUsername/model/selectors/select-login/select-login';

import type { TRootState } from 'app/providers/StoreProvider/public-api';

describe('selectLogin', () => {
  test('should return login state', () => {
    const state: DeepPartial<TRootState> = { login: { isLoading: false, username: 'John' } };

    expect(selectLogin(state as TRootState)).toEqual({ isLoading: false, username: 'John' });
    expect(selectLogin(state as TRootState)?.error).toBeUndefined();
  });
});
