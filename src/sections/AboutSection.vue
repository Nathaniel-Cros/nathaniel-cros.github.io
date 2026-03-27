<script setup>
import SectionPlaceholderCard from '../components/ui/SectionPlaceholderCard.vue'
import SectionShell from '../components/ui/SectionShell.vue'
import { aboutContent } from '../data/site'
</script>

<template>
  <SectionShell
    id="about"
    :eyebrow="aboutContent.eyebrow"
    :title="aboutContent.title"
    :description="aboutContent.description"
  >
    <div class="grid gap-5 lg:grid-cols-2">
      <SectionPlaceholderCard
        v-for="card in aboutContent.cards"
        :key="card.title"
        :eyebrow="card.eyebrow"
        :title="card.title"
        :description="card.description"
        :meta="card.meta"
      />
    </div>
  </SectionShell>
</template>
