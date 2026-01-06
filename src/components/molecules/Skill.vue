<script setup lang="ts">
import Badge from '../atoms/Badge.vue'
import Card from './Card.vue'

defineProps<{
  title: string
  category: string
  icon: string
}>()
</script>

<template>
  <Card>
    <div class="flex items-center gap-3 mb-2">
      <div
        class="grid place-content-center size-10 rounded-lg bg-primary/10 text-primary border border-primary/20"
      >
        <i :class="['pi', icon, 'text-xl']"></i>
      </div>
      <h3 class="font-semibold text-xl text-white">
        {{ title }}
      </h3>
    </div>

    <Badge>{{ category }}</Badge>

    <p class="text-gray-200 text-sm leading-relaxed mt-2">
      <slot />
    </p>
  </Card>
</template>
