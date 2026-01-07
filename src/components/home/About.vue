<template>
  <section class="flex flex-col gap-4" id="about">
    <SectionTitle tag="h2" text="Frontend" textFeatured="Developer" />

    <p class="text-secondary max-w-150 lg:text-lg">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, doloremque eum? Aliquid
      non temporibus labore voluptatum corporis reprehenderit quisquam modi enim cupiditate eveniet
      illo at harum debitis dolorum dolorem, ducimus amet sapiente autem repellendus quis nulla quae
      incidunt. Maiores odio sapiente nostrum dolorum consectetur impedit odit beatae ut labore
      quasi.
    </p>

    <Numbers :numbers class="mt-4" />
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '../atoms/SectionTitle.vue'
import Numbers from '../molecules/Numbers.vue'

const numbers = [
  { prefix: '+', label: 'Years of commercial experience', from: 0, to: 3 },
  { prefix: '+', label: 'Projects participated in', from: 0, to: 20 },
]
</script>
