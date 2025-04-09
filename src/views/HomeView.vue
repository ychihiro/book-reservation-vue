<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios, { type AxiosResponse } from 'axios'
import SearchInput from '../components/SearchInput.vue'
import Button from '../components/Button.vue'
import CardItem from '../components/CardItem.vue'
// import getBooks from '../api/getBooks'
import type { Book } from '../types/Book'

const inputText = ref<string>('')
const router = useRouter()

const books = ref<Book[]>([])

function clickCard(id: number): void {
  router.push(`/book/${id}`)
}

function handleSubmit(): void {}

onMounted(async () => {
  try {
    const response: AxiosResponse = await axios.get('http://localhost/api/books')
    books.value = response.data.data
  } catch (error) {
    console.error('データ取得に失敗しました', error)
  }
})
</script>

<template>
  <main>
    <div class="main-content">
      <form @submit.prevent="handleSubmit" class="search__form">
        <SearchInput type="text" placeholder="書籍名、キーワード" v-model="inputText" />
        <Button name="検索" />
      </form>
      <div class="card">
        <CardItem v-for="(book, key) in books" :key="key" :book @on-click-card="clickCard" />
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  /* 100vh - ヘッダーの高さ; */
  min-height: calc(100vh - 69.5px);
  background-color: #f9f5ee;
}
/* 検索欄 */
.search__form {
  margin-bottom: 32px;
}
/* カード */
.card {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
}
</style>
