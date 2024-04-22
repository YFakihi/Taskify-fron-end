import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import LoginTask from '../components/auth/LoginTask.vue';
import RegisterTask from '../components/auth/RegisterTask.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: LoginTask
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterTask
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;