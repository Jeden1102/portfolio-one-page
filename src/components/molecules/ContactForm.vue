<template>
  <form @submit.prevent="handleSubmit" class="max-w-xl w-full flex flex-col gap-6">
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
          class="w-full md:w-auto min-w-[160px]"
          :disabled="isSubmitting"
        >
          <template v-if="isSubmitting">
            <i class="pi pi-spin pi-spinner mr-2"></i>
            {{ $t('home.contact.sending') }}
          </template>
          <template v-else>
            {{ $t('home.contact.submit') }}
          </template>
        </BaseButton>
      </div>

      <p v-if="showSuccess" class="text-primary-500 font-medium flex items-center gap-2">
        {{ t('home.contact.success') }}
      </p>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import BaseInput from '@/components/atoms/BaseInput.vue'
import BaseTextarea from '@/components/atoms/BaseTextarea.vue'
import BaseButton from '@/components/atoms/BaseButton.vue'

const { t } = useI18n()

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const errors = reactive({
  email: '',
  message: '',
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

const validate = () => {
  let isValid = true
  errors.email = ''
  errors.message = ''

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!form.email) {
    errors.email = t('home.contact.errors.emailRequired')
    isValid = false
  } else if (!emailRegex.test(form.email)) {
    errors.email = t('home.contact.errors.emailRequired')
    isValid = false
  }

  if (form.message.length < 10) {
    errors.message = t('home.contact.errors.emailRequired')
    isValid = false
  }

  return isValid
}

const handleSubmit = async () => {
  if (!validate()) return

  isSubmitting.value = true

  try {
    await new Promise((resolve) => setTimeout(resolve, 1500))

    showSuccess.value = true
    form.name = ''
    form.email = ''
    form.message = ''

    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
  } catch (error) {
    console.error(error)
  } finally {
    isSubmitting.value = false
  }
}
</script>
