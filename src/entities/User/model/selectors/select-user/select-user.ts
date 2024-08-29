import type { TRootState } from 'app/providers/StoreProvider/public-api';

export const selectUser = (state: TRootState) => state.user;
