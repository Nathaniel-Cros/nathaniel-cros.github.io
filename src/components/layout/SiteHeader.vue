<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import AppContainer from './AppContainer.vue'
import LanguageSwitch from '../ui/LanguageSwitch.vue'

const { t, tm } = useI18n()

const brand = computed(() => t('site.brand'))
const items = computed(() => tm('navigation.items'))
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-white/10 bg-[rgba(8,11,16,0.72)] backdrop-blur-xl">
    <AppContainer class="flex items-center justify-between gap-6 py-4">
      <a class="flex items-center gap-3" href="#hero">
        <span
          class="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5 text-xs uppercase tracking-[0.24em] text-[var(--color-accent-strong)]"
        >
          on
        </span>
        <div class="hidden sm:block">
          <p class="text-sm font-medium text-white">{{ brand }}</p>
          <p class="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
            {{ t('header.tagline') }}
          </p>
        </div>
      </a>

      <div class="flex items-center gap-3">
        <nav :aria-label="t('header.navAriaLabel')" class="hidden items-center gap-1 md:flex">
          <a
            v-for="item in items"
            :key="item.href"
            :href="item.href"
            class="nav-link"
          >
            {{ item.label }}
          </a>
        </nav>

        <LanguageSwitch />
      </div>
    </AppContainer>
  </header>
</template>
