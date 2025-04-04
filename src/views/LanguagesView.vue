<!-- src/views/LanguagesView.vue -->
<template>
  <div class="pt-24">
    <!-- Languages Header -->
    <section class="py-16 bg-darkbg relative overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div class="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-primary/10 blur-3xl"></div>
        <div class="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-accent/10 blur-3xl"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1
          class="text-4xl md:text-5xl font-bold pb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary"
          ref="titleRef"
        >
          Languages
        </h1>
        <p
          class="text-textsecondary max-w-2xl mx-auto"
          ref="descriptionRef"
        >
          An overview of the languages I speak and my proficiency levels.
        </p>
      </div>
    </section>

    <!-- Languages Proficiency Section -->
    <section class="py-16 bg-darksurface">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Language Meter Visualization -->
          <div ref="languageChartRef" class="order-2 lg:order-1">
            <div v-for="(language, index) in languages" :key="language.name" class="mb-10">
              <div class="flex justify-between items-center mb-2">
                <div class="flex items-center">
                  <div
                    class="w-8 h-8 rounded-full flex items-center justify-center mr-3"
                    :class="`bg-${langColors[index]}/20 text-${langColors[index]}`"
                  >
                    {{ language.name.charAt(0) }}
                  </div>
                  <h3 class="text-xl font-bold">{{ language.name }}</h3>
                </div>
                <span
                  class="font-medium"
                  :class="`text-${langColors[index]}`"
                >
                  {{ proficiencyLabels[language.level as keyof typeof proficiencyLabels] }}
                </span>
              </div>

              <div class="h-3 bg-darkbg rounded-full overflow-hidden">
                <div
                  class="h-full rounded-full"
                  :class="`bg-${langColors[index]}`"
                  :style="{ width: '0%' }"
                  :ref="el => { if (el) progressBars[index] = el as HTMLElement }"
                ></div>
              </div>
            </div>
          </div>

          <!-- Language Learning Journey -->
          <div class="order-1 lg:order-2">
            <h2
              class="text-3xl font-bold mb-8"
              ref="journeyTitleRef"
            >
              My Language Journey
            </h2>
            <div
              class="space-y-6 text-textsecondary"
              ref="journeyTextRef"
            >
              <p>
                A native Czech speaker with natural fluency, I also maintain professional-level English proficiency developed through my academic year in the United States and consistent workplace usage throughout my career. My communication skills in English extend across professional, academic, and casual contexts with confidence and clarity. As for German, my relationship with it remains strictly casual—we've met a few times in school, know each other's names, but still need Google Translate as our mutual friend during most conversations.
              </p>
            </div>

            <div class="mt-8">
              <h3 class="text-xl font-semibold mb-4">Proficiency Legend:</h3>
              <div class="grid grid-cols-2 gap-4">
                <div v-for="(label, level) in proficiencyLabels" :key="level" class="flex items-center">
                  <div class="w-3 h-3 rounded-full bg-primary mr-2"></div>
                  <span>{{ label }}: {{ proficiencyDescriptions[level] }}</span>
                </div>
              </div>
            </div>
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

// References for animations
const titleRef = ref<HTMLElement | null>(null)
const descriptionRef = ref<HTMLElement | null>(null)
const languageChartRef = ref<HTMLElement | null>(null)
const journeyTitleRef = ref<HTMLElement | null>(null)
const journeyTextRef = ref<HTMLElement | null>(null)
const progressBars = reactive<(HTMLElement | null)[]>([])

// Constants and data
const langColors = ['primary', 'secondary', 'accent', 'primary', 'secondary', 'accent']

const proficiencyLabels = {
  1: 'Beginner',
  2: 'Advanced',
  3: 'Native'
}

const proficiencyDescriptions = {
  1: 'Simple conversation',
  2: 'Fluent conversation with accent',
  3: 'Native-level mastery'
}

// Dummy data - replace with your own
const languages = [
  { name: 'Czech', level: 3, percentage: 100 },
  { name: 'English', level: 2, percentage: 75 },
  { name: 'German', level: 1, percentage: 15 }
]

onMounted(() => {
  // Header animations
  gsap.from([titleRef.value, descriptionRef.value], {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2
  })

  // Language chart animation - with null check
  if (languageChartRef.value && languageChartRef.value.children) {
    gsap.from(languageChartRef.value.children, {
      scrollTrigger: {
        trigger: languageChartRef.value,
        start: 'top 80%'
      },
      y: 20,
      opacity: 0,
      stagger: 0.15,
      duration: 0.6
    })
  }

  // Animate progress bars
  languages.forEach((lang, index) => {
    if (progressBars[index]) {
      gsap.to(progressBars[index], {
        scrollTrigger: {
          trigger: progressBars[index],
          start: 'top 85%'
        },
        width: `${lang.percentage}%`,
        duration: 1.2,
        ease: 'power2.out',
        delay: 0.3 + (index * 0.1)
      })
    }
  })

  // Journey text animation - with null checks
  if (journeyTitleRef.value) {
    gsap.from(journeyTitleRef.value, {
      scrollTrigger: {
        trigger: journeyTitleRef.value,
        start: 'top 80%'
      },
      y: 30,
      opacity: 0,
      duration: 0.6
    })
  }

  if (journeyTextRef.value && journeyTextRef.value.children) {
    gsap.from(journeyTextRef.value.children, {
      scrollTrigger: {
        trigger: journeyTextRef.value,
        start: 'top 80%'
      },
      y: 20,
      opacity: 0,
      stagger: 0.15,
      duration: 0.6
    })
  }

  // Remove the references to applicationsRef and cardsRef that might be causing errors
  // Since these elements aren't in your template
})
</script>
