<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue'

interface Props {
  size?: 'sm' | 'lg'
}

withDefaults(defineProps<Props>(), { size: 'sm' })
</script>

<template>
  <div
    :class="`${size == 'sm' ? 'text-md' : ''} ${size == 'lg' ? 'text-2xl' : ''} text-gray-700 font-bold w-full text-center bg-white/90 p-1 rounded-md`"
  >
    <slot></slot>
  </div>
</template>
