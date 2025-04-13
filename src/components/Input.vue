<script setup lang="ts">
const { type } = defineProps<{
  id?: string
  type: 'text' | 'number'
  placeholder: string
  className?: string
}>()

// const { breadcrumbs } = defineProps<{
//   breadcrumbs: {
//     name: string
//     path: string | null
//   }[]
// }>()

const model = defineModel<string | number>()
</script>

<template>
  <input :id="id" :type="type" :placeholder="placeholder" v-model="model" />
</template>

<style scoped>
input {
  height: 45px;
  padding: 8px;
  border: 1px solid #e2e3e2;
  border-radius: 4px;
}
</style>
