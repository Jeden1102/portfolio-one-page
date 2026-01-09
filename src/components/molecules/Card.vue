<template>
  <div class="relative p-6 rounded-lg overflow-hidden">
    <FloatingLines
      :lines-gradient="['#41B883', '#34495E', '#41B883']"
      :enabled-waves="['top', 'bottom']"
      class="!absolute top-0 left-0 rounded-lg overflow-hidden"
      mix-blend-mode="hard-light"
    />
    <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import FloatingLines from '../bits/FloatingLines/FloatingLines.vue'
</script>
