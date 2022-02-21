<template>
  <div class="mx-4">
    <hr class="my-4 bg-gray-200" />
    <h3 class="mb-4 font-diablo text-2xl text-bone">Artisans</h3>
    <div class="flex flex-col md:flex-row">
      <div v-for="artisan in artisansInfo" :key="artisan.name">
        <ArtisansBlockItem :artisan="artisan" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ArtisansBlockItem from "./ArtisansBlockItem.vue";
import type { Artisans, Artisan } from "../../../interfaces/ProfileAccount";
import { ref } from "vue";

const props = defineProps<{
  artisans: Artisans;
}>();

const artisansInfo = ref<Artisan[]>([
  {
    name: "blacksmith",
    icon: "fa-solid fa-hammer",
    color: "#ffb74d",
    normal: props.artisans.blacksmith,
    hardcore: props.artisans.blacksmithHardcore,
  },
  {
    name: "jeweler",
    icon: "fa-solid fa-gem",
    color: "#4dd0e1",
    normal: props.artisans.jeweler,
    hardcore: props.artisans.jewelerHardcore,
  },
  {
    name: "mystic",
    icon: "fa-solid fa-hat-wizard",
    color: "#ba68c8",
    normal: props.artisans.mystic,
    hardcore: props.artisans.mysticHardcore,
  },
]);
</script>
