<template>
  <div class="flex gap-3 mt-auto" @click.stop>
    <a
      :href="gitUrl || '#'"
      target="_blank"
      class="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
      :class="{ 'pointer-events-none opacity-60': !gitUrl }"
    >
      <Icon icon="mdi:github" /> {{ gitUrl ? 'GitHub' : $t('home.project.private') }}
    </a>
    <a
      :href="liveUrl || '#'"
      target="_blank"
      class="flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition-colors"
      :class="{ 'pointer-events-none opacity-60': !liveUrl }"
    >
      <Icon icon="mdi:link" /> {{ liveUrl ? $t('home.project.live') : 'NDA' }}
    </a>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{
  gitUrl?: string
  liveUrl?: string
}>()
</script>
