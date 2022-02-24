<template>
  <h2 class="font-diablo text-bone my-4 text-2xl">Stats</h2>
  <div class="stats flex flex-col bg-gray-800 p-3">
    <SingleStat
      ico-name="fa-solid fa-skull"
      ico-color="#9E9E9E"
      :info="{ value: stats.kills.monsters, text: 'Lifetime Kills' }"
    />

    <SingleStat
      ico-name="fa-solid fa-crown"
      ico-color="#ffc107"
      :info="{ value: stats.kills.elites, text: 'Elite Kills' }"
    />

    <SingleStat
      ico-name="fa-solid fa-dungeon"
      ico-color="#795548"
      :info="{ value: stats.paragonLevel, text: 'Paragon Level' }"
    />
  </div>

  <TimePlayed :timePlayed="stats.timePlayed" />
</template>

<script lang="ts" setup>
import TimePlayed from "./TimePlayed.vue";
import SingleStat from "./SingleStat.vue";
import type {
  ProfileAccountKills,
  TimePlayed as TimePlayedInterface,
} from "@/modules/diablo3/interfaces/ProfileAccount";

defineProps<{
  stats: {
    paragonLevel: number;
    kills: ProfileAccountKills;
    timePlayed: TimePlayedInterface;
  };
}>();
</script>
