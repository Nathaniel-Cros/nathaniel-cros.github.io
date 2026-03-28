<script setup>
import ExperienceTimelineItem from '../components/ui/ExperienceTimelineItem.vue'
import SectionShell from '../components/ui/SectionShell.vue'
import { useSiteContent } from '../composables/useSiteContent'

const { experienceContent } = useSiteContent()
</script>

<template>
  <SectionShell
    id="experience"
    :eyebrow="experienceContent.eyebrow"
    :title="experienceContent.title"
    :description="experienceContent.description"
  >
    <div class="space-y-5">
      <ExperienceTimelineItem
        v-for="role in experienceContent.roles"
        :key="`${role.company}-${role.period}`"
        :role="role.role"
        :company="role.company"
        :period="role.period"
        :summary="role.summary"
        :highlights="role.highlights"
        :impact="role.impact"
      />
    </div>
  </SectionShell>
</template>
