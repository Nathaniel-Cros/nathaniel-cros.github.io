<script setup>
import AppContainer from '../layout/AppContainer.vue'

defineProps({
  id: {
    type: String,
    required: true,
  },
  eyebrow: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <section :id="id" class="scroll-mt-24 py-[var(--space-section)]">
    <AppContainer class="space-y-10">
      <div class="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] lg:items-start">
        <div class="space-y-4">
          <p class="section-label">{{ eyebrow }}</p>
          <h2 class="section-title">{{ title }}</h2>
        </div>

        <p class="section-copy">
          {{ description }}
        </p>
      </div>

      <slot />
    </AppContainer>
  </section>
</template>
