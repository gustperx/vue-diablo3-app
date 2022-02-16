<template>
  <div class="top-heroes">
    <h3 class="my-4 font-diablo text-2xl">Top Heroes</h3>
    <div class="flex justify-evenly">
      <div v-for="hero in heroes" :key="hero.id">
        <TopHeroesItem :heroe="hero" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Hero } from "@/modules/diablo3/interfaces/profileAccount";
import TopHeroesItem from "./TopHeroesItem.vue";

defineProps<{
  heroes: Hero[];
}>();
</script>
