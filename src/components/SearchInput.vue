<script setup lang="ts">
const { type, placeholder } = defineProps<{
  type: 'text' | 'number'
  placeholder: string
}>()

const model = defineModel<string | number>()
</script>

<template>
  <input :type="type" :placeholder="placeholder" v-model="model" />
</template>
