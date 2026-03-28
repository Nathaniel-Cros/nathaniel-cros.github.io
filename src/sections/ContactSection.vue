<script setup>
import SectionShell from '../components/ui/SectionShell.vue'
import { useSiteContent } from '../composables/useSiteContent'

const { contactContent } = useSiteContent()
</script>

<template>
  <SectionShell
    id="contact"
    :eyebrow="contactContent.eyebrow"
    :title="contactContent.title"
    :description="contactContent.description"
  >
    <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      <component
        :is="channel.href ? 'a' : 'article'"
        v-for="channel in contactContent.channels"
        :key="channel.title"
        :href="channel.href"
        class="surface-card block h-full p-6 transition-colors duration-200 hover:bg-[var(--color-surface-elevated)] sm:p-8"
      >
        <p class="section-label mb-4">{{ channel.title }}</p>
        <h3 class="text-xl font-medium text-white sm:text-2xl">{{ channel.value }}</h3>
        <p class="mt-4 text-sm leading-7 text-[var(--color-text-muted)] sm:text-base">
          {{ channel.description }}
        </p>
      </component>
    </div>
  </SectionShell>
</template>
