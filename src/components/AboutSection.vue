<template>
  <section id="about" class="py-24 px-4 min-h-screen flex items-center bg-darksurface relative overflow-hidden">
    <div class="absolute inset-0 z-0">
      <div class="absolute top-20 right-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
      <div class="absolute bottom-20 left-20 w-60 h-60 rounded-full bg-accent/10 blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-4xl mx-auto">
        <h2
          class="text-3xl md:text-4xl font-bold mb-8 text-center"
          ref="aboutTitleRef"
        >
          About Me
        </h2>
        <div
          class="space-y-6 text-textsecondary"
          ref="aboutContentRef"
        >
          <p>
            A software developer with 8+ years of turning "it can't be done" into "it might be working when the moon is full" I've
            tamed the wild beasts of Kotlin, Java, Go, and Vue while maintaining
            a healthy Coca Cola addiction that powers my debugging sessions. My journey through
            the tech wilderness began at CTU FEE Prague, where I collected both Bachelor's and Master's degrees – and enough
            stories to never tell my future kids.
          </p>
          <p>
            As co-owner of FiredApp Development s.r.o., I split my time between writing
            code that future-me won't hate and making important business decisions like
            where we go for lunch today. My commit messages are
            occasionally funnier than my jokes, but both demonstrate my attention to detail.
          </p>
          <p>
            On the hockey rink, I'm that player who celebrates scoring a goal with the same
            victory dance I use when my code compiles on the first try—rare but magnificent. Teammates
            know me as the guy who applies version control to hockey strategies and who firmly believes
            Coca Cola is new water.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// References for animations
const aboutTitleRef = ref<HTMLElement | null>(null)
const aboutContentRef = ref<HTMLElement | null>(null)

onMounted(() => {
  // About section animation
  gsap.from(aboutTitleRef.value, {
    scrollTrigger: {
      trigger: aboutTitleRef.value,
      start: 'top 80%'
    },
    opacity: 0,
    y: 30,
    duration: 0.8
  })

  if (!aboutContentRef.value) return
  gsap.from(aboutContentRef.value.children, {
    scrollTrigger: {
      trigger: aboutContentRef.value,
      start: 'top 80%'
    },
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 0.8
  })
})
</script>
