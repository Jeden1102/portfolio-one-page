<template>
  <div class="flex flex-col gap-1 w-full">
    <label v-if="label" class="text-sm font-medium text-gray-700 ml-1">{{ label }}</label>
    <div class="relative group">
      <input
        v-model="model"
        :type="type"
        :placeholder="placeholder"
        :class="[
          'w-full border rounded-lg px-4 py-3 text-gray-700 placeholder:text-gray-400 outline-none transition-all duration-300',
          error
            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
            : 'border-primary-500 focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50',
        ]"
      />
    </div>
    <p v-if="error" class="text-red-500 text-xs ml-1 mt-0.5 font-medium">
      {{ error }}
    </p>
  </div>
</template>

<script setup lang="ts">
const model = defineModel<string>()

defineProps<{
  label?: string
  placeholder?: string
  type?: string
  error?: string
}>()
</script>
