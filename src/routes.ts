import { IRouterConfig } from 'ice';
import Layout from '@/Layouts/BasicLayout';
import Home from '@/pages/Home';
import NotFound from '@/pages/Others/NotFound';
import NotAccess from '@/pages/Others/NotAccess';
import Login from '@/pages/Login';
import Auth from '@/pages/System/Auth';
import InterfaceList from '@/pages/System/Auth/list';
import User from '@/pages/System/User';
import Role from '@/pages/System/Role';
import RoleDistribute from '@/pages/System/Role/roleDistribute';
import MenuManage from '@/pages/System/MenuManage';
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
            path: '/menuManage',
            component: MenuManage,
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
            path: '/auth',
            component: Auth,
            exact: true,
          },
          {
            path: '/auth/:id',
            component: InterfaceList,
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
