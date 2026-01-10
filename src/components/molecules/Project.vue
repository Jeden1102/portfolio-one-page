<script setup lang="ts">
import Card from './Card.vue'

defineProps<{
  image: string
  title: string
  description: string
  gitUrl?: string
  liveUrl?: string
}>()

defineEmits(['open'])
</script>

<template>
  <Card
    class="group cursor-pointer hover:border-primary-500/50 transition-colors"
    @click="$emit('open')"
  >
    <div class="relative aspect-video rounded-lg overflow-hidden mb-4 border border-white/10">
      <img
        :src="image"
        :alt="title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div
        class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4"
      >
        <span class="text-white font-medium text-sm bg-primary-500 px-3 py-1 rounded-full"
          >Zobacz szczegóły</span
        >
      </div>
    </div>

    <h3 class="font-semibold text-xl text-white mb-2">{{ title }}</h3>

    <p class="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
      {{ description }}
    </p>

    <div class="flex gap-3 mt-auto" @click.stop>
      <a
        v-if="gitUrl"
        :href="gitUrl"
        target="_blank"
        class="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
      >
        <i class="pi pi-github"></i> GitHub
      </a>
      <a
        v-if="liveUrl"
        :href="liveUrl"
        target="_blank"
        class="flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition-colors"
      >
        <i class="pi pi-external-link"></i> Live Demo
      </a>
    </div>
  </Card>
</template>
