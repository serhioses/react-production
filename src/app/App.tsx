import { Suspense, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';

import { Box, Flex } from '@chakra-ui/react';

import { userActions } from 'entities/User/public-api';

import { ErrorFallback } from 'widgets/ErrorFallback/public-api';
import { Navbar } from 'widgets/Navbar/public-api';
import { PageLoader } from 'widgets/PageLoader/public-api';
import { Sidebar } from 'widgets/Sidebar/public-api';

import { useAppDispatch } from 'app/providers/StoreProvider/config/hooks';

export function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<PageLoader />}>
        <Box>
          <Navbar />

          <Flex>
            <Sidebar />
            <Box sx={{ flexGrow: 1, p: 5, position: 'relative' }}>
              <Suspense fallback={<PageLoader />}>
                <Outlet />
              </Suspense>
            </Box>
          </Flex>
        </Box>
      </Suspense>
    </ErrorBoundary>
  );
}
