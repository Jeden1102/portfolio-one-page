<template>
  <div class="flex gap-4 items-center">
    <span class="text-xl bg-primary-500 text-white rounded-full size-10 grid place-content-center">
      <Icon :icon />
    </span>
    <div>
      <p class="font-semibold uppercase">{{ title }}</p>
      <span class="font-light text-gray-600 text-sm">
        <a v-if="uri" :href="uri" class="hover:underline">{{ value }}</a>
        <p v-else>{{ value }}</p>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{
  title: string
  value: string
  icon: string
  uri?: string
}>()
</script>
