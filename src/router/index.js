import { createRouter, createWebHistory } from 'vue-router';
import DashboardView from "../views/DashboardView.vue";
import FacturesView from "../views/FacturesView.vue";
import ClientsView from "../views/ClientsView.vue";

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
  },
  {
    path: '/clients',
    name: 'clients',
    component: ClientsView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
