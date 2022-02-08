import { IRouterConfig } from 'ice';
import Layout from '@/Layouts/BasicLayout';
import Home from '@/pages/Home';
import NotFound from '@/pages/Others/NotFound';
import NotAccess from '@/pages/Others/NotAccess';
import Login from '@/pages/Login';
import User from '@/pages/System/User';
import Role from '@/pages/System/Role';
import RoleDistribute from '@/pages/System/Role/roleDistribute';
import Auth from '@/pages/System/Auth';
import BlogList from '@/pages/Bussiness/Blog';
import EditorRoute from '@/pages/Bussiness/Blog/editor';

const routerConfig: IRouterConfig[] = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/editor',
    component: EditorRoute,
    exact: true,
  },
  {
    path: '/editor/:id',
    component: EditorRoute,
    exact: true,
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/home',
        component: Home,
      },
      {
        path: '/system',
        children: [
          {
            path: '/user',
            component: User,
            exact: true,
          },
          {
            path: '/auth',
            component: Auth,
          },
          {
            path: '/role',
            component: Role,
            exact: true,
          },
          {
            path: '/role/:id',
            component: RoleDistribute,
            exact: true,
          },
          {
            path: '',
            redirect: '/system/user',
          },
        ],
      },
      {
        path: '/blog',
        children: [
          {
            path: '/article',
            component: BlogList,
          },
        ],
      },
      {
        path: '/403',
        component: NotAccess,
      },
      {
        path: '',
        exact: true,
        redirect: '/home',
      },
      {
        component: NotFound,
      },
    ],
  },
];

export default routerConfig;
