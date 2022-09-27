import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import beforeEach from './beforeEach';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/itens',
        name: 'itens',
        component: () => import(/* webpackChunkName: "about" */ '../views/itens/Itens.vue'),
      },
      {
        path: '/locacao',
        name: 'locacao',
        component: () => import(/* webpackChunkName: "about" */ '../views/locacao/Locacao.vue'),
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../security/Login.vue'),
  },
];



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(beforeEach);

export default router;
