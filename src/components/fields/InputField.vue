<script setup lang="ts">
import type { FieldContext } from 'vee-validate'

interface Props {
  fieldContext: FieldContext<string>
  label?: string
}

defineProps<Props>()
</script>

<template>
  <div class="w-full flex flex-col items-start justify-center">
    <label v-if="label" class="mb-1 block text-sm font-medium text-gray-700">{{ label }}</label>

    <input
      class="block w-full rounded-md border border-pink-200 bg-pink-100 px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-pink-400 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-200 transition-all duration-200"
      :value="fieldContext.value.value"
      :placeholder="label"
      @input="fieldContext.handleChange"
      @blur="fieldContext.handleBlur"
    />

    <span v-if="fieldContext.errorMessage.value" class="text-sm text-red-600">
      {{ fieldContext.errorMessage.value }}
    </span>
  </div>
</template>
