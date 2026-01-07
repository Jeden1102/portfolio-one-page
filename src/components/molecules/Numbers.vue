<template>
  <div class="flex gap-4 flex-wrap lg:gap-8">
    <div
      v-for="(item, index) in numbers"
      :key="index"
      class="flex flex-col items-center text-center flex-1 lg:max-w-50"
    >
      <div class="text-4xl font-bold flex items-center lg:text-7xl">
        <span v-if="item.prefix" class="mr-1 text-primary-500">
          {{ item.prefix }}
        </span>

        <CountUp :from="item.from" :to="item.to" :duration="2" />
      </div>

      <p
        v-if="item.label"
        class="mt-2 text-sm text-secondary uppercase tracking-wider lg:text-base"
      >
        {{ item.label }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import CountUp from '../bits/CountUp/CountUp.vue'

type StatItem = {
  prefix?: string
  label: string
  from: number
  to: number
}

defineProps<{
  numbers: StatItem[]
}>()
</script>
