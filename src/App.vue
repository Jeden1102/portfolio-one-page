<script setup lang="ts">
import AppAside from '@/components/app/AppAside.vue'
import AppHeader from '@/components/app/AppHeader.vue'
import About from './components/home/About.vue'
import AppCard from './components/app/AppCard.vue'
</script>

<template>
  <div class="flex flex-col p-4 lg:flex-row pt-20 lg:py-8 gap-6">
    <AppAside />
    <div class="w-full">
      <AppHeader />

      <main>
        <AppCard>
          <About />
        </AppCard>
      </main>
    </div>
  </div>
</template>
