<template>
  <a
    v-if="uri"
    :href="uri"
    target="_blank"
    :title
    class="text-xl bg-primary-500 text-white rounded-lg size-10 grid place-content-center transition-colors cursor-pointer hover:bg-primary-500/90"
  >
    <i :class="icon"></i>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  uri: string
  title: string
}>()
</script>
