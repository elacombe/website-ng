import Home from './client/components/home';
import Technologies from './client/components/technologies';
import Portfolio from './client/components/portfolio';

const routes = ([
    {
      path: '/home',
      name: 'home',
      exact: true,
      component: Home,
      default: true,
    },
    {
      path: '/technologies/:anchor?',
      exact: false,
      name: 'technologies',
      component: Technologies,
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      exact: true,
      component: Portfolio,
    },
  ]
);

export const defaultRoute = () => routes.filter(r => r.default)[0];
export default routes;
