<script setup lang="ts">
const { name, backgroundColor = '#02b580' } = defineProps<{
  name: string
  backgroundColor?: string
}>()
</script>

<template>
  <button>{{ name }}</button>
</template>

<style scoped>
button {
  display: block;
  padding: 4px 8px;
  color: #fefefe;
  border: 1px solid v-bind(backgroundColor);
  border-radius: 4px;
  background-color: v-bind(backgroundColor);
  cursor: pointer;
}
button:hover {
  filter: brightness(1.15);
}
</style>
