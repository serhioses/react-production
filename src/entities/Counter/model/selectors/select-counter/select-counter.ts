import type { TRootState } from 'app/providers/StoreProvider/public-api';

export const selectCounter = (state: TRootState) => state.counter;
