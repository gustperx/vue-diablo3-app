<template>
  <h3 class="my-4 font-diablo text-2xl text-bone">Hero List</h3>

  <table class="w-full table-auto border-collapse text-sm md:table-fixed">
    <thead>
      <tr>
        <th class="border-b p-4 pl-8 pt-0 pb-3 text-left text-gray-400">
          Name
        </th>
        <th class="border-b p-4 pt-0 pb-3 text-left text-gray-400">Class</th>
        <th class="border-b p-4 pr-8 pt-0 pb-3 text-left text-gray-400">
          Elite Kills
        </th>
      </tr>
    </thead>
    <tbody class="bg-slate-800">
      <tr v-for="hero in heroes" :key="hero.id">
        <td class="border-b border-slate-100 p-4 pl-8 text-slate-200">
          <HeroesListIcono :heroe="hero" />
        </td>
        <td class="border-b border-slate-100 p-4 text-slate-200">
          <HeroesListClass :heroe="hero" />
        </td>
        <td class="border-b border-slate-100 p-4 pr-8 text-slate-200">
          <span class="text-gray-400">{{ hero.kills.elites }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import type { Hero } from "@/modules/diablo3/interfaces/ProfileAccount";
import HeroesListIcono from "./HeroesListIcono.vue";
import HeroesListClass from "./HeroesListClass.vue";

defineProps<{
  heroes: Hero[];
}>();
</script>
