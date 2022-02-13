<template>
  <RouterLink :to="{ name: 'home' }" class="mr-8">Home</RouterLink>
  <RouterLink :to="{ name: 'about' }" class="mr-8">About</RouterLink>
  <a href="https://github.com/gustperx" target="_blank">Github</a>
</template>

<script lang="ts" setup>
import { RouterLink } from "vue-router";
</script>
