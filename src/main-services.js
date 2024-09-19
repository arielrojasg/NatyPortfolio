import { createApp } from 'vue';
import Navbar from './components/navbar.vue';
import Services from './views/services.vue';
import Footer from './components/footer.vue';

createApp(Navbar).mount('#navbar');
createApp(Services).mount('#services');
createApp(Footer).mount('#footer');


// JavaScript to toggle the answers
const questions = document.querySelectorAll('.faq-question');

questions.forEach(question => {
    question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle('active');
    });
});

