<template>
  <div class="progress-time-played">
    <div class="flex justify-between">
      <h5 class="mb-1 text-sm font-medium">{{ heroTime.hero }}</h5>
      <span>
        <span class="bg-gray-200 px-2 text-sm font-medium text-gray-700">{{
          (heroTime.time * 100).toFixed(2)
        }}</span>
      </span>
    </div>
    <div class="mb-3 w-full rounded-lg bg-gray-500">
      <div
        class="rounded-full p-0.5 text-center text-xs font-medium leading-none"
        :class="classHeroBg"
        :style="{ width: heroTime.time }"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { HeroData } from "@/modules/diablo3/classes/HeroData";
import { computed } from "vue";

const props = defineProps<{
  heroTime: HeroData;
}>();

const classHeroBg = computed(() => `hero-bg-color-${props.heroTime.classSlug}`);
</script>

<style scoped>
.progress-time-played .hero-bg-color-barbarian {
  background-color: #4e1c16;
}
.progress-time-played .hero-bg-color-crusader {
  background-color: #795548;
}
.progress-time-played .hero-bg-color-demon-hunter {
  background-color: #f44336;
}
.progress-time-played .hero-bg-color-monk {
  background-color: #ff9800;
}
.progress-time-played .hero-bg-color-necromancer {
  background-color: #00bcd4;
}
.progress-time-played .hero-bg-color-witch-doctor {
  background-color: #8bc34a;
}
.progress-time-played .hero-bg-color-wizard {
  background-color: #3f51b5;
}
</style>
