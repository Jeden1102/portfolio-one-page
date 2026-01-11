<template>
  <section class="flex flex-col gap-4" id="about">
    <SectionTitle
      tag="h2"
      :text="$t('home.about.title')"
      :textFeatured="$t('home.about.titleFeatured')"
    />

    <SectionDescription>
      {{ $t('home.about.description') }}
    </SectionDescription>

    <Numbers :numbers="numbers" class="mt-4" />
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SectionDescription from '@/components/atoms/SectionDescription.vue'
import SectionTitle from '@/components/atoms/SectionTitle.vue'
import Numbers from '@/components/molecules/Numbers.vue'

const { t } = useI18n()

const numbers = computed(() => [
  {
    prefix: '+',
    label: t('home.about.stats.experience'),
    from: 0,
    to: 3,
  },
  {
    prefix: '+',
    label: t('home.about.stats.projects'),
    from: 0,
    to: 30,
  },
])
</script>
