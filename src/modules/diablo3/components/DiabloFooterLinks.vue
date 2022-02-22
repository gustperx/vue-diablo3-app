<template>
  <RouterLink :to="{ name: 'diablo3-home' }" class="mr-8 text-gray-500"
    >Home</RouterLink
  >
  <RouterLink :to="{ name: 'diablo3-about' }" class="mr-8 text-gray-500"
    >About</RouterLink
  >
  <a
    href="https://github.com/gustperx/vue-diablo3-app"
    class="text-gray-500"
    target="_blank"
    >Github</a
  >
</template>

<script lang="ts" setup>
import { RouterLink } from "vue-router";
</script>
