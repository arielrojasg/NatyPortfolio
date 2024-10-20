import { createApp } from 'vue';
import Navbar from './components/navbar.vue';
import Home from './views/home.vue';
import Footer from './components/footer.vue';
import Instagram from './components/instagram.vue';
import { i18n } from './main'; // Import the i18n instance from main.js

// Create the app and use the i18n instance for language support
const app = createApp(Navbar);
app.use(i18n);
app.mount('#navbar');

const homeApp = createApp(Home);
homeApp.use(i18n);
homeApp.mount('#home');

const footerApp = createApp(Footer);
footerApp.use(i18n);
footerApp.mount('#footer');

// Instagram component (if needed)
// const instagramApp = createApp(Instagram);
// instagramApp.use(i18n);
// instagramApp.mount('#instagram');

// Animation logic
document.addEventListener('DOMContentLoaded', function () {
  const targets = document.querySelectorAll('.cloud');

  function handleScroll() {
    targets.forEach(target => {
      const rect = target.getBoundingClientRect();
      const inView = rect.top <= window.innerHeight && rect.bottom >= 0;

      if (inView && !target.classList.contains('animate')) {
        target.classList.add('animate');
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();
});