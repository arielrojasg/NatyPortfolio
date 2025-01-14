import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import es from './locales/es.json';
import router from './router';

// Detect browser language function with localStorage check
const detectBrowserLanguage = () => {
  const savedLanguage = localStorage.getItem('selectedLanguage');
  if (savedLanguage) {
    return savedLanguage;
  }
  const browserLang = navigator.language || navigator.userLanguage;
  return browserLang.startsWith('es') ? 'es' : 'en';
};

// Create i18n instance
export const i18n = createI18n({
  locale: detectBrowserLanguage(),
  fallbackLocale: 'en',
  messages: {
    en,
    es,
  },
});

const app = createApp(App);
app.use(i18n);
app.use(router);
app.mount('#app');
