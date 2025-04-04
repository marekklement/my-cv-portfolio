<template>
  <div>
    <HeroSection />
    <AboutSection />
    <ExperienceSection />

    <!-- Projects Section -->
    <section id="projects" class="min-h-screen bg-darksurface relative overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div class="absolute top-40 left-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl"></div>
        <div class="absolute bottom-40 right-20 w-72 h-72 rounded-full bg-secondary/10 blur-3xl"></div>
      </div>
      <ProjectsSection />
    </section>

    <EducationSection />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

// Import components
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import EducationSection from '@/components/EducationSection.vue'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  // Any global animations or initialization could go here
  // Each component now handles its own animations
})
</script>
