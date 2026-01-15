<template>
  <div class="relative p-6 rounded-lg overflow-hidden">
    <DotGrid
      v-if="bg === 'grid'"
      :dot-size="3"
      :gap="16"
      base-color="#34495E"
      active-color="#41B883"
      :proximity="150"
      :speed-trigger="100"
      :shock-radius="250"
      :shock-strength="5"
      :max-speed="5000"
      :resistance="750"
      :return-duration="1.5"
      class-name="custom-dot-grid !absolute top-0 left-0 rounded-lg overflow-hidden"
    />
    <FloatingLines
      v-else
      :lines-gradient="['#41B883', '#34495E', '#41B883']"
      :enabled-waves="['top', 'bottom']"
      class="!absolute top-0 left-0 rounded-lg overflow-hidden"
      mix-blend-mode="hard-light"
    />
    <div class="relative z-10 h-full flex flex-col">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const DotGrid = defineAsyncComponent(() => import('@/components/bits/DotGrid/DotGrid.vue'))

const FloatingLines = defineAsyncComponent(
  () => import('@/components/bits/FloatingLines/FloatingLines.vue'),
)

defineProps<{
  bg: 'lines' | 'grid'
}>()
</script>
