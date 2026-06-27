<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue'

interface Props {
  label?: string | null
  type?: ButtonHTMLAttributes['type']
  disabled?: boolean
}

withDefaults(defineProps<Props>(), { type: 'button', disabled: false })
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="`${disabled ? 'opacity-20 pointer-events-none' : ''} z-10 block w-full rounded-md border-2 border-blush hover:border-accent bg-soft px-3 py-2 font-bold text-white shadow-sm cursor-pointer transition-all duration-200`"
  >
    {{ label }}
  </button>
</template>
