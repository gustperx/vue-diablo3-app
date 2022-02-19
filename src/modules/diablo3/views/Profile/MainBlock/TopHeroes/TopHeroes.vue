<template>
  <div class="top-heroes">
    <h3 class="my-4 font-diablo text-2xl">Top Heroes</h3>
    <div class="grid grid-cols-2 md:grid-cols-3">
      <div v-for="hero in heroes" :key="hero.id">
        <TopHeroesItem :heroe="hero" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Hero } from "@/modules/diablo3/interfaces/ProfileAccount";
import TopHeroesItem from "./TopHeroesItem.vue";

defineProps<{
  heroes: Hero[];
}>();
</script>
