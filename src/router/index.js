// src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'; // Switch to createWebHashHistory if using hash mode
import Home from '../views/home.vue'; // Adjust these imports to match your views
import About from '../views/about.vue';
import Services from '../views/services.vue';
import EnquireNow from '../views/enquirenow.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/enquirenow', component: EnquireNow },
];

const router = createRouter({
  // Use createWebHashHistory() for hash mode to prevent 404s on GitHub Pages
  history: createWebHashHistory(), // Change to createWebHistory() if you prefer not using hash mode (requires server-side support)
  routes,
});

export default router;
