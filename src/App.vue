<script setup>
import SiteHeader from './components/layout/SiteHeader.vue'
import { navigationItems, siteMeta } from './data/site'
import AboutSection from './sections/AboutSection.vue'
import ContactSection from './sections/ContactSection.vue'
import ExperienceSection from './sections/ExperienceSection.vue'
import HeroSection from './sections/HeroSection.vue'
import LabsSection from './sections/LabsSection.vue'
import StackSection from './sections/StackSection.vue'
import WorkSection from './sections/WorkSection.vue'
</script>

<template>
  <div class="relative min-h-screen overflow-x-clip bg-[var(--color-bg)] text-[var(--color-text)]">
    <div
      class="pointer-events-none absolute inset-x-0 top-0 h-[32rem]"
      style="background: radial-gradient(circle at top, rgba(143, 184, 255, 0.18), transparent 62%);"
    />

    <div class="app-shell relative">
      <SiteHeader :brand="siteMeta.brand" :items="navigationItems" />

      <main class="pb-24">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <WorkSection />
        <StackSection />
        <LabsSection />
        <ContactSection />
      </main>
    </div>
  </div>
</template>
