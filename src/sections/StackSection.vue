<script setup>
import SectionPlaceholderCard from '../components/ui/SectionPlaceholderCard.vue'
import SectionShell from '../components/ui/SectionShell.vue'
import { useSiteContent } from '../composables/useSiteContent'

const { stackContent } = useSiteContent()
</script>

<template>
  <SectionShell
    id="stack"
    :eyebrow="stackContent.eyebrow"
    :title="stackContent.title"
    :description="stackContent.description"
  >
    <div class="grid gap-5 md:grid-cols-2">
      <SectionPlaceholderCard
        v-for="group in stackContent.groups"
        :key="group.title"
        :eyebrow="group.eyebrow"
        :title="group.title"
        :description="group.description"
        :meta="group.items"
      />
    </div>
  </SectionShell>
</template>
