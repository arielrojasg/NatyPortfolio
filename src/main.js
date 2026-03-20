import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router'
import { createI18n } from 'vue-i18n'

import en from './locales/en.json'
import es from './locales/es.json'

const detectBrowserLanguage = () => {
  if (typeof window === 'undefined') return 'en'

  const savedLanguage = localStorage.getItem('selectedLanguage')
  if (savedLanguage) return savedLanguage

  const browserLang = navigator.language || navigator.userLanguage
  return browserLang.startsWith('es') ? 'es' : 'en'
}

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,es
  }
})

export const createApp = ViteSSG(
  App,
  {
    routes,
    includedRoutes: (paths) => paths
  },
  ({ app, isClient }) => {
    if (isClient) {
      i18n.global.locale.value = detectBrowserLanguage()
    }

    app.use(i18n)
  }
)

