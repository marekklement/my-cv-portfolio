<!-- src/App.vue -->
<template>
  <NavBar />
  <main class="min-h-screen">
    <RouterView />
  </main>
  <PageFooter />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import PageFooter from '@/components/PageFooter.vue'
</script>
