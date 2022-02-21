<template>
  <RouterLink :to="{ name: 'home' }" class="mr-8 text-gray-500"
    >Home</RouterLink
  >
  <RouterLink :to="{ name: 'about' }" class="mr-8 text-gray-500"
    >About</RouterLink
  >
  <a
    href="https://github.com/gustperx/vue-blizzard-app"
    class="text-gray-500"
    target="_blank"
    >Github</a
  >
</template>

<script lang="ts" setup>
import { RouterLink } from "vue-router";
</script>
