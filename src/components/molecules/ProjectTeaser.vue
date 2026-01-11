<template>
  <Card bg="lines" @click="$emit('open')" class="group cursor-pointer">
    <div class="relative aspect-video rounded-lg overflow-hidden mb-4 border border-white/10">
      <img :src="image" :alt="title" class="w-full h-full object-cover" />
      <div
        class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4"
      >
        <span class="text-white font-medium text-sm bg-primary-500 px-3 py-1 rounded-full">{{
          $t('home.project.seeDetails')
        }}</span>
      </div>
    </div>

    <h3 class="font-semibold text-xl text-white mb-2">{{ title }}</h3>

    <p class="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
      {{ description }}
    </p>

    <ProjectLinks :gitUrl="gitUrl" :liveUrl="liveUrl" class="mt-auto" />
  </Card>
</template>

<script setup lang="ts">
import Card from './Card.vue'
import ProjectLinks from './ProjectLinks.vue'
import type { Project } from '../../types'

defineProps<Project>()

defineEmits(['open'])
</script>
