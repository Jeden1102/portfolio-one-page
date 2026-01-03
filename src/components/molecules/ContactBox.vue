<template>
  <div class="flex gap-4 items-center">
    <span class="text-xl bg-primary text-white rounded-full size-10 grid place-content-center">
      <i :class="icon"></i>
    </span>
    <div>
      <h3 class="font-semibold uppercase">{{ title }}</h3>
      <span class="font-light text-gray-600 text-sm">
        <a v-if="uri" :href="uri">{{ value }}</a>
        <p v-else>{{ value }}</p>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  value: string
  icon: string
  uri?: string
}>()
</script>
