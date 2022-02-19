<template>
  <h2 class="my-4 font-diablo text-2xl">Time Played</h2>
  <div class="bg-gray-800 p-4">
    <div v-for="hero in timeProcess" :key="hero.classSlug">
      <TimePlayedHero :heroTime="hero" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import TimePlayedHero from "./TimePlayedHero.vue";
import { useTimePlayed } from "@/modules/diablo3/composables/useTimePlayed";
import type { TimePlayed } from "@/modules/diablo3/interfaces/ProfileAccount";

const props = defineProps<{
  timePlayed: TimePlayed;
}>();

const { timeProcess } = useTimePlayed({ ...props.timePlayed });
</script>
