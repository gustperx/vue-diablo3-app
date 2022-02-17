<template>
  <div class="mt-3">
    <hr class="mt-5" />
    <h2 class="my-4 font-diablo text-xl">Time Played</h2>
    <div class="bg-dark p-3">
      <div v-for="hero in timeProcess" :key="hero.classSlug">
        <TimePlayedHero :heroTime="hero" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TimePlayedHero from "./TimePlayedHero.vue";
import { useTimePlayed } from "@/modules/diablo3/composables/useTimePlayed";
import type { TimePlayed } from "@/modules/diablo3/interfaces/profileAccount";

const props = defineProps<{
  timePlayed: TimePlayed;
}>();

const { timeProcess } = useTimePlayed({ ...props.timePlayed });
</script>
