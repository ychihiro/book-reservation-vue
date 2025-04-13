<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/components/Button.vue'
import Input from '@/components/Input.vue'
import type { LoginRequest } from '@/interfaces/LoginRequest'
import { login } from '@/features/auth/api/login'

const credentials = ref<LoginRequest>({
  email: '',
  password: '',
})

const handleLoginSubmit = async () => {
  login({
    body: {
      email: credentials.value.email,
      password: credentials.value.password,
    },
  })
}
</script>

<template>
  <form @submit.prevent="handleLoginSubmit">
    <div class="input-field">
      <label for="email">メールアドレス</label>
      <Input id="email" type="text" placeholder="test@example.com" v-model="credentials.email" />
    </div>
    <div class="input-field">
      <label for="password">パスワード</label>
      <Input id="password" type="text" placeholder="komugi0510" v-model="credentials.password" />
    </div>
    <a href="" class="forgot-password">パスワードをお忘れの方</a>
    <Button name="ログインする" />
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.input-field {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.forgot-password {
  text-align: center;
}
</style>
