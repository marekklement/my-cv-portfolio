<!-- src/components/NavBar.vue -->
<template>
  <header
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    :class="scrolled ? 'py-3 shadow-lg bg-darksurface/80 backdrop-blur-md' : 'py-6 bg-darksurface/80 backdrop-blur-md'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
      <RouterLink to="/" class="text-xl font-bold font-display">
        <span class="text-textprimary">KLEMENT</span>
        <span class="text-primary"> Marek</span>
      </RouterLink>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex space-x-8">
        <RouterLink to="/#about" class="nav-link relative text-textsecondary hover:text-textprimary transition-colors duration-300">About Me</RouterLink>
        <RouterLink to="/#experience" class="nav-link relative text-textsecondary hover:text-textprimary transition-colors duration-300">Experience</RouterLink>
        <RouterLink to="/#projects" class="nav-link relative text-textsecondary hover:text-textprimary transition-colors duration-300">Projects</RouterLink>
        <RouterLink to="/#education" class="nav-link relative text-textsecondary hover:text-textprimary transition-colors duration-300">Education</RouterLink>
        <RouterLink to="/skills" class="nav-link relative text-textsecondary hover:text-textprimary transition-colors duration-300">Professional Skills</RouterLink>
        <RouterLink to="/languages" class="nav-link relative text-textsecondary hover:text-textprimary transition-colors duration-300">Languages</RouterLink>
      </nav>

      <!-- Mobile Navigation Button -->
      <button
        @click="mobileMenuOpen = !mobileMenuOpen"
        class="md:hidden text-textprimary"
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            v-if="!mobileMenuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Navigation Menu -->
    <div
      v-if="mobileMenuOpen"
      class="md:hidden absolute top-full left-0 w-full bg-darksurface py-4 shadow-lg"
    >
      <nav class="max-w-7xl mx-auto px-4 flex flex-col space-y-4">
        <RouterLink @click="mobileMenuOpen = false" to="/#about" class="nav-link relative text-textsecondary hover:text-textprimary transition-colors duration-300">About Me</RouterLink>
        <RouterLink @click="mobileMenuOpen = false" to="/#experience" class="nav-link relative text-textsecondary hover:text-textprimary transition-colors duration-300">Experience</RouterLink>
        <RouterLink @click="mobileMenuOpen = false" to="/#projects" class="nav-link relative text-textsecondary hover:text-textprimary transition-colors duration-300">Projects</RouterLink>
        <RouterLink @click="mobileMenuOpen = false" to="/#education" class="nav-link relative text-textsecondary hover:text-textprimary transition-colors duration-300">Education</RouterLink>
        <RouterLink @click="mobileMenuOpen = false" to="/skills" class="nav-link relative text-textsecondary hover:text-textprimary transition-colors duration-300">Professional Skills</RouterLink>
        <RouterLink @click="mobileMenuOpen = false" to="/languages" class="nav-link relative text-textsecondary hover:text-textprimary transition-colors duration-300">Languages</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const checkScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
  checkScroll() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>
