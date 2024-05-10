import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';

import { Box, Flex } from '@chakra-ui/react';

import { ErrorFallback } from 'widgets/ErrorFallback/public-api';
import { Navbar } from 'widgets/Navbar/public-api';
import { PageLoader } from 'widgets/PageLoader/public-api';
import { Sidebar } from 'widgets/Sidebar/public-api';

export function App() {
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
