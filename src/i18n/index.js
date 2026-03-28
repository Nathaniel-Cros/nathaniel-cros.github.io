import { createI18n } from 'vue-i18n'
import { messages } from './messages'

const STORAGE_KEY = 'cv-portfolio-locale'
const SUPPORTED_LOCALES = ['es', 'en']

function getInitialLocale() {
  if (typeof window === 'undefined') {
    return 'es'
  }

  const savedLocale = window.localStorage.getItem(STORAGE_KEY)

  if (savedLocale && SUPPORTED_LOCALES.includes(savedLocale)) {
    return savedLocale
  }

  const browserLocale = window.navigator.language?.toLowerCase() || 'es'
  return browserLocale.startsWith('en') ? 'en' : 'es'
}

const locale = getInitialLocale()

if (typeof document !== 'undefined') {
  document.documentElement.lang = locale
}

export const i18n = createI18n({
  legacy: false,
  locale,
  fallbackLocale: 'es',
  messages,
})
