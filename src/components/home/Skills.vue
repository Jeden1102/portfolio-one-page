<template>
  <section class="flex flex-col gap-6" id="skills">
    <SectionTitle tag="h2" text="Things I'm" textFeatured="Great at" />

    <SectionDescription>
      Moje doświadczenie skupia się na tworzeniu kompletnych rozwiązań webowych.
    </SectionDescription>

    <Tabs v-model="activeCategory" :items="categories" />

    <TransitionGroup name="list" tag="div" class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Skill
        v-for="skill in filteredSkills"
        :key="skill.title"
        :title="skill.title"
        :icon="skill.icon"
        :category="skill.category"
      >
        {{ skill.description }}
      </Skill>
    </TransitionGroup>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import SectionTitle from '../atoms/SectionTitle.vue'
import Skill from '../molecules/Skill.vue'
import Tabs from '../molecules/Tabs.vue'
import SectionDescription from '../atoms/SectionDescription.vue'

const categories = [
  { label: 'Wszystkie', value: 'all' },
  { label: 'Frontend', value: 'Frontend' },
  { label: 'Backend', value: 'Backend' },
  { label: 'Inne', value: 'Inne' },
]

const activeCategory = ref('all')

const skills = [
  {
    title: 'HTML5 & CSS3',
    category: 'Frontend',
    icon: 'pi-code',
    description: 'Budowanie semantycznych i responsywnych stron...',
  },
  {
    title: 'Vue.js 3',
    category: 'Frontend',
    icon: 'pi-vimeo',
    description: 'Tworzenie zaawansowanych aplikacji typu SPA...',
  },
  {
    title: 'TypeScript',
    category: 'Inne',
    icon: 'pi-shield',
    description: 'Pisanie bezpiecznego kodu z silnym typowaniem...',
  },
  {
    title: 'Node.js',
    category: 'Backend',
    icon: 'pi-server',
    description: 'Projektowanie skalowalnych API i mikroserwisów...',
  },
]

const filteredSkills = computed(() => {
  if (activeCategory.value === 'all') return skills
  return skills.filter((skill) => skill.category === activeCategory.value)
})
</script>

<style>
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(10px);
}

.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}

.list-move {
  transition: transform 0.4s ease;
}

.list-leave-active {
  position: absolute;
}
</style>
