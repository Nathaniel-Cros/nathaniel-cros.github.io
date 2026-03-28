<script setup>
import { useI18n } from 'vue-i18n'
import { useLocale } from '../../composables/useLocale'

const { locale, locales, setLocale } = useLocale()
const { t } = useI18n()
</script>

<template>
  <div
    class="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1"
    role="group"
    :aria-label="t('header.localeAriaLabel')"
  >
    <button
      v-for="item in locales"
      :key="item.code"
      type="button"
      class="rounded-full px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] transition-colors duration-200"
      :class="
        locale === item.code
          ? 'bg-white text-[var(--color-bg)]'
          : 'text-[var(--color-text-muted)] hover:bg-white/10 hover:text-white'
      "
      @click="setLocale(item.code)"
    >
      {{ item.label }}
    </button>
  </div>
</template>
