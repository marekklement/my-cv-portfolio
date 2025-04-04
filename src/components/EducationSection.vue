<template>
  <section id="education" class="py-24 px-4 min-h-screen flex items-center bg-darkbg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        class="text-3xl md:text-4xl font-bold mb-12 text-center"
        ref="educationTitleRef"
      >
        Education
      </h2>
      <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div
          v-for="(edu, index) in education"
          :key="index"
          :ref="el => { if (el) educationRefs[index] = el }"
          class="bg-darksurface p-6 rounded-lg shadow-lg border-l-4 border-primary"
        >
          <div class="text-lg text-primary font-medium mb-2">{{ edu.period }}</div>
          <h3 class="text-xl font-semibold mb-2">{{ edu.degree }}</h3>
          <div class="mb-4">{{ edu.school }}</div>
          <p class="text-textsecondary">{{ edu.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// References for animations
const educationTitleRef = ref(null)
const educationRefs = reactive([])

// Education data
const education = [
  {
    period: '2016 - 2020',
    degree: 'Bachelor of Open Informatics',
    school: 'CTU Prague (FEE)',
    description: 'Focus on Software development. Thesis on the topic UI adaptation based on emotional patterns of user behavior.'
  },
  {
    period: '2020 - 2022',
    degree: 'Master of Human Computer Interaction',
    school: 'CTU Prague (FEE)',
    description: 'Focus on UX. Thesis on the topic Emotional module for virtual voice assistant.'
  }
]

onMounted(() => {
  // Education section animations
  gsap.from(educationTitleRef.value, {
    scrollTrigger: {
      trigger: educationTitleRef.value,
      start: 'top 80%'
    },
    opacity: 0,
    y: 30,
    duration: 0.8
  })

  educationRefs.forEach((item, index) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 85%'
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: index * 0.2
    })
  })
})
</script>
