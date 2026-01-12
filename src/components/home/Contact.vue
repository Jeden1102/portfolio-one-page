<template>
  <section class="flex flex-col gap-8" id="contact">
    <div class="flex flex-col gap-4">
      <SectionTitle
        tag="h2"
        :text="$t('home.contact.title')"
        :textFeatured="$t('home.contact.titleFeatured')"
      />
      <SectionDescription>
        {{ $t('home.contact.description') }}
      </SectionDescription>

      <ContactForm />
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionDescription from '@/components/atoms/SectionDescription.vue'
import SectionTitle from '@/components/atoms/SectionTitle.vue'
import ContactForm from '@/components/molecules/ContactForm.vue'
</script>
