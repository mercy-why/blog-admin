import { IRouterConfig } from 'ice';
import Layout from '@/Layouts/BasicLayout';
import NotFound from '@/components/NotFound';
import Login from '@/pages/Login';
import Interface from '@/pages/System/Interface';
import InterfaceList from '@/pages/System/Interface/list';
import User from '@/pages/System/User';
import Role from '@/pages/System/Role';
import Auth from '@/pages/System/Auth';

const routerConfig: IRouterConfig[] = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/system',
        children: [
          {
            path: '/user',
            component: User,
          },
          {
            path: '/role',
            component: Role,
          },
          {
            path: '/auth',
            component: Auth,
          },
          {
            path: '/interface',
            component: Interface,
            exact: true,
          },
          {
            path: '/interface/:id',
            component: InterfaceList,
            exact: true,
          },
        ],
      },
      {
        component: NotFound,
      },
    ],
  },
];

export default routerConfig;
