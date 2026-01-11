<template>
  <BubbleMenu
    :logo="h(AppLogo)"
    :items="navItems"
    className="lg:max-w-[calc(100%-360px)] lg:left-auto lg:w-full"
    useFixedPosition
  />
</template>

<script setup lang="ts">
import { h, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import BubbleMenu from '@/components/bits/BubbleMenu/BubbleMenu.vue'
import AppLogo from '@/components/app/AppLogo.vue'

const { t } = useI18n()

const navItems = computed(() => [
  {
    label: t('nav.start'),
    href: '#start',
    ariaLabel: 'Start',
    rotation: -8,
    hoverStyles: { bgColor: '#41B883', textColor: '#ffffff' },
  },
  {
    label: t('nav.about'),
    href: '#about',
    ariaLabel: 'About',
    rotation: 8,
    hoverStyles: { bgColor: '#34495E', textColor: '#ffffff' },
  },
  {
    label: t('nav.skills'),
    href: '#skills',
    ariaLabel: 'Skills',
    rotation: 8,
    hoverStyles: { bgColor: '#41B883', textColor: '#ffffff' },
  },
  {
    label: t('nav.projects'),
    href: '#projects',
    ariaLabel: 'Projects',
    rotation: 8,
    hoverStyles: { bgColor: '#34495E', textColor: '#ffffff' },
  },
  {
    label: t('nav.contact'),
    href: '#contact',
    ariaLabel: 'Contact',
    rotation: -8,
    hoverStyles: { bgColor: '#41B883', textColor: '#ffffff' },
  },
])
</script>
