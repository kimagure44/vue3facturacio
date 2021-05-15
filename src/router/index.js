import { createRouter, createWebHistory } from 'vue-router';
import DashboardView from "../views/DashboardView.vue";
import FacturesView from "../views/FacturesView.vue";

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/factures',
    name: 'factures',
    component: FacturesView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
