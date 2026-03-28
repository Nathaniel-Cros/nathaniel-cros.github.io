<script setup>
import { useI18n } from 'vue-i18n'

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    default: () => [],
  },
  impact: {
    type: String,
    default: '',
  },
})

const { t } = useI18n()
</script>

<template>
  <article class="surface-card h-full p-6 sm:p-8">
    <h3 class="text-xl font-medium text-white sm:text-2xl">{{ title }}</h3>

    <p class="mt-4 text-sm leading-7 text-[var(--color-text-muted)] sm:text-base">
      {{ description }}
    </p>

    <ul v-if="tags.length" class="mt-6 flex flex-wrap gap-3">
      <li v-for="tag in tags" :key="tag" class="chip">
        {{ tag }}
      </li>
    </ul>

    <div
      v-if="impact"
      class="mt-6 rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
    >
      <p class="section-label mb-3">{{ t('work.impactLabel') }}</p>
      <p class="text-sm leading-7 text-white/88 sm:text-base">
        {{ impact }}
      </p>
    </div>
  </article>
</template>
