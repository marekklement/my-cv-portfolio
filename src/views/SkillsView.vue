<template>
  <div class="pt-24">
    <section class="py-16 bg-darkbg relative overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div class="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-primary/10 blur-3xl"></div>
        <div class="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-secondary/10 blur-3xl"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1
          class="text-4xl md:text-5xl font-bold pb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          ref="titleRef"
        >
          Professional Skills
        </h1>
        <p
          class="text-textsecondary max-w-2xl mx-auto"
          ref="descriptionRef"
        >
          An overview of my technical and professional expertise, showcasing the skills
          I've developed throughout my career.
        </p>
      </div>
    </section>

    <section class="py-16 bg-darksurface relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          class="text-3xl font-bold mb-12 text-center"
          ref="techTitleRef"
        >
          Technical Skills
        </h2>

        <div
          class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          ref="skillsGridRef"
        >
          <div
            v-for="(skill, index) in technicalSkills"
            :key="index"
            :ref="el => { if (el) techSkillRefs[index] = el as HTMLElement }"
            class="bg-darkbg rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div class="flex justify-between items-center mb-3">
              <h3 class="text-xl font-semibold">{{ skill.name }}</h3>
              <span class="text-primary font-medium">{{ skill.level }}%</span>
            </div>

            <div class="w-full h-2 bg-darksurface rounded-full overflow-hidden">
              <div
                class="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                :style="{ width: '0%' }"
                :ref="el => { if (el) progressRefs[index] = el as HTMLElement }"
              ></div>
            </div>

            <p class="mt-4 text-textsecondary">{{ skill.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const titleRef = ref<HTMLElement | null>(null)
const descriptionRef = ref<HTMLElement | null>(null)
const techTitleRef = ref<HTMLElement | null>(null)
const skillsGridRef = ref<HTMLElement | null>(null)
const softTitleRef = ref<HTMLElement | null>(null)
const softSkillsTextRef = ref<HTMLElement | null>(null)
const cubeWrapperRef = ref<HTMLElement | null>(null)
const cubeRef = ref<HTMLElement | null>(null)
const techSkillRefs = reactive<(HTMLElement | null)[]>([])
const progressRefs = reactive<(HTMLElement | null)[]>([])

const technicalSkills = [
  {
    name: 'Kotlin',
    level: 80,
    description: 'Building Kotlin web applications with Spring or Ktor.'
  },
  {
    name: 'Java',
    level: 75,
    description: 'Replaced by Kotlin for new projects, but still proficient.'
  },
  {
    name: 'Go',
    level: 50,
    description: 'Lately my focus and interest goes to Go.'
  },
  {
    name: 'Vue.js',
    level: 45,
    description: 'I build this website, right? But this skill was supported by Claude.'
  },
  {
    name: 'PostgreSQL',
    level: 60,
    description: 'Database design, querying, and optimization with PostgreSQL.'
  },
  {
    name: 'MongoDB',
    level: 60,
    description: 'Using MongoDB for NoSQL data storage and retrieval.'
  }
]

onMounted(() => {
  gsap.from([titleRef.value, descriptionRef.value], {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2
  })

  gsap.from(techTitleRef.value, {
    scrollTrigger: {
      trigger: techTitleRef.value,
      start: 'top 80%'
    },
    y: 30,
    opacity: 0,
    duration: 0.8
  })

  techSkillRefs.forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%'
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      delay: index * 0.1
    })

    gsap.to(progressRefs[index], {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%'
      },
      width: `${technicalSkills[index].level}%`,
      duration: 1.2,
      ease: 'power2.out',
      delay: 0.3 + (index * 0.1)
    })
  })

  gsap.from(softTitleRef.value, {
    scrollTrigger: {
      trigger: softTitleRef.value,
      start: 'top 80%'
    },
    y: 30,
    opacity: 0,
    duration: 0.8
  })

  gsap.from(softSkillsTextRef.value, {
    scrollTrigger: {
      trigger: softSkillsTextRef.value,
      start: 'top 80%'
    },
    y: 30,
    opacity: 0,
    duration: 0.8
  })

  if (cubeRef.value) {
    gsap.from(cubeRef.value, {
      scrollTrigger: {
        trigger: cubeRef.value,
        start: 'top 80%'
      },
      opacity: 0,
      scale: 0.5,
      rotateX: -90,
      rotateY: 45,
      duration: 1.2,
      ease: 'back.out(1.7)'
    })

    if (cubeWrapperRef.value) {
      cubeWrapperRef.value.addEventListener('mousemove', (e) => {
        if (cubeWrapperRef.value) {
          const rect = cubeWrapperRef.value.getBoundingClientRect()
          const centerX = rect.left + rect.width / 2
          const centerY = rect.top + rect.height / 2
          const rotateY = -((e.clientX - centerX) / 10)
          const rotateX = (e.clientY - centerY) / 10

          gsap.to(cubeRef.value, {
            rotateX: rotateX,
            rotateY: rotateY,
            duration: 0.5,
            ease: 'power1.out'
          })
        }
      })

      cubeWrapperRef.value.addEventListener('mouseleave', () => {
        gsap.to(cubeRef.value, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.8,
          ease: 'power1.out'
        })
      })
    }

    // For mobile, set up automatic rotation
    if (window.innerWidth < 768) {
      const autoRotate = gsap.timeline({
        repeat: -1,
        yoyo: true,
        repeatDelay: 1
      })

      autoRotate
        .to(cubeRef.value, { rotateY: 90, duration: 2, ease: 'power1.inOut' })
        .to(cubeRef.value, { rotateX: 90, rotateY: 45, duration: 2, ease: 'power1.inOut' })
        .to(cubeRef.value, { rotateX: 0, rotateY: 180, duration: 2, ease: 'power1.inOut' })
        .to(cubeRef.value, { rotateX: -90, rotateY: 225, duration: 2, ease: 'power1.inOut' })
        .to(cubeRef.value, { rotateX: 0, rotateY: 360, duration: 2, ease: 'power1.inOut' })
    }
  }
})
</script>
