<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/components/Button.vue'
import Input from '@/components/Input.vue'

const current = ref<number>(1)
const inputEmail = ref<string>('')
const handleLoginSubmit = () => {
  // TODO: ここでログインの処理を実装
  // ログインに成功した後の処理は親コンポーネントに委ねる
}
</script>

<template>
  <form @submit.prevent="handleLoginSubmit" v-show="current === 1">
    <div class="input-field">
      <label for="">お名前</label>
      <Input type="text" placeholder="屋敷 太郎" v-model="inputEmail" />
    </div>
    <div class="input-field">
      <label for="">メールアドレス</label>
      <Input type="text" placeholder="test@example.com" v-model="inputEmail" />
    </div>
    <div class="input-field">
      <label for="email">パスワード</label>
      <Input type="text" placeholder="komugi0510" v-model="inputEmail" />
    </div>
    <Button name="登録する" />
  </form>
</template>

<style scoped></style>
