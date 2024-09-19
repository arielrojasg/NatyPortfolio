import { createApp } from 'vue';
import Navbar from './components/Navbar.vue';
import Home from './views/home.vue';
import Footer from './components/footer.vue';
import Instagram from './components/instagram.vue';

createApp(Navbar).mount('#navbar');
createApp(Home).mount('#home');
createApp(Instagram).mount('#instagram');
createApp(Footer).mount('#footer');
