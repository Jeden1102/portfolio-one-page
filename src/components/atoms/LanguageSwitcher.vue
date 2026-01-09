<template>
  <button
    @click="toggleLocale"
    class="cursor-pointer pointer-events-auto font-bold uppercase tracking-wider text-primary-500"
  >
    {{ nextLocale }}
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, availableLocales } = useI18n()

const nextLocale = computed(() => {
  const currentIndex = availableLocales.indexOf(locale.value)
  const nextIndex = (currentIndex + 1) % availableLocales.length
  return availableLocales[nextIndex]
})

const toggleLocale = () => {
  if (!nextLocale.value) return
  locale.value = nextLocale.value
}
</script>
