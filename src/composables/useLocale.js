import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const localeOptions = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
]

export function useLocale() {
  const { locale } = useI18n()

  const setLocale = (value) => {
    locale.value = value

    if (typeof window !== 'undefined') {
      window.localStorage.setItem('cv-portfolio-locale', value)
    }

    if (typeof document !== 'undefined') {
      document.documentElement.lang = value
    }
  }

  return {
    locale: computed(() => locale.value),
    locales: localeOptions,
    setLocale,
  }
}
