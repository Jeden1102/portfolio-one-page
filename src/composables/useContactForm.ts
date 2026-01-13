import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import emailjs from '@emailjs/browser'

export function useContactForm() {
  const { t } = useI18n()

  const form = reactive({
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
      errors.email = t('home.contact.errors.emailInvalid')
      isValid = false
    }

    if (form.message.length < 10) {
      errors.message = t('home.contact.errors.messageTooShort')
      isValid = false
    }

    return isValid
  }

  const sendEmail = async () => {
    if (!validate()) return false

    isSubmitting.value = true

    const templateParams = {
      email: form.email,
      message: form.message,
    }

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )

      showSuccess.value = true
      form.email = ''
      form.message = ''

      setTimeout(() => {
        showSuccess.value = false
      }, 5000)

      return true
    } catch (error) {
      console.error('EmailJS Error:', error)
      return false
    } finally {
      isSubmitting.value = false
    }
  }

  return {
    form,
    errors,
    isSubmitting,
    showSuccess,
    sendEmail,
  }
}
