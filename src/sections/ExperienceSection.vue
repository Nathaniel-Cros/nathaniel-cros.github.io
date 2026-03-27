<script setup>
import SectionPlaceholderCard from '../components/ui/SectionPlaceholderCard.vue'
import SectionShell from '../components/ui/SectionShell.vue'
import { experienceContent } from '../data/site'
</script>

<template>
  <SectionShell
    id="experience"
    :eyebrow="experienceContent.eyebrow"
    :title="experienceContent.title"
    :description="experienceContent.description"
  >
    <div class="grid gap-5 lg:grid-cols-3">
      <SectionPlaceholderCard
        v-for="role in experienceContent.roles"
        :key="role.title"
        :eyebrow="role.eyebrow"
        :title="role.title"
        :description="role.description"
        :meta="role.meta"
      />
    </div>
  </SectionShell>
</template>
