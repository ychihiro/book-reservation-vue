<script setup lang="ts">
import { ref } from 'vue'
import Button from '../components/Button.vue'
import Input from '../components/Input.vue'

const current = ref<number>(1)
const inputEmail = ref<string>('')

const tabs = [
  { id: 1, title: 'ログイン', content: 'ログイン画面' },
  { id: 2, title: '会員登録', content: '会員登録画面' },
]

const toggleTab = (id: number) => {
  current.value = id
}

const handleLoginSubmit = () => {}
</script>

<template>
  <main>
    <div class="form-container">
      <div class="login">
        <ul>
          <li v-for="tab in tabs" :key="tab.id">
            <div @click="toggleTab(tab.id)" :class="{ select: current === tab.id }">
              {{ tab.title }}
            </div>
          </li>
        </ul>
        <div>
          <form @submit.prevent="handleLoginSubmit" v-show="current === 1">
            <div class="input-field">
              <label for="">メールアドレス</label>
              <Input type="text" placeholder="test@example.com" v-model="inputEmail" />
            </div>
            <div class="input-field">
              <label for="email">パスワード</label>
              <Input type="text" placeholder="komugi0510" v-model="inputEmail" />
            </div>
            <a href="">パスワードをお忘れの方</a>
            <Button name="ログインする" />
          </form>
          <div v-show="current === 2">会員登録</div>
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
