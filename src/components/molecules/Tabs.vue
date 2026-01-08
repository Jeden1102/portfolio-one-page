<template>
  <div class="flex flex-wrap gap-2 border-b border-white/10 pb-4">
    <Button
      v-for="tab in items"
      :key="tab.value"
      @click="handleClick(tab.value)"
      :class="[modelValue === tab.value && '!bg-primary-500']"
      size="small"
    >
      {{ tab.label }}
    </Button>
  </div>
</template>

<script setup lang="ts">
import Button from '../atoms/Button.vue'

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
