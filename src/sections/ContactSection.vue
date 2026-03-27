<script setup>
import SectionShell from '../components/ui/SectionShell.vue'
import { contactContent } from '../data/site'
</script>

<template>
  <SectionShell
    id="contact"
    :eyebrow="contactContent.eyebrow"
    :title="contactContent.title"
    :description="contactContent.description"
  >
    <div class="grid gap-5 lg:grid-cols-3">
      <a
        v-for="channel in contactContent.channels"
        :key="channel.title"
        :href="channel.href"
        class="surface-card block h-full p-6 transition-colors duration-200 hover:bg-[var(--color-surface-elevated)] sm:p-8"
      >
        <p class="section-label mb-4">{{ channel.title }}</p>
        <h3 class="text-xl font-medium text-white">{{ channel.meta[0] }}</h3>
        <p class="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">
          {{ channel.description }}
        </p>
      </a>
    </div>
  </SectionShell>
</template>
