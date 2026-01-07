<script setup lang="ts">
import { computed, ref } from 'vue'

interface Props {
  to?: string
  variant?: 'primary' | 'secondary'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
})

const buttonRef = ref<HTMLElement | null>(null)
const mousePos = ref({ x: 0, y: 0 })

const handleMouseMove = (e: MouseEvent) => {
  if (!buttonRef.value) return
  const rect = buttonRef.value.getBoundingClientRect()
  mousePos.value = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  }
}

const tag = computed(() => (!!props.to ? 'a' : 'button'))

const variantClasses = {
  primary: 'bg-secondary text-white',
  secondary: 'bg-secondary text-white',
}

const glowColor = computed(() => {
  if (props.variant === 'primary') return 'rgba(65, 184, 131, 0.4)'
  return 'rgba52, 73, 94, 0.4)'
})
</script>

<template>
  <component
    :is="tag"
    ref="buttonRef"
    :href="to"
    :class="[
      'group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden rounded-xl font-medium transition-all duration-300 focus:outline-none',
      variantClasses[variant],
    ]"
    @mousemove="handleMouseMove"
  >
    <div
      class="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      :style="{
        background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent 40%)`,
      }"
    />

    <span class="relative z-10 flex items-center gap-2">
      <slot />
    </span>
  </component>
</template>
