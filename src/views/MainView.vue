<script setup lang="ts">
import AppButton from '@/components/commons/AppButton.vue'
import TextBlock from '@/components/commons/TextBlock.vue'
import { GENERAL_MESSAGES } from '@/constants/messages/general.messages'
import { getMariiaStepHead } from '@/requests/mariiaStep/getMariiaStepHead.request'
import type { MariiaStep } from '@/validations/mariiaStep.validation'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify'

const router = useRouter()
const mariiaStepHead = ref<MariiaStep | null>(null)

const fetchMariiaStepHead = async () => {
  try {
    const response = await getMariiaStepHead()
    if (response.success) {
      mariiaStepHead.value = response.data
    } else {
      toast.error(response.message)
    }
  } catch (error) {
    console.log(error)
  }
}

const redirectToMariiaStepHead = async () => {
  if (mariiaStepHead.value != null) {
    router.replace({ name: 'mariia-step', params: { id: mariiaStepHead.value?.id } })
  }
}

onMounted(async () => {
  await fetchMariiaStepHead()
})
</script>

<template>
  <div class="flex flex-col items-start justify-center gap-4 h-full">
    <TextBlock size="lg">
      {{ GENERAL_MESSAGES.MAIN_PAGE_TEXT }}
    </TextBlock>
    <AppButton
      :label="GENERAL_MESSAGES.START_BUTTON_TEXT"
      :disabled="!mariiaStepHead"
      @click="redirectToMariiaStepHead()"
    />
  </div>
</template>
