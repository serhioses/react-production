import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { TAppDispatch, TRootState } from 'app/providers/StoreProvider/config/store';

export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
