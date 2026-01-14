<template>
  <div class="flex flex-col p-4 lg:flex-row pt-20 lg:py-8 gap-6 max-w-350 mx-auto" id="start">
    <AppAside />
    <div class="w-full">
      <header>
        <AppNav />
      </header>

      <main>
        <AppCard isAnimated class="flex flex-col gap-10 lg:p-6 lg:gap-12">
          <About />
          <Skills />
          <Projects />
          <Contact />
        </AppCard>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppAside from '@/components/app/AppAside.vue'
import About from '@/components/home/About.vue'
import AppCard from '@/components/app/AppCard.vue'
import AppNav from '@/components/app/AppNav.vue'
import Skills from '@/components/home/Skills.vue'
import Projects from '@/components/home/Projects.vue'
import Contact from '@/components/home/Contact.vue'
import { useHead } from '@unhead/vue'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t, locale } = useI18n()

useHead({
  title: computed(() => t('meta.title')),
  meta: [
    {
      name: 'description',
      content: computed(() => t('meta.description')),
    },
    {
      property: 'og:title',
      content: computed(() => t('meta.title')),
    },
    {
      property: 'og:description',
      content: computed(() => t('meta.description')),
    },
    {
      property: 'og:locale',
      content: computed(() => (locale.value === 'pl' ? 'pl_PL' : 'en_US')),
    },
  ],
  htmlAttrs: {
    lang: computed(() => locale.value),
  },
})
</script>
