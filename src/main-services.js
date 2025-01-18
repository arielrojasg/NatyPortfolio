import { createApp } from 'vue';
import Navbar from './components/navbar.vue';
import Services from './views/services.vue';
import Footer from './components/footer.vue';
import { i18n } from './main'; // Import i18n from main.js

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'assets//css/services.css';
document.head.appendChild(link);

// Initialize Navbar with i18n
const navbarApp = createApp(Navbar);
navbarApp.use(i18n);
navbarApp.mount('#navbar');

// Initialize Services with i18n
const servicesApp = createApp(Services);
servicesApp.use(i18n);
servicesApp.mount('#services');

// Initialize Footer with i18n
const footerApp = createApp(Footer);
footerApp.use(i18n);
footerApp.mount('#footer');

// JavaScript to toggle the FAQ answers
document.addEventListener('DOMContentLoaded', function () {
  const questions = document.querySelectorAll('.faq-question');
  
  questions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      answer.classList.toggle('active');
    });
  });
});
