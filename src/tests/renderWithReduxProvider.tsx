import { PropsWithChildren, ReactNode } from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import { RenderOptions, render } from '@testing-library/react';

import type { TRootState, TAppStore } from 'app/providers/StoreProvider/public-api';
import { createStore } from 'app/providers/StoreProvider/public-api';

type TExtendedRenderOptions = Omit<RenderOptions, 'queries'> & {
  preloadedState?: Partial<TRootState>;
  store?: TAppStore;
};

export function renderWithReduxProvider(
  ui: ReactNode,
  extendedRenderOptions: TExtendedRenderOptions = {},
) {
  const {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = createStore(preloadedState),
    ...renderOptions
  } = extendedRenderOptions;

  const Wrapper = ({ children }: PropsWithChildren) => (
    <ReduxProvider store={store}>{children}</ReduxProvider>
  );

  // Return an object with the store and all of RTL's query functions
  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}
