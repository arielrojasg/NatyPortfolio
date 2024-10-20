import { createApp } from 'vue';
import Navbar from './components/navbar.vue';
import MyWork from './views/mywork.vue';
import Footer from './components/footer.vue';
import Instagram from './components/instagram.vue';
import { i18n } from './main'; // Import i18n from main.js

// Initialize Navbar with i18n
const navbarApp = createApp(Navbar);
navbarApp.use(i18n);
navbarApp.mount('#navbar');

// Initialize MyWork with i18n
const myworkApp = createApp(MyWork);
myworkApp.use(i18n);
myworkApp.mount('#mywork');

// Optionally initialize Instagram component with i18n if needed
// const instagramApp = createApp(Instagram);
// instagramApp.use(i18n);
// instagramApp.mount('#instagram');

// Initialize Footer with i18n
const footerApp = createApp(Footer);
footerApp.use(i18n);
footerApp.mount('#footer');
