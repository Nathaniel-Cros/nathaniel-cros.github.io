<script setup>
import AppContainer from '../components/layout/AppContainer.vue'
import { useSiteContent } from '../composables/useSiteContent'

const { heroContent } = useSiteContent()
</script>

<template>
  <section id="hero" class="relative overflow-hidden pt-16 sm:pt-20">
    <AppContainer>
      <div
        class="grid gap-10 pb-[var(--space-section)] lg:grid-cols-[minmax(0,1.18fr)_minmax(20rem,0.82fr)] lg:items-end"
      >
        <div class="space-y-8">
          <div class="space-y-5">
            <p class="section-label">{{ heroContent.eyebrow }}</p>

            <h1
              class="max-w-4xl text-5xl font-medium leading-[0.95] sm:text-6xl lg:text-7xl"
              style="font-family: var(--font-display);"
            >
              {{ heroContent.title }}
            </h1>

            <p class="max-w-2xl text-base leading-8 text-[var(--color-text-muted)] sm:text-lg">
              {{ heroContent.description }}
            </p>
          </div>

          <div class="flex flex-wrap gap-3">
            <a
              v-for="action in heroContent.actions"
              :key="action.label"
              :href="action.href"
              :target="action.target"
              :rel="action.rel"
              :download="action.download"
              :class="action.variant === 'primary' ? 'cta-primary' : 'cta-secondary'"
            >
              {{ action.label }}
            </a>
          </div>

          <ul class="flex flex-wrap gap-3">
            <li v-for="item in heroContent.highlights" :key="item" class="chip">
              {{ item }}
            </li>
          </ul>
        </div>

        <aside class="surface-card relative overflow-hidden p-6 sm:p-8">
          <div
            class="pointer-events-none absolute inset-x-0 top-0 h-px"
            style="background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.24), transparent);"
          />

          <p class="section-label mb-6">{{ heroContent.snapshotLabel }}</p>

          <dl class="grid gap-4 sm:grid-cols-2">
            <div
              v-for="metric in heroContent.metrics"
              :key="metric.label"
              class="rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <dt class="text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                {{ metric.label }}
              </dt>
              <dd class="mt-2 text-lg font-medium text-white">
                {{ metric.value }}
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </AppContainer>
  </section>
</template>
