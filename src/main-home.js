import { createApp } from 'vue';
import Navbar from './components/Navbar.vue';
import Home from './views/home.vue';
import Footer from './components/footer.vue';
import Instagram from './components/instagram.vue';

createApp(Navbar).mount('#navbar');
createApp(Home).mount('#home');
createApp(Footer).mount('#footer');

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
  
  
