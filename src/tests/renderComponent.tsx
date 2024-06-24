import { PropsWithChildren, ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider as ReduxProvider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { RenderOptions, render } from '@testing-library/react';

import type { TRootState, TAppStore } from 'app/providers/StoreProvider/public-api';
import { createStore } from 'app/providers/StoreProvider/public-api';

import { i18n } from 'tests/i18n-for-tests';

type TExtendedRenderOptions = Omit<RenderOptions, 'queries'> & {
  preloadedState?: Partial<TRootState>;
  store?: TAppStore;
};

export function renderComponent(ui: ReactNode, extendedRenderOptions: TExtendedRenderOptions = {}) {
  const {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = createStore(preloadedState),
    ...renderOptions
  } = extendedRenderOptions;

  const Wrapper = ({ children }: PropsWithChildren) => {
    return (
      <ReduxProvider store={store}>
        <MemoryRouter>
          <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
        </MemoryRouter>
      </ReduxProvider>
    );
  };

  // Return an object with the store and all of RTL's query functions
  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}
