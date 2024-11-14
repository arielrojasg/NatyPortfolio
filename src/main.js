import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import es from './locales/es.json';

// Detect browser language function with localStorage check
const detectBrowserLanguage = () => {
  // Check if language is saved in localStorage
  const savedLanguage = localStorage.getItem('selectedLanguage');
  if (savedLanguage) {
    return savedLanguage;
  }

  // Fallback to browser language detection if no language is saved
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

// Function to change language and save to localStorage
const changeLanguage = (language) => {
  i18n.global.locale.value = language; // Set the new language
  localStorage.setItem('selectedLanguage', language); // Save language to localStorage
};

const app = createApp(App);
app.use(i18n);
app.mount('#app');
