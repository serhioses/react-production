import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { ChakraBaseProvider } from '@chakra-ui/react';

import { theme } from 'shared/theme/theme';

import { StoreProvider } from 'app/providers/StoreProvider/public-api';
import { mainRouter } from 'app/router/public-api';

import 'shared/configs/i18n/i18n';

const root = createRoot(document.getElementById('root')!);

root.render(
  <ChakraBaseProvider theme={theme}>
    <StoreProvider>
      <RouterProvider router={mainRouter} />
    </StoreProvider>
  </ChakraBaseProvider>,
);
