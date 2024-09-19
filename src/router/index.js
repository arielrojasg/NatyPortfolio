// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home.vue'; // Adjust these imports to match your views

const routes = [
  { path: '/', component: Home },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;