<script setup lang="ts">
import { useForm, useField } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { LoginPayloadSchema, type LoginResponse } from '@/validations/auth.validation'
import InputField from '@/components/fields/InputField.vue'
import AppButton from '@/components/commons/AppButton.vue'
import { AUTH_MESSAGES } from '@/constants/messages/auth.messages'
import { loginRequest } from '@/requests/auth/login.request'
import { toast } from 'vue3-toastify'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user.store'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
const loginFormSchema = toTypedSchema(LoginPayloadSchema)
const { handleSubmit } = useForm({
  validationSchema: loginFormSchema
})

const usernameField = useField<string>('username')
const passwordField = useField<string>('password')

const processLoginResponse = async (response: LoginResponse) => {
  if (response.success) {
    userStore.login(response.data.token)

    const redirect = route.query.redirect?.toString()
    if (redirect) {
      await router.replace(redirect)
      return
    }

    await router.replace({ name: 'main' })
  } else {
    toast.warn(response.message)
  }
}

const onSubmit = handleSubmit((values) => {
  loginRequest(values)
    .then(async (response) => {
      await processLoginResponse(response)
    })
    .catch((error) => {
      console.error(error)
    })
})
</script>

<template>
  <form @submit="onSubmit" class="h-full">
    <div class="flex flex-col items-start justify-center gap-4 h-full">
      <InputField :field-context="usernameField" :label="AUTH_MESSAGES.USERNAME" />
      <InputField :field-context="passwordField" :label="AUTH_MESSAGES.PASSWORD" />
      <AppButton type="submit" :label="AUTH_MESSAGES.LOGIN" />
    </div>
  </form>
</template>
