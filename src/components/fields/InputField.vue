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
      class="block text-white w-full rounded-md border border-blush bg-soft px-3 py-2 text-sm shadow-sm placeholder:text-white placeholder:font-medium focus:border-accent focus:outline-none focus:ring-2 focus:ring-blush transition-all duration-200"
      :value="fieldContext.value.value"
      :placeholder="label"
      @input="fieldContext.handleChange"
      @blur="fieldContext.handleBlur"
    />

    <span v-if="fieldContext.errorMessage.value" class="text-sm text-blush font-medium">
      {{ fieldContext.errorMessage.value }}
    </span>
  </div>
</template>
