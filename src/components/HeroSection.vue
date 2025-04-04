<template>
  <section class="min-h-screen flex items-center justify-center bg-darkbg relative overflow-hidden">
    <div class="absolute inset-0 z-0">
      <div class="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>
      <div class="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-secondary/20 blur-3xl"></div>
      <div class="absolute top-1/3 right-1/3 w-40 h-40 rounded-full bg-accent/20 blur-3xl"></div>
    </div>

    <div class="relative z-10 px-4 py-32 md:py-0 max-w-7xl mx-auto">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div class="text-center md:text-left">
          <h1
            class="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
            ref="titleRef"
          >
            Marek Klement
          </h1>
          <div
            class="text-xl md:text-2xl pb-6 text-textsecondary"
            ref="subtitleRef"
          >
            Software Developer
          </div>
          <p
            class="mb-8 text-textsecondary max-w-md mx-auto md:mx-0"
            ref="descriptionRef"
          >
            Hockey-minded coder: Dangling through software development and celebrating each elegant solution like a hat trick in Game 7.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#about" class="px-6 py-3 rounded-lg font-medium transition-all duration-300 bg-primary text-white hover:bg-opacity-90">Learn More</a>
            <a href="#experience" class="px-6 py-3 rounded-lg font-medium transition-all duration-300 border-2 border-primary text-primary hover:bg-primary hover:text-white">View Experience</a>
          </div>
        </div>
        <div class="relative mx-auto w-64 h-64 md:w-80 md:h-80" ref="profileImgRef">
          <div class="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary p-1">
            <div class="bg-darkbg rounded-full w-full h-full flex items-center justify-center overflow-hidden">
              <img
                src="../assets/images/mk.JPEG"
                alt="Marek Klement"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

// References for animations
const titleRef = ref(null)
const subtitleRef = ref(null)
const descriptionRef = ref(null)
const profileImgRef = ref(null)

onMounted(() => {
  // Hero animations
  const heroTl = gsap.timeline()

  heroTl
    .from(titleRef.value, {
      opacity: 0,
      y: 50,
      duration: 0.8
    })
    .from(subtitleRef.value, {
      opacity: 0,
      y: 30,
      duration: 0.6
    }, '-=0.4')
    .from(descriptionRef.value, {
      opacity: 0,
      y: 30,
      duration: 0.6
    }, '-=0.3')
    .from(profileImgRef.value, {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      ease: 'back.out(1.7)'
    }, '-=0.4')
})
</script>
