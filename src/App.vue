<script setup lang="ts">
import AppAside from '@/components/app/AppAside.vue'
import AppHeader from '@/components/app/AppHeader.vue'
import AppMain from '@/components/app/AppMain.vue'
</script>

<template>
  <div class="flex flex-col p-4">
    <AppAside />
    <div>
      <AppHeader />

      <AppMain />
    </div>
  </div>
</template>
