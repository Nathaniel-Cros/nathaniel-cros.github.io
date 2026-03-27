<script setup>
defineProps({
  eyebrow: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  meta: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <article class="surface-card h-full p-6 sm:p-8">
    <p v-if="eyebrow" class="section-label mb-4">{{ eyebrow }}</p>
    <h3 class="text-xl font-medium text-white sm:text-2xl">{{ title }}</h3>
    <p class="mt-4 text-sm leading-7 text-[var(--color-text-muted)] sm:text-base">
      {{ description }}
    </p>

    <ul v-if="meta.length" class="mt-6 flex flex-wrap gap-3">
      <li v-for="item in meta" :key="item" class="chip">
        {{ item }}
      </li>
    </ul>
  </article>
</template>
