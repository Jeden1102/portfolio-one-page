<template>
  <BubbleMenu
    :logo="h(AppLogo)"
    :items="items"
    className="lg:max-w-[calc(100%-400px)] lg:left-auto lg:w-full"
  />
</template>

<script setup lang="ts">
import BubbleMenu from '../bits/BubbleMenu/BubbleMenu.vue'
import { h } from 'vue'
import AppLogo from './AppLogo.vue'

const items = [
  {
    label: 'start',
    href: '#start',
    ariaLabel: 'Start',
    rotation: -8,
    hoverStyles: { bgColor: '#41B883', textColor: '#ffffff' },
  },
  {
    label: 'about',
    href: '#about',
    ariaLabel: 'About',
    rotation: 8,
    hoverStyles: { bgColor: '#34495E', textColor: '#ffffff' },
  },
  {
    label: 'skills',
    href: '#skills',
    ariaLabel: 'Skills',
    rotation: 8,
    hoverStyles: { bgColor: '#41B883', textColor: '#ffffff' },
  },
  {
    label: 'projects',
    href: '#projects',
    ariaLabel: 'Projects',
    rotation: 8,
    hoverStyles: { bgColor: '#34495E', textColor: '#ffffff' },
  },
  {
    label: 'contact',
    href: '#contact',
    ariaLabel: 'Contact',
    rotation: -8,
    hoverStyles: { bgColor: '#41B883', textColor: '#ffffff' },
  },
]
</script>
