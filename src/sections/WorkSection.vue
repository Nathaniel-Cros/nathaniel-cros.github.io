<script setup>
import SectionShell from '../components/ui/SectionShell.vue'
import WorkCaseStudyCard from '../components/ui/WorkCaseStudyCard.vue'
import { useSiteContent } from '../composables/useSiteContent'

const { workContent } = useSiteContent()
</script>

<template>
  <SectionShell
    id="work"
    :eyebrow="workContent.eyebrow"
    :title="workContent.title"
    :description="workContent.description"
  >
    <div class="grid gap-5 xl:grid-cols-2">
      <WorkCaseStudyCard
        v-for="item in workContent.items"
        :key="item.title"
        :title="item.title"
        :description="item.description"
        :tags="item.tags"
        :impact="item.impact"
      />
    </div>
  </SectionShell>
</template>
