<script setup lang="ts">
import Button from './Button.vue'

const { book } = defineProps<{
  book: {
    id?: number
    title?: string
    path?: string
    category_id?: number
    author?: string
    description?: string
    isbn?: string
    publisher?: string
    published_date?: Date
    status?: number
  }
}>()
</script>

<template>
  <div @click="$emit('onClickCard', book.id)" class="card__item">
    <div class="card__image">
      <img :src="book.path" alt="画像" />
    </div>
    <div class="card__text">
      <p>{{ book.title }}</p>
      <Button name="借りる" />
    </div>
  </div>
</template>

<style scoped>
.card__item {
  border: 1px solid #e3e2e2;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  background-color: #fefefe;
}
.card__image {
  display: grid;
  grid-template-rows: 150px;
  overflow: hidden;
}
.card__image img {
  object-fit: cover;
}
.card__text {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 12px;
}
</style>
