<template>
  <Card bg="grid" class="bg-linear-to-bl from-gray-800 to-gray-950">
    <div class="flex items-center gap-3 mb-2">
      <div
        class="grid place-content-center size-10 rounded-lg bg-primary-500/10 text-primary-500 border border-primary-500/20"
      >
        <Icon :icon class="text-xl" />
      </div>
      <h3 class="font-semibold text-xl text-white">
        {{ title }}
      </h3>
    </div>

    <BaseBadge>{{ category }}</BaseBadge>

    <p class="text-gray-50 text-sm leading-relaxed mt-2">
      <slot />
    </p>
  </Card>
</template>

<script setup lang="ts">
import BaseBadge from '@/components/atoms/BaseBadge.vue'
import Card from '@/components/molecules/Card.vue'
import { Icon } from '@iconify/vue'

defineProps<{
  title: string
  category: string
  icon: string
}>()
</script>
