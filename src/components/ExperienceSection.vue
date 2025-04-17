<template>
  <section id="experience" class="py-24 px-4 min-h-screen flex items-center bg-darkbg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        class="text-3xl md:text-4xl font-bold mb-12 text-center"
        ref="experienceTitleRef"
      >
        Work Experience
      </h2>
      <div class="max-w-3xl mx-auto">
        <div
          v-for="(job, index) in experience"
          :key="index"
          :ref="el => { if (el) experienceRefs[index] = el as HTMLElement }"
          class="mb-16 relative pl-8 md:pl-0"
        >
          <div class="md:hidden absolute left-0 top-0 bottom-0 w-px bg-primary/40"></div>
          <div class="md:hidden absolute left-0 top-1 w-4 h-4 rounded-full bg-primary"></div>

          <div class="md:grid md:grid-cols-5">
            <div class="md:col-span-3 bg-darksurface p-6 rounded-lg shadow-md ml-8 md:ml-0 relative"
                 :class="index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-3'">

              <div class="hidden md:block absolute"
                   :style="{
                     right: '0',
                     top: '-24px',
                     bottom: index === experience.length - 1 ? '-12px' : '-100%',
                     width: '1px',
                     backgroundColor: 'rgba(var(--color-primary), 0.4)'
                   }">
              </div>

              <div class="hidden md:block absolute whitespace-nowrap flex items-center"
                   :style="{
                     right: '22px',
                     top: '-24px',
                     height: '16px'
                   }">
                <div class="text-primary font-medium">{{ job.period }}</div>
              </div>

              <h3 class="text-xl font-semibold">{{ job.title }}</h3>
              <div class="text-primary mb-3">{{ job.company }}</div>
              <p class="text-textsecondary">{{ job.description }}</p>
            </div>

            <div class="md:hidden pl-8 mt-2">
              <div class="text-primary font-medium">{{ job.period }}</div>
            </div>
          </div>
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

const experienceTitleRef = ref<HTMLElement | null>(null)
const experienceRefs = reactive<(HTMLElement | null)[]>([])

const experience = [
  {
    period: '2024 - Present',
    title: 'Team Leader',
    company: 'Quanti s.r.o.',
    description: 'Design and development of web applications for the pharmaceutical industry. Leading a team that develops in Go, Kotlin and Vue.js.'
  },
  {
    period: '2021 - 2024',
    title: 'Software Developer',
    company: 'Quanti s.r.o.',
    description: 'Development of web applications for the pharmaceutical industry in Go, Kotlin and Vue.js.'
  },
  {
    period: '2020 - 2021',
    title: 'Java Developer',
    company: 'AKKA s.r.o.',
    description: 'Development of web applications for the automotive industry in Java.'
  },
  {
    period: '2016 - 2018',
    title: 'Junior Java Developer',
    company: 'BCV Solutions s.r.o.',
    description: 'Started my journey in software development as a Java developer for identity management company.'
  }
]

onMounted(() => {
  gsap.from(experienceTitleRef.value, {
    scrollTrigger: {
      trigger: experienceTitleRef.value,
      start: 'top 80%'
    },
    opacity: 0,
    y: 30,
    duration: 0.8
  })

  experienceRefs.forEach((item, index) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 80%'
      },
      opacity: 0,
      x: index % 2 === 0 ? -30 : 30,
      duration: 0.8,
      delay: index * 0.1
    })
  })
})
</script>
