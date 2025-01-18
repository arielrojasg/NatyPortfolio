import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home.vue';
import About from '../views/about.vue';
import Services from '../views/services.vue';
import MyWork from '../views/mywork.vue';
import EnquireNow from '../views/enquirenow.vue';

const routes = [
  { path: '/', component: Home },
<<<<<<< HEAD
  { path: '/about.html', component: About },
  { path: '/services.html', component: Services },
  { path: '/mywork.html', component: MyWork },
  { path: '/enquirenow.html', component: EnquireNow },
=======
  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/mywork', component: MyWork },
  { path: '/enquirenow', component: EnquireNow },
>>>>>>> master
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;