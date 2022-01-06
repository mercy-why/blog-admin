module.exports = {
  '/api/getRepos': {
    dataSource: [
      {
        id: 1,
        name: 'facebook/react',
        description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces',
        logo: 'https://avatars3.githubusercontent.com/u/69631',
      },
      {
        id: 2,
        name: 'vuejs/vue',
        description:
          'Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web. ',
        logo: 'https://avatars1.githubusercontent.com/u/6128107',
      },
      {
        id: 3,
        name: 'angular/angular',
        description: 'One framework. Mobile & desktop. ',
        logo: 'https://avatars3.githubusercontent.com/u/139426',
      },
      {
        id: 4,
        name: 'nuxt/nuxt.js',
        description: 'The Vue.js Framework',
        logo: 'https://avatars2.githubusercontent.com/u/23360933',
      },
      {
        id: 5,
        name: 'zeit/next.js',
        description: 'The React Framework',
        logo: 'https://avatars0.githubusercontent.com/u/14985020',
      },
      {
        id: 6,
        name: 'ice-lab/ice.js',
        description: 'A universal framework based on React.js.',
        logo: 'https://avatars1.githubusercontent.com/u/1961952',
      },
    ],
  },
  'POST /api/common/getCurrentUser': {
    code: 0,
    desc: '获取当前用户成功',
    data: {
      id: 1,
      name: '管理员',
      state: 1,
      accountNonExpired: true,
      accountNonLocked: true,
      credentialsNonExpired: true,
      enabled: true,
      currentOrg: {
        id: 0,
        state: 1,
      },
      currentMenuList: [
        {
          id: 1,
          name: '系统管理',
          type: 1,
          state: 1,
          sort: 100,
          url: '/system',
          immutable: 1,
          children: [
            {
              id: 6,
              name: '权限管理',
              type: 1,
              state: 1,
              url: '/system/auth',
              sort: 10,
              immutable: 1,
              pid: 1,
            },
            {
              id: 4,
              name: '菜单管理',
              type: 1,
              state: 1,
              url: '/system/org',
              sort: 20,
              immutable: 1,
              pid: 1,
            },
            {
              id: 17,
              name: '账号管理',
              type: 1,
              state: 1,
              url: '/system/user',
              // component: 'system/user',
              sort: 30,
              immutable: 1,
              pid: 1,
            },
            {
              id: 18,
              name: '用户管理',
              type: 1,
              state: 1,
              url: '/system/role',
              component: 'system/role',
              sort: 30,
              immutable: 1,
            },
          ],
          pid: 0,
        },
      ],
      orgList: [null],
      orgIdMapRoleList: {
        0: [
          {
            id: 1,
            name: 'ROLE_ADMIN',
            info: '系统管理员',
            immutable: 0,
            state: 1,
            rangeType: -1,
            orgId: 0,
          },
        ],
      },
    },
  },
};
