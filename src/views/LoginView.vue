<script setup lang="ts">
import { ref } from 'vue'
import LoginForm from '@/features/auth/components/LoginForm.vue'
import RegisterForm from '@/features/auth/components/RegisterForm.vue'

const current = ref<'login' | 'register'>('login')

interface Tab {
  key: 'login' | 'register'
  name: string
}

const tabs: Tab[] = [
  { key: 'login', name: 'ログイン' },
  { key: 'register', name: '会員登録' },
]

const toggleTab = (key: 'login' | 'register') => {
  current.value = key
}
</script>

<template>
  <main>
    <div class="form-container">
      <div class="login">
        <ul>
          <li v-for="tab in tabs" :key="tab.key">
            <div @click="toggleTab(tab.key)" :class="{ select: current === tab.key }">
              {{ tab.name }}
            </div>
          </li>
        </ul>
        <div>
          <div v-show="current === 'login'">
            <LoginForm />
          </div>
          <div v-show="current === 'register'">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  min-height: calc(100vh - 69.5px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-container {
  width: 40%;
  background-color: #fefefe;
  border-radius: 4px;
}

.login {
  width: 80%;
  margin: auto;
  height: 500px;
  padding: 64px 24px;
}

/* タブ */
ul {
  display: flex;
  justify-content: space-around;
}
li {
  width: 100%;
  text-align: center;
  color: #fefefe;
  cursor: pointer;
  color: #afaeae;
  /* border-bottom: 1px solid #afaeae; */
}
.select {
  color: #5c5c5c;
  font-weight: bold;
  /* background-color: #02b580; */
  border-bottom: 1px solid #5c5c5c;
}

/* フォーム */
form {
  padding: 32px 0px;
}

form .input-field {
  display: flex;
  flex-direction: column;
}
</style>
