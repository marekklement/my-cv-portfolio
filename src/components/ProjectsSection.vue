<template>
  <div class="projects-section">
    <div class="carousel-container">
      <h2 class="carousel-title" ref="projectsTitleRef">My Projects</h2>

      <div class="carousel-wrapper">
        <!-- Navigation buttons -->
        <button class="nav-button prev-button" @click="prevProject">&lt;</button>

        <div class="carousel-track">
          <div
            v-for="(project, index) in visibleProjects"
            :key="project.id"
            :class="['project-card', { active: index === 1 }]"
            @click="goToProject(project.link)"
          >
            <div class="project-image">
              <img :src="project.imagePath" :alt="project.name" />
            </div>
            <h3 class="project-name">{{ project.name }}</h3>
            <div class="project-languages">
              <span
                v-for="(language, langIndex) in project.languages"
                :key="langIndex"
                class="language-tag"
              >
                {{ language }}
              </span>
            </div>
          </div>
        </div>

        <button class="nav-button next-button" @click="nextProject">&gt;</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, type Ref, ref } from 'vue'
import gsap from 'gsap'
import fired from '@/assets/images/fired.svg'
import pp from '@/assets/images/pp.svg'
import drmax from '@/assets/images/drmax.svg'
import tt from '@/assets/images/tt.svg'
import tes from '@/assets/images/tes.png'

// References for animations
const projectsTitleRef = ref<HTMLElement | null>(null)

interface Project {
  id: number
  name: string
  languages: string[]
  imagePath: string
  link: string
}

// Project data as a separate constant
const PROJECTS_DATA = [
  {
    id: 1,
    name: 'Co-Author',
    languages: ['Kotlin', 'Ktor', 'Vue', 'PostgreSQL'],
    imagePath: pp,
    link: 'https://www.firedapp.dev',
  },
  {
    id: 2,
    name: 'Co-Author',
    languages: ['Kotlin', 'Ktor', 'Spring', 'Vue', 'PostgreSQL'],
    imagePath: fired,
    link: 'https://www.firedapp.dev',
  },
  {
    id: 3,
    name: 'Contributor',
    languages: ['Kotlin', 'Spring', 'Go', 'Vue', 'MSSql', 'MongoDB', 'MySql'],
    imagePath: drmax,
    link: 'https://www.drmax.eu/en/default',
  },
  {
    id: 4,
    name: 'Author',
    languages: ['Kotlin', 'Ktor', 'PostgreSQL'],
    imagePath: tt,
    link: 'https://github.com/marekklement/TourTip',
  },
  {
    id: 5,
    name: 'Co-Author',
    languages: ['Java', 'Angular', 'PostgreSQL'],
    imagePath: tes,
    link: 'https://obec-tesovice.cz/',
  }
]

// State for carousel
const currentIndex = ref(0)
const visibleProjects: Ref<Project[]> = ref([])
const projectsToShow = 3

// Functions
function updateVisibleProjects(index: number) {
  const newVisibleProjects = []
  for (let i = 0; i < projectsToShow; i++) {
    const projectIndex = (index + i) % PROJECTS_DATA.length
    newVisibleProjects.push(PROJECTS_DATA[projectIndex])
  }
  visibleProjects.value = newVisibleProjects
}

function nextProject() {
  currentIndex.value = (currentIndex.value + 1) % PROJECTS_DATA.length
  updateVisibleProjects(currentIndex.value)
}

function prevProject() {
  currentIndex.value = (currentIndex.value - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length
  updateVisibleProjects(currentIndex.value)
}

function goToProject(link: string) {
  // Navigate to the project's link
  if (link) {
    window.location.href = link
    // Alternatively, if using Vue Router:
    // router.push(link)
  }
}

// Initialize
onMounted(() => {
  updateVisibleProjects(currentIndex.value)

  // Add animations
  gsap.from(projectsTitleRef.value, {
    scrollTrigger: {
      trigger: projectsTitleRef.value,
      start: 'top 80%',
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
  })
})
</script>

<style scoped>
/* Section container that plays nice with other page elements */
.projects-section {
  padding: 8rem 1rem 5rem;
  width: 100%;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
}

.carousel-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 12px;
  color: #f3f4f6; /* textprimary from your Tailwind config */
  position: relative;
  overflow: visible;
}

.carousel-title {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  color: #f3f4f6; /* textprimary from your Tailwind config */
  font-family: 'Poppins', sans-serif;
}

.carousel-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.carousel-track {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  overflow: hidden;
  padding: 1.5rem 0;
  flex: 1;
}

.project-card {
  flex: 0 0 28%;
  background-color: theme('colors.darkbg'); /* darksurface from your Tailwind config */
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s ease;
  transform: scale(0.9);
  opacity: 0.7;
  border: 1px solid #333333; /* slightly lighter than darksurface */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  cursor: pointer; /* Added to indicate it's clickable */
}

.project-card:hover {
  transform: scale(0.95);
  border-color: #8b5cf6; /* primary from your Tailwind config */
}

.project-image {
  width: 100%;
  height: 120px; /* Fixed height for all project images */
  display: flex;
  align-items: center; /* Vertical centering */
  justify-content: center; /* Horizontal centering */
  margin-bottom: 1.5rem;
  overflow: visible;
}

.project-image img {
  max-width: 90%;
  max-height: 90%; /* Ensure image doesn't overflow the container */
  object-fit: contain; /* Maintain aspect ratio */
  display: block; /* Remove any extra spacing */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .project-image {
    height: 100px; /* Slightly smaller height on tablets */
  }
}

@media (max-width: 480px) {
  .project-image {
    height: 90px; /* Even smaller height on phones */
  }

  .project-image img {
    max-width: 85%; /* Slightly smaller to ensure proper spacing */
    max-height: 85%;
  }
}

.project-name {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
  color: #f3f4f6; /* textprimary from your Tailwind config */
  font-family: 'Poppins', sans-serif;
}

.project-languages {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
}

.language-tag {
  padding: 0.25rem 0.75rem;
  background-color: theme('colors.darksurface'); /* darkbg from your Tailwind config */
  color: #10b981; /* secondary from your Tailwind config */
  border-radius: 999px;
  font-size: 0.75rem;
  font-family: 'Inter', sans-serif;
}

.nav-button {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(139, 92, 246, 0.3); /* Semi-transparent primary */
  color: white; /* White arrows */
  border: none;
  border-radius: 50%;
  font-size: 1.2rem;
  cursor: pointer;
  z-index: 10;
  transition: background-color 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.nav-button:hover {
  background-color: rgba(139, 92, 246, 0.8); /* More opaque primary on hover */
}

.prev-button {
  margin-right: 0.5rem;
}

.next-button {
  margin-left: 0.5rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .carousel-track {
    gap: 1rem;
  }

  .project-card {
    flex: 0 0 65%;
  }

  .carousel-container {
    padding: 1.5rem;
  }

  .projects-section {
    padding-top: 6rem;
  }
}

@media (max-width: 480px) {
  .project-card {
    flex: 0 0 80%;
  }

  .carousel-container {
    padding: 1rem;
  }

  .nav-button {
    width: 36px;
    height: 36px;
  }

  .projects-section {
    padding-top: 5rem;
  }
}
</style>
