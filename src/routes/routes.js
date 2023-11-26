import config from '~/config';
const { routes } = config;

import Home from '~/pages/Home';

const publicRoutes = [
  {
    path: routes.home,
    component: Home,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
