<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import Button from '../components/Button.vue'
import Breadcrumbs, { type BreadcrumbItem } from '../components/Breadcrumbs.vue'
import axios, { type AxiosResponse } from 'axios'
import type { Book } from '../interfaces/Book'

const router = useRoute()
const { params } = router

const book = ref<Book | null>(null)
const breadcrumbs = ref<BreadcrumbItem[]>([
  {
    name: 'TOP',
    path: '/',
  },
  {
    name: '本を探す',
  },
])

onMounted(async () => {
  const bookId = params.id
  // IMO: try catchはなくても良いかも
  try {
    // TODO: features/book/apiに記述 src/features/auth/api/login.tsを参照
    const response: AxiosResponse = await axios.get(`http://localhost/api/books/${bookId}`)
    book.value = response.data.data

    if (!book.value) return

    // パンクズリスト
    breadcrumbs.value.push({
      name: book.value.title,
    })
  } catch (error) {
    console.error('データ取得に失敗しました', error)
  }
})
</script>

<template>
  <main v-if="book">
    <div class="breadcrumbs">
      <Breadcrumbs :breadcrumbs="breadcrumbs" />
    </div>
    <div class="main-content">
      <!-- IMO: 本に関するUIはsrc/features/book/componentsに切り出しても良いかも -->
      <div class="detail">
        <div>
          <div class="detail__img">
            <img :src="book?.path" alt="画像" />
          </div>
          <p>
            発売日：<span>{{ book.published_date }}</span>
          </p>
          <p>
            ISBN：<span>{{ book.isbn }}</span>
          </p>
        </div>
        <div class="detail__content">
          <div class="category">{{ book.category_id }}</div>
          <h2 class="title">{{ book.title }}</h2>
          <p>
            著者：<span>{{ book.author }}</span>
          </p>
          <p>
            出版社：<span>{{ book.publisher }}</span>
          </p>
          <p class="story">あらすじ</p>
          <p>{{ book.description }}</p>
          <Button name="借りる" />
        </div>
      </div>
    </div>
    <!-- <p>詳細ぺーじ{{ params.id }}</p> -->
  </main>
</template>

<style scoped>
/* FIXME: このスタイルは不要？ */
header {
  display: none;
}
main {
  background-color: #f9f5ee;
}
/* FIXME: このスタイルは不要？ */
.breadcrumbs {
  /* width: 1000px; */
}
.detail {
  display: flex;
  gap: 32px;
  width: 1000px;
  margin: auto;
  padding: 32px 48px;
  border-radius: 4px;
  background-color: #fefefe;
}
.title {
  margin-bottom: 8px;
  font-weight: bold;
}
.category {
  width: fit-content;
  padding: 0px 8px;
  font-size: 14px;
  font-weight: bold;
  color: #fefefe;
  background-color: pink;
  border-radius: 4px;
}
.story {
  border-bottom: 1px dotted #000;
}
</style>
