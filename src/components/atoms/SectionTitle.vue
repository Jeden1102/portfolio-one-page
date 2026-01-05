<template>
  <component :is="tag" class="text-5xl sm:text-7xl xl:text-9xl uppercase font-extrabold">
    <span>{{ body }}</span>

    <span
      class="bg-linear-to-r from-secondary to-primary inline-block text-transparent bg-clip-text"
    >
      {{ lastWord }}
    </span>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  tag: string
  text: string
}>()

const body = computed(() => {
  const words = props.text.trim().split(' ')
  if (words.length <= 1) return ''
  return words.slice(0, -1).join(' ') + ' '
})

const lastWord = computed(() => {
  const words = props.text.trim().split(' ')
  return words[words.length - 1]
})
</script>
