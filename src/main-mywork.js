import { createApp } from 'vue';
import Navbar from './components/navbar.vue';
import MyWork from './views/mywork.vue';
import Footer from './components/footer.vue';
import Instagram from './components/instagram.vue';
import { i18n } from './main'; // Import i18n from main.js

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'assets//css/mywork.css';
document.head.appendChild(link);

const navbarApp = createApp(Navbar);
navbarApp.use(i18n);
navbarApp.mount('#navbar');

const myworkApp = createApp(MyWork);
myworkApp.use(i18n);
myworkApp.mount('#mywork');


const footerApp = createApp(Footer);
footerApp.use(i18n);
footerApp.mount('#footer');
