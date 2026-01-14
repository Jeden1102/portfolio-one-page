import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import { createHead } from '@unhead/vue/client'

import en from './locales/en.json'
import pl from './locales/pl.json'

const i18n = createI18n({
  legacy: false,
  locale: 'pl',
  fallbackLocale: 'en',
  messages: {
    en,
    pl,
  },
})

const head = createHead()
const app = createApp(App)

app.use(i18n)
app.use(head)
app.mount('#app')
