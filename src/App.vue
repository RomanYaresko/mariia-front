<script setup lang="ts">
import { RouterView } from 'vue-router'
import FloatingHearts from '@/components/commons/FloatingHearts.vue'
</script>

<template>
  <div class="relative">
    <FloatingHearts />
    <RouterView />
  </div>
</template>
