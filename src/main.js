import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import es from './locales/es.json';

// Detect browser language function
const detectBrowserLanguage = () => {
  const browserLang = navigator.language || navigator.userLanguage;
  if (browserLang.startsWith('es')) {
    return 'es';
  }
  return 'en';
};

// Create i18n instance
export const i18n = createI18n({
  locale: detectBrowserLanguage(),
  fallbackLocale: 'en',
  messages: {
    en,
    es
  }
});

const app = createApp(App);
app.use(i18n);
app.mount('#app');
