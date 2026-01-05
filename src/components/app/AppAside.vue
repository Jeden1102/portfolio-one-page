<template>
  <aside id="start">
    <AppCard class="flex flex-col gap-2 lg:w-100 lg:min-w-100" isAnimated>
      <div class="flex gap-6 w-fit items-center">
        <div class="bg-primary/20 rounded-lg p-2 border border-primary/20">
          <Vue3Lottie :animationData="Developer" :height="64" :width="64" :speed="0.5" />
        </div>

        <div>
          <h1 class="text-2xl font-semibold">Dominik Raducki</h1>
          <p class="bg-secondary text-white w-fit px-2 py-1 rounded-sm text-sm my-2">
            Frontend Developer
          </p>
          <p class="font-light text-sm mt-2">
            Specializing in <b>Vue, Nuxt and Drupal</b> technologies
          </p>
        </div>
      </div>

      <hr class="text-primary/10 my-4" />

      <div class="flex flex-col gap-4">
        <ContactBox
          v-for="contact in contactForms"
          :title="contact.title"
          :value="contact.value"
          :icon="contact.icon"
          :uri="contact.uri"
        />
      </div>

      <hr class="text-primary/10 my-4" />

      <div class="flex justify-center gap-4">
        <SocialBox
          v-for="social in socials"
          :title="social.title"
          :icon="social.icon"
          :uri="social.uri"
        />
      </div>
    </AppCard>
  </aside>
</template>

<script setup lang="ts">
import { Vue3Lottie } from 'vue3-lottie'

import AppCard from '@/components/app/AppCard.vue'
import ContactBox from '../molecules/ContactBox.vue'
import SocialBox from '../molecules/SocialBox.vue'
import Developer from '@/assets/developer.json'

const contactForms = [
  {
    title: 'Phone',
    value: '+49 176 1234567',
    icon: 'pi pi-phone',
    uri: 'tel:+491761234567',
  },
  {
    title: 'Email',
    value: '2GjyH@example.com',
    icon: 'pi pi-envelope',
    uri: 'mailto:2GjyH@example.com',
  },
  {
    title: 'Birthday',
    value: 'January 28',
    icon: 'pi pi-calendar',
  },
  {
    title: 'Location',
    value: 'Poland, Warsaw',
    icon: 'pi pi-map-marker',
  },
]

const socials = [
  {
    icon: 'pi pi-github',
    title: 'GitHub',
    uri: 'https://github.com/dominik-raducki',
  },
  {
    icon: 'pi pi-linkedin',
    title: 'LinkedIn',
    uri: 'https://linkedin.com/in/dominik-raducki',
  },
]
</script>
