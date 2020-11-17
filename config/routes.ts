export default [
  { exact: true, path: '/', redirect: '/user/login' },
  {
    layout: false,
    menuRender: false,
    path: '/user/login',
    component: '@/pages/user/login',
  },
  {
    path: '/index',
    component: '@/pages/index',
  },
  {
    path: '/shop',
    component: '@/pages/shop',
  },
  {
    component: './404',
  },
];
