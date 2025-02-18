import { createApp } from 'vue';
import Navbar from './components/navbar.vue';
import Home from './views/home.vue';
import Footer from './components/footer.vue';
import Instagram from './components/instagram.vue';
import { i18n } from './main';

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://unpkg.com/transition-style';
document.head.appendChild(link);

const app = createApp(Navbar);
app.use(i18n);
app.mount('#navbar');

const homeApp = createApp(Home);
homeApp.use(i18n);
homeApp.mount('#content');

const footerApp = createApp(Footer);
footerApp.use(i18n);
footerApp.mount('#footer');

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