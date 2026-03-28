<script setup>
import { useI18n } from 'vue-i18n'

defineProps({
  role: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  period: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  highlights: {
    type: Array,
    default: () => [],
  },
  impact: {
    type: String,
    required: true,
  },
})

const { t } = useI18n()
</script>

<template>
  <article class="surface-card grid gap-8 p-6 sm:p-8 lg:grid-cols-[14rem_minmax(0,1fr)]">
    <div class="space-y-3">
      <p class="section-label">{{ period }}</p>
      <div>
        <h3 class="text-xl font-medium text-white sm:text-2xl">{{ role }}</h3>
        <p class="mt-2 text-sm leading-6 text-[var(--color-accent-strong)]">
          {{ company }}
        </p>
      </div>
    </div>

    <div class="space-y-6">
      <p class="text-sm leading-7 text-[var(--color-text-muted)] sm:text-base">
        {{ summary }}
      </p>

      <ul class="space-y-3">
        <li
          v-for="item in highlights"
          :key="item"
          class="flex gap-3 text-sm leading-7 text-[var(--color-text-muted)] sm:text-base"
        >
          <span class="mt-3 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
          <span>{{ item }}</span>
        </li>
      </ul>

      <div class="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
        <p class="section-label mb-3">{{ t('experience.impactLabel') }}</p>
        <p class="text-sm leading-7 text-white/88 sm:text-base">
          {{ impact }}
        </p>
      </div>
    </div>
  </article>
</template>
