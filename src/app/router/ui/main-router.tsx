import { createBrowserRouter } from 'react-router-dom';

import { ERoutes } from 'shared/enums/routes';

import { AboutPageLazy } from 'pages/AboutPage/public-api';
import { HomePageLazy } from 'pages/HomePage/public-api';
import { NotFoundPage } from 'pages/NotFoundPage/public-api';

import { App } from 'app/App';

export const mainRouter = createBrowserRouter([
  {
    path: ERoutes.Main,
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePageLazy />,
      },
      {
        path: ERoutes.About,
        element: <AboutPageLazy />,
      },
      {
        path: ERoutes.NotFound,
        element: <NotFoundPage />,
      },
    ],
  },
]);
