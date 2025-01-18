import { createApp } from 'vue';
import Navbar from './components/navbar.vue';
import About from './views/about.vue';
import Footer from './components/footer.vue';
import Instagram from './components/instagram.vue';
import { i18n } from './main'; // Import i18n instance from main.js

// Initialize Navbar with i18n
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'assets//css/about.css';
document.head.appendChild(link);

const navbarApp = createApp(Navbar);
navbarApp.use(i18n);
navbarApp.mount('#navbar');

// Initialize About with i18n
const aboutApp = createApp(About);
aboutApp.use(i18n);
aboutApp.mount('#content');

// Initialize Footer with i18n
const footerApp = createApp(Footer);
footerApp.use(i18n);
footerApp.mount('#footer');