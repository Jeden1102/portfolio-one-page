<template>
  <section class="flex flex-col gap-6" id="skills">
    <SectionTitle
      tag="h2"
      :text="$t('home.skills.title')"
      :textFeatured="$t('home.skills.titleFeatured')"
    />

    <SectionDescription>
      {{ $t('home.skills.description') }}
    </SectionDescription>

    <Tabs v-model="activeCategory" :items="categories" />

    <TransitionGroup name="list" tag="div" class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Skill
        v-for="skill in filteredSkills"
        :key="skill.title"
        :title="skill.title"
        :icon="skill.icon"
        :category="skill.categoryLabel"
      >
        {{ skill.description }}
      </Skill>
    </TransitionGroup>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SectionTitle from '../atoms/SectionTitle.vue'
import Skill from '../molecules/Skill.vue'
import Tabs from '../molecules/Tabs.vue'
import SectionDescription from '../atoms/SectionDescription.vue'

const { t } = useI18n()

const categories = computed(() => [
  { label: t('home.skills.categories.all'), value: 'all' },
  { label: t('home.skills.categories.frontend'), value: 'Frontend' },
  { label: t('home.skills.categories.backend'), value: 'Backend' },
  { label: t('home.skills.categories.other'), value: 'Inne' },
])

const activeCategory = ref('all')

const skills = computed(() => [
  {
    title: 'HTML5 & CSS3',
    category: 'Frontend',
    categoryLabel: t('home.skills.categories.frontend'),
    icon: 'pi-code',
    description: t('home.skills.items.html'),
  },
  {
    title: 'Vue.js 3',
    category: 'Frontend',
    categoryLabel: t('home.skills.categories.frontend'),
    icon: 'pi-vimeo',
    description: t('home.skills.items.vue'),
  },
  {
    title: 'TypeScript',
    category: 'Inne',
    categoryLabel: t('home.skills.categories.other'),
    icon: 'pi-shield',
    description: t('home.skills.items.ts'),
  },
  {
    title: 'Node.js',
    category: 'Backend',
    categoryLabel: t('home.skills.categories.backend'),
    icon: 'pi-server',
    description: t('home.skills.items.node'),
  },
])

const filteredSkills = computed(() => {
  if (activeCategory.value === 'all') return skills.value
  return skills.value.filter((skill) => skill.category === activeCategory.value)
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
