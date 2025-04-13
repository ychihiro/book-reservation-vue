<script setup lang="ts">
export interface BreadcrumbItem {
  name: string
  path?: string
}

const { breadcrumbs } = defineProps<{ breadcrumbs: BreadcrumbItem[] }>()

const isLastItem = (index: number) => breadcrumbs.length === index + 1
</script>

<template>
  <div class="breadcrumbs">
    <ul>
      <li v-for="(item, index) in breadcrumbs" :key="index">
        <div>
          <router-link :to="item.path ?? ''">
            <span :class="isLastItem(index) && 'current-link'">{{ item.name }}</span>
          </router-link>
          <span v-if="!isLastItem(index)">></span>
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
