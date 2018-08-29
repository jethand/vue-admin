import Main from '@/views/main/main';


const LoginRouter = [
    {
        path: '/login',
        name: 'login',
        meta: {
          title: 'Login - 登录',
        },
        component: () => import('@/views/login/index.vue')
    }
];

const ErrorRouters = [
  {
    path: '/401',
    name: 'error_401',
    meta: {
    },
    component: () => import('@/views/errorPage/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
    },
    component: () => import('@/views/errorPage/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
    },
    component: () => import('@/views/errorPage/404.vue')
  }
];
const ViewsRouter = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页',
    },
    component: Main,
    meta: {
      notCache: true
    },
    children: [
      {
        path: '/test',
        name: 'test',
        meta: {
          title: '测试',
        },
        component: () => import('@/views/test/test.vue')
      }
    ]
  }
];
export default [
  ...LoginRouter,
  ...ErrorRouters,
  ...ViewsRouter
];

