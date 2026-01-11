<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-9999 flex items-center justify-center p-4 backdrop-blur-md bg-black/70"
        @click.self="$emit('close')"
      >
        <div
          class="bg-gray-950 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
        >
          <button
            @click="$emit('close')"
            class="absolute top-4 right-4 text-gray-400 hover:text-gray-100 cursor-pointer z-20 bg-black/20 p-2 rounded-full backdrop-blur-md"
          >
            <i class="pi pi-times"></i>
          </button>

          <img :src="project.image" :alt="project.title" class="w-full aspect-video object-cover" />

          <div class="p-8">
            <h2 class="text-3xl font-bold text-white mb-2">{{ project.title }}</h2>

            <div class="flex flex-wrap gap-2 mb-4">
              <BaseBadge v-for="tech in project.technologies" :key="tech">{{ tech }}</BaseBadge>
            </div>

            <p class="text-gray-300 leading-relaxed whitespace-pre-wrap mb-4">
              {{ project.description }}
            </p>

            <ProjectLinks :gitUrl="project.gitUrl" :liveUrl="project.liveUrl" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import BaseBadge from '../atoms/BaseBadge.vue'
import ProjectLinks from './ProjectLinks.vue'
import type { Project } from '../../types'

defineProps<{
  isOpen: boolean
  project: Project
}>()

const emit = defineEmits(['close'])

const closeOnEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    emit('close')
  }
}

onMounted(() => {
  document.addEventListener('keydown', (e) => closeOnEscape(e))
})

onUnmounted(() => {
  document.removeEventListener('keydown', (e) => closeOnEscape(e))
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
