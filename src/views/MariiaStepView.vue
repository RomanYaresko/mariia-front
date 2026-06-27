<script setup lang="ts">
import AppButton from '@/components/commons/AppButton.vue'
import TextBlock from '@/components/commons/TextBlock.vue'
import FoundGiftModal from '@/components/mariiaSteps/FoundGiftModal.vue'
import { GENERAL_MESSAGES } from '@/constants/messages/general.messages'
import { mariiaNotify } from '@/requests/mariiaNotify/mariiaNotify.request'
import { getMariiaStepById } from '@/requests/mariiaStep/getMariiaStepById.request'
import type { MariiaStep } from '@/validations/mariiaStep.validation'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { toast } from 'vue3-toastify'

const router = useRouter()
const route = useRoute()

const mariiaStep = ref<MariiaStep | null>(null)
const isFoundGiftModalVisible = ref<boolean>(false)
const isNotifyLoading = ref<boolean>(false)

const fetchMariiaStep = async (id: number) => {
  try {
    const response = await getMariiaStepById(id)
    if (response.success) {
      mariiaStep.value = response.data
    } else {
      toast.error(response.message)
    }
  } catch (error) {
    console.log(error)
  }
}

const redirectToPrevMariiaStep = async () => {
  if (mariiaStep.value != null && mariiaStep.value.prevId != null) {
    router.replace({ name: 'mariia-step', params: { id: mariiaStep.value.prevId } })
  }
}

const redirectToNextMariiaStep = async () => {
  if (mariiaStep.value != null && mariiaStep.value.nextId != null) {
    router.replace({ name: 'mariia-step', params: { id: mariiaStep.value.nextId } })
  }
}

const showFoundFoundGiftModal = () => {
  isFoundGiftModalVisible.value = true
}

const redirectToFinish = async () => {
  router.replace({ name: 'finish' })
}

const finish = async () => {
  isNotifyLoading.value = true
  try {
    const response = await mariiaNotify()
    if (response.success) {
      redirectToFinish()
    } else {
      toast.success(GENERAL_MESSAGES.MAIL_ERROR)
    }
  } catch (error) {
    console.log(error)
  } finally {
    isNotifyLoading.value = false
  }
}

watch(
  () => route.params.id,
  async (stepId) => {
    const parsedId = Number(stepId)
    mariiaStep.value = null
    await fetchMariiaStep(parsedId)
  },
  { immediate: true }
)
</script>

<template>
  <div class="flex flex-col items-start justify-center gap-4 h-full" v-if="mariiaStep">
    <FoundGiftModal
      :is-visible="isFoundGiftModalVisible"
      :text="mariiaStep.giftName"
      :button-text="mariiaStep.buttonText"
      @confirm="
        () => {
          isFoundGiftModalVisible = false
          redirectToNextMariiaStep()
        }
      "
    />

    <TextBlock v-if="mariiaStep.title" size="lg">
      {{ mariiaStep.title }}
    </TextBlock>
    <TextBlock v-if="mariiaStep.description" size="sm">
      {{ mariiaStep.description }}
    </TextBlock>

    <AppButton
      v-if="mariiaStep.prevId"
      :label="GENERAL_MESSAGES.BACK"
      @click="redirectToPrevMariiaStep()"
    />

    <AppButton
      v-if="mariiaStep.nextId && !mariiaStep.isGift"
      :label="mariiaStep.buttonText"
      @click="redirectToNextMariiaStep()"
    />

    <AppButton
      v-if="mariiaStep.isGift && mariiaStep.foundGiftButtonText && mariiaStep.nextId"
      :label="mariiaStep.foundGiftButtonText"
      @click="showFoundFoundGiftModal()"
    />

    <AppButton
      v-if="mariiaStep.nextId == null"
      :disabled="isNotifyLoading"
      :label="GENERAL_MESSAGES.FINISH_BUTTON_TEXT"
      @click="finish()"
    />
  </div>
</template>
