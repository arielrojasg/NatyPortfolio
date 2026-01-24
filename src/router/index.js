import Home from '../views/home.vue'
import About from '../views/about.vue'
import Services from '../views/services.vue'
import MyWork from '../views/mywork.vue'
import EnquireNow from '../views/enquirenow.vue'

export const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/mywork', component: MyWork },
  { path: '/enquirenow', component: EnquireNow },
]
