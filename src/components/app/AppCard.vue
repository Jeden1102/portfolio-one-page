<template>
  <component
    :is="isAnimated ? AnimatedContent : 'div'"
    class="rounded-md shadow-md bg-primary-100 p-4"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import AnimatedContent from '../bits/AnimatedContent/AnimatedContent.vue'

defineProps<{
  isAnimated?: boolean
}>()
</script>
