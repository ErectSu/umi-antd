export default [
  { exact: true, path: '/', redirect: '/user/login' },
  {
    layout: false,
    menuRender: false,
    // name: 'login',
    path: '/user/login',
    component: '@/pages/user/login',
  },
];
