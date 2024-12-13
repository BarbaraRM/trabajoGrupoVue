import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "../views/HomeView";
import TransactionsView from "../views/TransactionsView";
import NotFound from "../views/NotFound";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/transactions',
    name: 'Transaction', // Changed to multi-word name
    component: TransactionsView
  },
  {
    path: '/:pathMatch(.*)*',  // Expresión regular que captura cualquier ruta no definida
    name: 'not-found',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;