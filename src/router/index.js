import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home.vue';
import About from '../views/about.vue';
import Services from '../views/services.vue';
import MyWork from '../views/mywork.vue';
import EnquireNow from '../views/enquirenow.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/mywork', component: MyWork },
  { path: '/enquirenow', component: EnquireNow },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;