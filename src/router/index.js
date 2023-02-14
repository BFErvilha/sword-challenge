import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/Login/Login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () =>
      import(/* webpackChunkName: "register" */ '../views/Login/Register.vue'),
  },
  {
    path: '/home',
    name: 'home',
    // eslint-disable-next-line
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
