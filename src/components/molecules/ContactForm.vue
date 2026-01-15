<template>
  <form @submit.prevent="sendEmail" class="max-w-xl w-full flex flex-col gap-6">
    <BaseInput
      v-model="form.email"
      :label="$t('home.contact.labels.email')"
      type="email"
      placeholder="user@email.com"
      :error="errors.email"
    />

    <BaseTextarea
      v-model="form.message"
      :label="$t('home.contact.labels.message')"
      :placeholder="$t('home.contact.placeholders.message')"
      :error="errors.message"
    />

    <div class="flex flex-col gap-4">
      <div class="flex justify-start">
        <BaseButton
          type="submit"
          variant="primary"
          class="w-full md:w-auto min-w-40"
          :disabled="isSubmitting"
        >
          <template v-if="isSubmitting">
            <Icon icon="eos-icons:loading" class="animate-spin" />
            {{ $t('home.contact.sending') }}
          </template>
          <template v-else>
            {{ $t('home.contact.submit') }}
          </template>
        </BaseButton>
      </div>

      <p v-if="showSuccess" class="text-primary-500 font-medium flex items-center gap-2">
        {{ $t('home.contact.success') }}
      </p>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useContactForm } from '@/composables/useContactForm'
import BaseInput from '@/components/atoms/BaseInput.vue'
import BaseTextarea from '@/components/atoms/BaseTextarea.vue'
import BaseButton from '@/components/atoms/BaseButton.vue'
import { Icon } from '@iconify/vue'

const { form, errors, isSubmitting, showSuccess, sendEmail } = useContactForm()
</script>
