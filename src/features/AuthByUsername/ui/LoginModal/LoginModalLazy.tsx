import { lazy } from 'react';

export const LoginModalLazy = lazy(
  () => import('features/AuthByUsername/ui/LoginModal/LoginModal'),
);
