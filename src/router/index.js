import Vue from 'vue';
import VueRouter from 'vue-router';
import EmptyPage from '../views/EmptyPage.vue';
import DashboardLayout from '../layout/dashboard/DashboardLayout.vue';
import UserList from '../views/user/UserList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/emptyPage',
    children: [
      {
        path: '/emptyPage',
        name: 'EmptyPage',
        component: EmptyPage,
      },
      {
        path: '/user',
        name: 'UserList',
        title: 'List Of User',
        component: UserList,
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
