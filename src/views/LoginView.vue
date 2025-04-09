<script setup lang="ts">
import { ref } from 'vue'

const current = ref<string>('login')
const inputEmail = ref<string>('')

const tabs = [
  { key: 'login', title: 'ログイン', content: 'ログイン画面', content:  },
  { key: 'register', title: '会員登録', content: '会員登録画面' },
]

const toggleTab = (id: string) => {
  current.value = id
}

const handleLoginSubmit = () => {}
</script>

<template>
  <main>
    <div class="form-container">
      <div class="login">
        <ul>
          <li v-for="tab in tabs" :key="tab.key">
            <div @click="toggleTab(tab.key)" :class="{ select: current === tab.id }">
              {{ tab.title }}
            </div>
          </li>
        </ul>
        <div>
          <LoginForm v-show="current === 'login'" />
          <div v-show="current === 'register'">会員登録</div>
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
