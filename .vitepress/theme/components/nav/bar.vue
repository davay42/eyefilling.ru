<script setup>
import { useRoute } from 'vitepress'
import routes from '~pages'
import { getPages } from 'vitepress-pages/browser'

const route = useRoute();
const pages = getPages(routes)


</script>

<template lang='pug'>
.m-0
  .flex.flex-wrap.w-full.flex-1
    a.link.no-underline.transition-all.duration-300.text-xl.justify-center(
      v-for="page in pages['/']"
      :key= "page.path"
      :href="page.path"
      :class="{ active: route.path.includes(page.path) }"
      )
      h4.text-lg {{ page.title }} 
</template>

<style  scoped>
.link {
  --at-apply: p-4 bg-light-400 bg-opacity-10 dark-bg-dark-700 dark-bg-opacity-10;


}

.link.active {
  --at-apply: bg-light-100 bg-opacity-70 z-2 dark-bg-dark-200 dark-bg-opacity-70;
}
</style>