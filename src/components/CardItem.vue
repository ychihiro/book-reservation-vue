<script setup lang="ts">
// TODO: src/features/book/components/に移動させる ※Bookの表示に関連するコンポーネントのため
import type { Book } from '@/types/Book'
import Button from './Button.vue'

const { book } = defineProps<{
  book: Pick<Book, 'id' | 'title' | 'path'>
}>()
</script>

<template>
  <!-- IMO: onClickCardカード以外のクリックイベントを親コンポーネントに伝える必要があれば有効であると思うが、基本的にはカードのクリックのみが親に伝えるイベントとして想定されそうなので、onClickで十分そう -->
  <div @click="$emit('onClickCard', book.id)" class="card__item">
    <div class="card__image">
      <img :src="book.path" alt="画像" />
    </div>
    <div class="card__text">
      <p>{{ book.title }}</p>
      <!-- TODO: 借りるをクリックした時の処理を実装 -->
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
