<template>
  <section class="flex flex-col gap-6" id="skills">
    <SectionTitle tag="h2" text="Things I'm" textFeatured="Great at" />

    <p class="text-secondary max-w-3xl leading-relaxed">
      Moje doświadczenie skupia się na tworzeniu kompletnych rozwiązań webowych. Poniżej znajdziesz
      technologie, w których czuję się najpewniej i które wykorzystuję na co dzień.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <Skill
        v-for="skill in skills"
        :key="skill.title"
        :title="skill.title"
        :icon="skill.icon"
        :category="skill.category"
      >
        {{ skill.description }}
      </Skill>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '../atoms/SectionTitle.vue'
import Skill from '../molecules/Skill.vue'

const skills = [
  {
    title: 'HTML5 & CSS3',
    category: 'Frontend Developer',
    icon: 'pi-code',
    description:
      'Budowanie semantycznych, dostępnych i responsywnych stron internetowych z wykorzystaniem nowoczesnych standardów i metodologii (BEM, Tailwind).',
  },
  {
    title: 'Vue.js 3',
    category: 'Frontend Developer',
    icon: 'pi-vimeo',
    description:
      'Tworzenie zaawansowanych aplikacji typu SPA przy użyciu Composition API, Pinia oraz ekosystemu Vite. Stawiam na czysty kod i wydajność.',
  },
  {
    title: 'TypeScript',
    category: 'Core Development',
    icon: 'pi-shield',
    description:
      'Pisanie bezpiecznego kodu z silnym typowaniem, co pozwala na unikanie błędów w runtime i znacząco ułatwia pracę w zespole.',
  },
  {
    title: 'Node.js',
    category: 'Backend Developer',
    icon: 'pi-server',
    description:
      'Projektowanie skalowalnych API i mikroserwisów. Doświadczenie w pracy z Express, NestJS oraz integracji z bazami SQL/NoSQL.',
  },
]
</script>
