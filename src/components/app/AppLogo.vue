<template>
  <div class="flex gap-2 items-center text-xl font-bold">
    <span class="text-primary-500">D</span>
    <Vue3Lottie :animationData="Code" :height="36" :width="36" />
    <span class="text-secondary">R</span>
  </div>
</template>

<script setup lang="ts">
import { Vue3Lottie } from 'vue3-lottie'

import Code from '@/assets/code.json'
</script>

<style scoped></style>
