import { createRouter, createWebHashHistory } from 'vue-router';

const Main = () => import('../components/Main.vue');
const BuyCar = () => import('../components/BuyCar.vue');
const SaleCar = () => import('../components/SaleCar.vue');
const MyCar = () => import('../components/MyCar.vue');

const routes = [
  {
    path: '/',
    component: Main,
    redirect: '/buy',
    children: [
      {
        path: 'buy',
        component: BuyCar,
      },
      {
        path: 'sale',
        component: SaleCar,
      },
      {
        path: 'selfcar',
        component: MyCar,
      },
    ],
  },
];

const router = createRouter({
  /**
  提供历史实现使用。为了简化起见，我们在这里使用哈希历史记录
    1.createWebHashHistory路由模式路径带#号
    2.createWebHistory路由模式路径不带#号(生产环境下不能直接访问项目，需要nginx转发)
  */
  history: createWebHashHistory(),
  routes, //  `routes: routes` 的缩写
});

export default router;
