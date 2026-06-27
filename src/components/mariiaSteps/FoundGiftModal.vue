<script setup lang="ts">
import AppButton from '@/components/commons/AppButton.vue'

interface Props {
  text?: string | null
  buttonText?: string | null
  isVisible: boolean
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'confirm'): void
}>()
</script>

<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <div
      v-if="isVisible"
      class="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-pink-200"
    >
      <div class="flex flex-col items-center justify-center gap-2">
        <div class="relative w-80 h-80 flex items-center justify-center">
          <div
            class="z-10 flex items-center justify-center w-20 h-20 bg-pink-100 border border-pink-400 shadow font-bold text-sm rounded-full"
          >
            {{ text }}
          </div>

          <img
            class="absolute inset-0 w-full h-full object-contain animate-spin [animation-duration:3s]"
            src="@/assets/images/rays.png"
          />
        </div>

        <AppButton :label="buttonText" @click="emit('confirm')" />
      </div>
    </div>
  </Transition>
</template>
