<script setup>
import SectionShell from '../components/ui/SectionShell.vue'
import { stackContent } from '../data/site'
</script>

<template>
  <SectionShell
    id="stack"
    :eyebrow="stackContent.eyebrow"
    :title="stackContent.title"
    :description="stackContent.description"
  >
    <div class="grid gap-5 lg:grid-cols-3">
      <article
        v-for="group in stackContent.groups"
        :key="group.name"
        class="surface-card p-6 sm:p-8"
      >
        <p class="section-label mb-4">{{ group.name }}</p>
        <ul class="flex flex-wrap gap-3">
          <li v-for="item in group.items" :key="item" class="chip">
            {{ item }}
          </li>
        </ul>
      </article>
    </div>
  </SectionShell>
</template>
