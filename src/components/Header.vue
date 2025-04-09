<script setup lang="ts">
const menuItems = [
  {
    name: '本を探す',
    path: '/search',
  },
  {
    name: 'お問い合わせ',
    path: '/contact',
  },
  {
    name: 'ログイン',
    path: '/login',
  },
]
</script>

<template>
  <header>
    <nav>
      <div class="logo">
        <h1 class="logo-name">図書館</h1>
        <p class="logo-name-alphabet"><span>Y</span>ashiki <span>L</span>ibrary</p>
      </div>
      <ul>
        <li v-for="(menu, key) in menuItems" :key>
          <router-link :to="menu.path" class="nav__link">{{ menu.name }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  padding: 8px 32px;
  background-color: #fefefe;
  line-height: normal;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* ロゴ */
.logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.logo-name {
  font-size: 24px;
  font-weight: bold;
}
.logo-name-alphabet span {
  color: #02b580;
}
/* ナビゲーション */
ul {
  display: flex;
}
li {
  padding: 4px 12px;
  list-style: none;
  cursor: pointer;
}
li + li {
  border-left: 1px solid #e3e2e2;
}
.nav__link {
  text-decoration: none;
}
.nav__link:hover {
  color: #02b580;
}
</style>
