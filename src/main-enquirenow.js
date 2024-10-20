import { createApp } from 'vue';
import Navbar from './components/navbar.vue';
import EnquireNow from './views/enquirenow.vue';
import Footer from './components/footer.vue';
import Instagram from './components/instagram.vue';
import { i18n } from './main'; // Import i18n from main.js

// Initialize Navbar with i18n
const navbarApp = createApp(Navbar);
navbarApp.use(i18n);
navbarApp.mount('#navbar');

// Initialize EnquireNow with i18n
const enquireNowApp = createApp(EnquireNow);
enquireNowApp.use(i18n);
enquireNowApp.mount('#enquirenow');

// Initialize Instagram with i18n (optional)
const instagramApp = createApp(Instagram);
instagramApp.use(i18n);
instagramApp.mount('#instagram');

// Initialize Footer with i18n
const footerApp = createApp(Footer);
footerApp.use(i18n);
footerApp.mount('#footer');
