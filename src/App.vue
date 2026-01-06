<template>
  <div class="flex flex-col p-4 lg:flex-row pt-20 lg:py-8 gap-6 max-w-7xl mx-auto" id="start">
    <AppAside />
    <div class="w-full">
      <header>
        <AppNav />
      </header>

      <main>
        <AppCard isAnimated class="flex flex-col gap-10 lg:p-6">
          <About />
          <Skills />
        </AppCard>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppAside from '@/components/app/AppAside.vue'
import About from './components/home/About.vue'
import AppCard from './components/app/AppCard.vue'
import AppNav from './components/app/AppNav.vue'
import Skills from './components/home/Skills.vue'
</script>
