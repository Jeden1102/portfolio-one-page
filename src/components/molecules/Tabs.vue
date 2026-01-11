<template>
  <div class="flex flex-wrap gap-2 border-b border-white/10 pb-4">
    <BaseButton
      v-for="tab in items"
      :key="tab.value"
      @click="handleClick(tab.value)"
      :class="[modelValue === tab.value && '!bg-primary-500']"
      size="small"
    >
      {{ tab.label }}
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/atoms/BaseButton.vue'

type Item = {
  label: string
  value: string
}
defineProps<{
  items: Item[]
}>()

const handleClick = (tab: string) => {
  value.value = tab
}

const value = defineModel('modelValue')
</script>
