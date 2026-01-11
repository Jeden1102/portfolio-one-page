<template>
  <div class="flex gap-3 mt-auto" @click.stop>
    <a
      :href="gitUrl"
      target="_blank"
      class="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
      :class="{ 'pointer-events-none opacity-60': !gitUrl }"
    >
      <i class="pi pi-github"></i> {{ gitUrl ? 'GitHub' : 'NDA' }}
    </a>
    <a
      :href="liveUrl"
      target="_blank"
      class="flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition-colors"
      :class="{ 'pointer-events-none opacity-60': !liveUrl }"
    >
      <i class="pi pi-external-link"></i> {{ liveUrl ? $t('home.project.live') : 'NDA' }}
    </a>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  gitUrl?: string
  liveUrl?: string
}>()
</script>
