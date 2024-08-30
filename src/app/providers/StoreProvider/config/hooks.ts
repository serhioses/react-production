import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux';

import type {
  TAppDispatch,
  TRootState,
  TStoreWithAsyncReducers,
} from 'app/providers/StoreProvider/config/store';

export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
export const useAppStore = () => useStore() as TStoreWithAsyncReducers;
