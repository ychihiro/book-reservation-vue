<script setup lang="ts">
const { breadcrumbs } = defineProps<{
  breadcrumbs: {
    name: string
    path: string | null
  }[]
}>()
</script>

<template>
  <div class="breadcrumbs">
    <ul>
      <li v-for="(v, key) in breadcrumbs" :key>
        <div v-if="v.path">
          <router-link :to="v.path">
            <span>{{ v.name }}</span>
          </router-link>
          <span>></span>
        </div>
        <div v-else>
          <span class="current-link">{{ v.name }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.breadcrumbs {
  padding: 12px 32px;
  background-color: #eee;
}
ul {
  padding: 0px;
  display: flex;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
span {
  padding: 4px;
}
.current-link {
  color: #02b580;
}
</style>
