<template>
  <section class="flex flex-col gap-6" id="projects">
    <SectionTitle
      tag="h2"
      :text="$t('home.projects.title')"
      :textFeatured="$t('home.projects.titleFeatured')"
    />

    <SectionDescription>
      {{ $t('home.projects.description') }}
    </SectionDescription>

    <Tabs v-model="activeCategory" :items="categories" />

    <TransitionGroup name="list" tag="div" class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Project
        v-for="project in filteredProjects"
        :key="project.title"
        v-bind="project"
        @open="selectedProject = project"
      />
    </TransitionGroup>

    <ProjectModal
      :is-open="!!selectedProject"
      :project="selectedProject"
      @close="selectedProject = null"
    />
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SectionTitle from '../atoms/SectionTitle.vue'
import SectionDescription from '../atoms/SectionDescription.vue'
import Project from '../molecules/Project.vue'
import ProjectModal from '../molecules/ProjectModal.vue'
import Tabs from '../molecules/Tabs.vue'

const { t } = useI18n()

const activeCategory = ref('all')
const selectedProject = ref(null)

const categories = computed(() => [
  { label: t('home.skills.categories.all'), value: 'all' },
  { label: 'Komercyjne', value: 'commercial' },
  { label: 'Prywatne', value: 'private' },
])

const projects = computed(() => [
  {
    title: 'E-commerce Platform',
    category: 'commercial',
    image: '/projects/aipplied.png',
    description:
      'Zaawansowana platforma sprzedażowa zbudowana w Nuxt 3. System zawiera pełny koszyk, integrację z płatnościami oraz customowy CMS do zarządzania asortymentem.',
    technologies: ['Nuxt 3', 'TypeScript', 'Pinia', 'Tailwind', 'Prisma'],
    gitUrl: 'https://github.com/...',
    liveUrl: 'https://demo.com',
  },
  {
    title: 'Portfolio 2026',
    category: 'private',
    image: '/projects/portfolio.jpg',
    description:
      'Moja strona osobista. Miejsce, gdzie testuję najnowsze funkcjonalności Nuxt 4 i bibliotekę shadcn/vue.',
    technologies: ['Vue 3', 'Nuxt 4', 'Vite', 'Three.js'],
    gitUrl: 'https://github.com/...',
    liveUrl: 'https://moje-portfolio.pl',
  },
])

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') return projects.value
  return projects.value.filter((p) => p.category === activeCategory.value)
})
</script>
