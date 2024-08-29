import type { TRootState } from 'app/providers/StoreProvider/public-api';

export const selectLogin = (state: TRootState) => state.login;
