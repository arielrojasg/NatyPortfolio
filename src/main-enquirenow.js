import { createApp } from 'vue';
import Navbar from './components/Navbar.vue';
import EnquireNow from './views/enquirenow.vue';
import Footer from './components/footer.vue';
import Instagram from './components/instagram.vue';

createApp(Navbar).mount('#navbar');
createApp(EnquireNow).mount('#enquirenow');
createApp(Instagram).mount('#instagram');
createApp(Footer).mount('#footer');
