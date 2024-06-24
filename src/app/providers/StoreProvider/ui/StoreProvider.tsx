import { PropsWithChildren } from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import { createStore } from 'app/providers/StoreProvider/config/store';

const store = createStore();

export function StoreProvider({ children }: PropsWithChildren) {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
}
