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
      <ProjectTeaser
        v-for="project in filteredProjects"
        :key="project.title"
        v-bind="project"
        @open="selectedProject = project"
      />
    </TransitionGroup>

    <ProjectModal
      v-if="selectedProject"
      :is-open="!!selectedProject"
      :project="selectedProject"
      @close="selectedProject = null"
    />
  </section>
</template>

<script setup lang="ts">
import { ref, computed, type ComputedRef } from 'vue'
import { useI18n } from 'vue-i18n'
import SectionTitle from '@/components/atoms/SectionTitle.vue'
import SectionDescription from '@/components/atoms/SectionDescription.vue'
import ProjectTeaser from '@/components/molecules/ProjectTeaser.vue'
import ProjectModal from '@/components/molecules/ProjectModal.vue'
import Tabs from '@/components/molecules/Tabs.vue'
import type { Project } from '@/types'

const { t } = useI18n()

const activeCategory = ref('all')
const selectedProject = ref<null | Project>(null)

const categories = computed(() => [
  { label: t('home.projects.categories.all'), value: 'all' },
  { label: t('home.projects.categories.commercial'), value: 'commercial' },
  { label: t('home.projects.categories.private'), value: 'private' },
])

const projects: ComputedRef<Project[]> = computed(() => [
  {
    title: 'Link4',
    category: 'commercial',
    image: '/projects/link4.png',
    description: t('home.projects.link4.description'),
    technologies: [
      'Drupal',
      'TypeScript',
      'Vue 3',
      'Vite',
      'SCSS',
      'Jira',
      'Git',
      'BitBucket',
      'Jenkins',
      'Docker',
    ],
    liveUrl: 'https://link4.pl/',
  },
  {
    title: 'Enea Operator',
    category: 'commercial',
    image: '/projects/operator.png',
    description: t('home.projects.enea.description'),
    technologies: [
      'Drupal',
      'TypeScript',
      'Vue 3',
      'Tailwind',
      'Jira',
      'Vite',
      'Git',
      'BitBucket',
      'Docker',
    ],
    liveUrl: 'https://www.operator.enea.pl/',
  },
  {
    title: 'Mooveno',
    category: 'commercial',
    image: '/projects/mooveno.png',
    description: t('home.projects.mooveno.description'),
    technologies: [
      'Drupal',
      'TypeScript',
      'Vue 3',
      'Vite',
      'Tailwind',
      'GSAP',
      'Jira',
      'Git',
      'BitBucket',
      'Docker',
    ],
    liveUrl: 'https://www.mooveno.pl/',
  },
  {
    title: 'HTI',
    category: 'commercial',
    image: '/projects/hti.png',
    description: t('home.projects.hti.description'),
    technologies: [
      'Drupal',
      'TypeScript',
      'Vue 3',
      'Vite',
      'Tailwind',
      'Jira',
      'Git',
      'BitBucket',
      'Docker',
    ],
    liveUrl: 'https://hti-bp.pl/',
  },
  {
    title: 'Cards',
    category: 'commercial',
    image: '/projects/cards.png',
    description: t('home.projects.cards.description'),
    technologies: [
      'TypeScript',
      'Vue 3',
      'Vue router',
      'Vuetify',
      'Axios',
      'Vite',
      'Tailwind',
      'Pinia',
      'Git',
      'GitLab',
    ],
  },
  {
    title: 'IoT Dashboard',
    category: 'commercial',
    image: '/projects/iot.png',
    description: t('home.projects.iot.description'),
    technologies: [
      'TypeScript',
      'Vue 3',
      'Vue router',
      'Vuetify',
      'Axios',
      'Vite',
      'Tailwind',
      'Pinia',
      'Git',
      'GitLab',
    ],
  },
  {
    title: 'Homestay page',
    category: 'commercial',
    image: '/projects/homestay.png',
    description: t('home.projects.iot.description'),
    technologies: [
      'TypeScript',
      'Vue 3',
      'Vue router',
      'Vuetify',
      'Axios',
      'Vite',
      'Tailwind',
      'Pinia',
      'Git',
      'GitLab',
    ],
  },
  /* Private */
  {
    title: 'Pokój z Wami',
    category: 'private',
    image: '/projects/rooms.png',
    description: t('home.projects.rooms.description'),
    technologies: [
      'TypeScript',
      'Nuxt 4',
      'Nuxt-i18n',
      'PrimeVue',
      'Vite',
      'Tailwind',
      'Pinia',
      'Git',
      'Vercel',
      'VPS',
      'Prisma',
    ],
    liveUrl: 'https://eoecesuqvvttqp4l14844.cleavr.xyz/',
  },
  {
    title: 'Aipplied',
    category: 'private',
    image: '/projects/aipplied.png',
    description: t('home.projects.rooms.description'),
    technologies: [
      'TypeScript',
      'Nuxt 3',
      'Vue-shadcn',
      'Nuxt-i18n',
      'Vite',
      'Tailwind',
      'Pinia',
      'Git',
      'Vercel',
      'Prisma',
    ],
    liveUrl: 'https://www.aipplied.app/',
  },
  {
    title: 'Seat Hopper',
    category: 'private',
    image: '/projects/ic-hopper.png',
    description: t('home.projects.rooms.description'),
    technologies: [
      'TypeScript',
      'Nuxt 3',
      'PrimeVue',
      'Vite',
      'Tailwind',
      'Pinia',
      'Git',
      'Vercel',
    ],
    liveUrl: 'https://ic-hopper.vercel.app/',
  },
  {
    title: 'Drinks LP',
    category: 'private',
    image: '/projects/drinks.png',
    description: t('home.projects.rooms.description'),
    technologies: [
      'TypeScript',
      'Nuxt 3',
      'PrimeVue',
      'Vite',
      'Tailwind',
      'Pinia',
      'Git',
      'Vercel',
    ],
    liveUrl: 'https://drinks-lp.vercel.app/',
  },
  {
    title: 'Candles LP',
    category: 'private',
    image: '/projects/candles.png',
    description: t('home.projects.rooms.description'),
    technologies: [
      'TypeScript',
      'Nuxt 3',
      'PrimeVue',
      'Vite',
      'Tailwind',
      'Pinia',
      'Git',
      'Vercel',
    ],
    liveUrl: 'https://candles-ten.vercel.app/',
  },
])

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') return projects.value
  return projects.value.filter((p) => p.category === activeCategory.value)
})
</script>
