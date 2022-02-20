<template>
  <ul class="list-none">
    <li v-for="attr in attributes" :key="attr.name" class="mb-1">
      <div class="my-2 flex justify-between">
        <div class="name-text pl-2 capitalize">{{ attr.name }}</div>
        <div class="px-2 font-mono">{{ attr.value }}</div>
      </div>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import type { HeroAttribute } from "@/modules/diablo3/interfaces/HeroDiablo";

defineProps<{
  attributes: HeroAttribute[];
}>();
</script>

<style scoped>
ul li .name-text {
  color: #efb45d;
  font-weight: 600;
}
</style>
