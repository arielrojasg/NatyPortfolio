import { createApp } from 'vue';
import Navbar from './components/navbar.vue';
import About from './views/about.vue';
import Footer from './components/footer.vue';
import Instagram from './components/instagram.vue';

createApp(Navbar).mount('#navbar');
createApp(About).mount('#about');
createApp(Instagram).mount('#instagram');
createApp(Footer).mount('#footer');
