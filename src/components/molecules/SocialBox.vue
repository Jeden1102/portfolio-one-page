<template>
  <a
    v-if="uri"
    :href="uri"
    target="_blank"
    :title
    class="text-xl bg-primary/50 border border-primary/60 text-white rounded-lg size-10 grid place-content-center"
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
