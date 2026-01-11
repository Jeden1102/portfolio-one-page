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
import SectionTitle from '../atoms/SectionTitle.vue'
import SectionDescription from '../atoms/SectionDescription.vue'
import ProjectTeaser from '../molecules/ProjectTeaser.vue'
import ProjectModal from '../molecules/ProjectModal.vue'
import Tabs from '../molecules/Tabs.vue'
import type { Project } from '../../types'

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
    image: '/projects/aipplied.png',
    description: t('home.projects.link4.description'),
    technologies: [
      'Drupal',
      'TypeScript',
      'Vue 3',
      'SCSS',
      'Jira',
      'BitBucket',
      'Jenkins',
      'Docker',
    ],
    liveUrl: 'https://link4.pl/',
  },
  {
    title: 'Enea Operator',
    category: 'commercial',
    image: '/projects/enea.png',
    description: t('home.projects.enea.description'),
    technologies: ['Drupal', 'TypeScript', 'Vue 3', 'SCSS'],
    liveUrl: 'https://www.operator.enea.pl/',
  },
  {
    title: 'Mooveno',
    category: 'commercial',
    image: '/projects/mooveno.png',
    description: t('home.projects.mooveno.description'),
    technologies: ['Drupal', 'TypeScript', 'Vue 3', 'SCSS'],
    liveUrl: 'https://www.mooveno.pl/',
  },
  {
    title: 'HTI',
    category: 'commercial',
    image: '/projects/hti.png',
    description: t('home.projects.hti.description'),
    technologies: ['Drupal', 'TypeScript', 'Vue 3', 'SCSS'],
    liveUrl: 'https://hti-bp.pl/',
  },
  {
    title: 'Cards',
    category: 'commercial',
    image: '/projects/cards.png',
    description: t('home.projects.cards.description'),
    technologies: ['Drupal', 'TypeScript', 'Vue 3', 'SCSS'],
  },
  {
    title: 'IoT Dashboard',
    category: 'commercial',
    image: '/projects/iot.png',
    description: t('home.projects.iot.description'),
    technologies: ['Drupal', 'TypeScript', 'Vue 3', 'SCSS'],
  },
])

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') return projects.value
  return projects.value.filter((p) => p.category === activeCategory.value)
})
</script>
