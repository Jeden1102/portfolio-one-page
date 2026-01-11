<template>
  <aside>
    <AppCard class="flex flex-col gap-4 lg:w-90 lg:min-w-90" isAnimated>
      <div class="flex gap-6 w-fit items-center">
        <div class="bg-primary-500/60 rounded-lg p-2">
          <Vue3Lottie :animationData="Developer" :height="64" :width="64" :speed="0.5" />
        </div>

        <div>
          <h1 class="text-2xl font-semibold">Dominik Raducki</h1>
          <BaseBadge> Frontend Developer </BaseBadge>
          <p class="font-light text-sm mt-2" v-html="$t('aside.specialization')"></p>
        </div>
      </div>

      <div class="flex flex-col gap-4 my-4">
        <ContactBox
          v-for="contact in contactForms"
          :key="contact.title"
          :title="contact.title"
          :value="contact.value"
          :icon="contact.icon"
          :uri="contact.uri"
        />
      </div>

      <div class="flex justify-center gap-4">
        <SocialBox
          v-for="social in socials"
          :key="social.title"
          :title="social.title"
          :icon="social.icon"
          :uri="social.uri"
        />
      </div>

      <BaseButton to="/Dominik-Raducki-CV.pdf" variant="primary" class="mt-2" download>
        {{ $t('aside.downloadCv') }}
      </BaseButton>
    </AppCard>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Vue3Lottie } from 'vue3-lottie'

import AppCard from '@/components/app/AppCard.vue'
import ContactBox from '@/components/molecules/ContactBox.vue'
import SocialBox from '@/components/molecules/SocialBox.vue'
import Developer from '@/assets/developer.json'
import BaseButton from '@/components/atoms/BaseButton.vue'
import BaseBadge from '@/components/atoms/BaseBadge.vue'

const { t } = useI18n()

const contactForms = computed(() => [
  {
    title: t('aside.contact.phone'),
    value: '+49 516 525 133',
    icon: 'pi pi-phone',
    uri: 'tel:+49516525133',
  },
  {
    title: t('aside.contact.email'),
    value: 'dom.rad14@gmail.com',
    icon: 'pi pi-envelope',
    uri: 'mailto:dom.rad14@gmail.com',
  },
  {
    title: t('aside.contact.birthday'),
    value: t('aside.contact.birthdayValue'),
    icon: 'pi pi-calendar',
  },
  {
    title: t('aside.contact.location'),
    value: t('aside.contact.locationValue'),
    icon: 'pi pi-map-marker',
  },
])

const socials = [
  {
    icon: 'pi pi-github',
    title: 'GitHub',
    uri: 'https://github.com/Jeden1102',
  },
  {
    icon: 'pi pi-linkedin',
    title: 'LinkedIn',
    uri: 'https://linkedin.com/in/dominik-raducki',
  },
]
</script>
