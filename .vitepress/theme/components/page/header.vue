<script setup>
import { useData } from 'vitepress'

const { theme } = useData()

</script>

<template lang='pug'>
header#start
  .flex.flex-col.items-center
    a.no-underline.flex-auto.flex.items-center.justify-center(href="/" title="Go home")
      img.h-42(:src="theme.logo" alt="Eyefilling logo")
    .flex.flex-col.w-full.justify-center.max-w-3xl

      nav-bar
      //- nav-parents
      
      
</template>
<style scoped>
header {
  flex: 1 1 100%;
  --at-apply: flex flex-col z-2 shadow-lg;
}

.info {
  --at-apply: flex flex-col items-center gap-2 w-full p-4 bg-light-600 dark-bg-dark-500;
}
</style>