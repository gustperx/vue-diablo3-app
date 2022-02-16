<template>
  <h3 class="my-4 font-diablo text-2xl">Hero List</h3>

  <table class="w-full table-auto border-collapse text-sm md:table-fixed">
    <thead>
      <tr>
        <th
          class="border-b p-4 pl-8 pt-0 pb-3 text-left font-medium text-slate-100"
        >
          Name
        </th>
        <th class="border-b p-4 pt-0 pb-3 text-left font-medium text-slate-100">
          Class
        </th>
        <th
          class="border-b p-4 pr-8 pt-0 pb-3 text-left font-medium text-slate-100"
        >
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
          {{ hero.kills.elites }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import type { Hero } from "@/modules/diablo3/interfaces/profileAccount";
import HeroesListIcono from "./HeroesListIcono.vue";
import HeroesListClass from "./HeroesListClass.vue";

defineProps<{
  heroes: Hero[];
}>();
</script>
