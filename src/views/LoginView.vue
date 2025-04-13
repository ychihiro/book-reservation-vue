<script setup lang="ts">
// IMO: このView名はAuthViewに変更した方が良い説
import { ref } from 'vue'
import LoginForm from '@/features/auth/components/LoginForm.vue'
import RegisterForm from '@/features/auth/components/RegisterForm.vue'

const TABS = {
  LOGIN: {
    key: 'login',
    name: 'ログイン',
  },
  REGISTER: {
    key: 'register',
    name: '会員登録',
  },
} as const

type TabKey = (typeof TABS)[keyof typeof TABS]['key']

// FIXME: currentをcurrentTabKeyなどに変更したい
const current = ref<TabKey>(TABS.LOGIN.key)
</script>

<template>
  <main>
    <div class="form-container">
      <div class="login">
        <ul>
          <!-- TODO: タブコンポーネントの作成 -->
          <li v-for="tab in TABS" :key="tab.key">
            <div @click="current = tab.key" :class="{ select: current === tab.key }">
              {{ tab.name }}
            </div>
          </li>
        </ul>
        <div>
          <!-- TODO: 'login'をTABS.LOGIN.keyに置き換える -->
          <div v-show="current === TABS.LOGIN.key">
            <LoginForm />
          </div>
          <!-- TODO: 'register'をTABS.REGISTER.keyに置き換える -->
          <div v-show="current === TABS.REGISTER.key">
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
