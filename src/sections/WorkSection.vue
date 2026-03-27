<script setup>
import SectionPlaceholderCard from '../components/ui/SectionPlaceholderCard.vue'
import SectionShell from '../components/ui/SectionShell.vue'
import { workContent } from '../data/site'
</script>

<template>
  <SectionShell
    id="work"
    :eyebrow="workContent.eyebrow"
    :title="workContent.title"
    :description="workContent.description"
  >
    <div class="grid gap-5 lg:grid-cols-3">
      <SectionPlaceholderCard
        v-for="caseStudy in workContent.caseStudies"
        :key="caseStudy.title"
        :eyebrow="caseStudy.eyebrow"
        :title="caseStudy.title"
        :description="caseStudy.description"
        :meta="caseStudy.meta"
      />
    </div>
  </SectionShell>
</template>
