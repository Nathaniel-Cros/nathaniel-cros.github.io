<script setup>
import SectionPlaceholderCard from '../components/ui/SectionPlaceholderCard.vue'
import SectionShell from '../components/ui/SectionShell.vue'
import { labsContent } from '../data/site'
</script>

<template>
  <SectionShell
    id="labs"
    :eyebrow="labsContent.eyebrow"
    :title="labsContent.title"
    :description="labsContent.description"
  >
    <div class="grid gap-5 lg:grid-cols-3">
      <SectionPlaceholderCard
        v-for="project in labsContent.projects"
        :key="project.title"
        :eyebrow="project.eyebrow"
        :title="project.title"
        :description="project.description"
        :meta="project.meta"
      />
    </div>
  </SectionShell>
</template>
