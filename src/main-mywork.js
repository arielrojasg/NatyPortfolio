import { createApp } from 'vue';
import Navbar from './components/Navbar.vue';
import MyWork from './views/mywork.vue';
import Footer from './components/footer.vue';
import Instagram from './components/instagram.vue';

createApp(Navbar).mount('#navbar');
createApp(MyWork).mount('#mywork');
//createApp(Instagram).mount('#instagram');
createApp(Footer).mount('#footer');
