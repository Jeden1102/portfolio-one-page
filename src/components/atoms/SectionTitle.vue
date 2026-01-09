<template>
  <component
    :is="tag"
    class="text-4xl sm:text-7xl xl:text-8xl uppercase font-extrabold flex flex-col"
  >
    <span>{{ text }}</span>

    <span
      v-if="textFeatured"
      class="bg-linear-to-r from-secondary to-primary-500 inline-block text-transparent bg-clip-text"
    >
      {{ textFeatured }}
    </span>
  </component>
</template>

<script setup lang="ts">
const props = defineProps<{
  tag: string
  text: string
  textFeatured?: string
}>()
</script>
