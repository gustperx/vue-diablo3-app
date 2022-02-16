<template>
  <div class="mx-4 flex flex-col md:mx-0 md:flex-row">
    <div class="basis-4/6">
      <TopHeroes v-if="hasHeroes" :heroes="topHeroes" />

      <HeroesList v-if="hasHeroList" :heroes="heroList" />

      <ProgressList :acts="profile.progression" />
    </div>
    <div class="basis-2/6">Izquierda</div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import TopHeroes from "./TopHeroes/TopHeroes.vue";
import HeroesList from "./HeroesList/HeroesList.vue";
import type { ProfileAccount } from "@/modules/diablo3/interfaces/profileAccount";
import ProgressList from "./ProgressList/ProgressList.vue";

const props = defineProps<{
  profile: ProfileAccount;
}>();

// top heroes
const hasHeroes = computed(() => props.profile.heroes.length > 0);
const topHeroes = computed(() => props.profile.heroes.slice(0, 3));
// lista heroes
const hasHeroList = computed(() => props.profile.heroes.length > 0);
const heroList = computed(() =>
  props.profile.heroes.slice(0, props.profile.heroes.length)
);
</script>
