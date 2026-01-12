<template>
  <Card bg="lines" @click="$emit('open')" class="group cursor-pointer">
    <div class="relative aspect-video rounded-lg overflow-hidden mb-4 border border-white/10">
      <img :src="image" :alt="title" class="w-full h-full object-cover" />
      <div
        class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4"
      >
        <BaseButton
          class="-translate-y-1 group-hover:translate-y-0 transition-transform duration-300"
          size="small"
        >
          {{ $t('home.project.seeDetails') }}
        </BaseButton>
      </div>
    </div>

    <h3 class="font-semibold text-xl text-white mb-2">{{ title }}</h3>

    <p class="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
      {{ description }}
    </p>

    <ProjectLinks :gitUrl="gitUrl" :liveUrl="liveUrl" class="mt-auto" />
    <span v-if="slowLoad" class="text-xs text-gray-300 mt-2">{{
      $t('home.project.slowLoad')
    }}</span>

    <BaseButton size="small" class="w-fit mt-4 md:hidden">
      {{ $t('home.project.seeDetails') }}
    </BaseButton>
  </Card>
</template>

<script setup lang="ts">
import Card from '@/components/molecules/Card.vue'
import ProjectLinks from '@/components/molecules/ProjectLinks.vue'
import type { Project } from '@/types'
import BaseButton from '@/components/atoms/BaseButton.vue'

defineProps<Project>()

defineEmits(['open'])
</script>
