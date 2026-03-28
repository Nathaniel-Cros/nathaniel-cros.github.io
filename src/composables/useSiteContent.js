import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export function useSiteContent() {
  const { t, tm } = useI18n()

  return {
    brand: computed(() => t('site.brand')),
    navigationItems: computed(() => tm('navigation.items')),
    heroContent: computed(() => tm('hero')),
    aboutContent: computed(() => tm('about')),
    experienceContent: computed(() => tm('experience')),
    contactContent: computed(() => tm('contact')),
  }
}
