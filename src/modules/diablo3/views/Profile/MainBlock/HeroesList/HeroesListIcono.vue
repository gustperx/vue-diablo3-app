<template>
  <div class="hero-ico flex cursor-pointer items-center" @click="goToHero">
    <span class="hero-image border" :class="heroClassImg" />
    <span
      class="hero-name ml-2 font-bold text-gray-400"
      :class="hardcoreBgColor"
    >
      {{ heroName }}
    </span>
    <img
      v-if="heroe.seasonal"
      :src="mediaCloudinary('v1644710868/diablo3/xj12ru7yh3s3hxbas8kd.png')"
      class="ml-2 h-4"
      alt="seasonal_leaf"
    />
  </div>
</template>

<script lang="ts" setup>
import { useHero } from "@/modules/diablo3/composables/useHero";
import { useMedia } from "@/modules/diablo3/composables/useMedia";
import type { Hero } from "@/modules/diablo3/interfaces/ProfileAccount";

const props = defineProps<{
  heroe: Hero;
}>();

const { heroClassImg, heroName, hardcoreBgColor, goToHero } = useHero({
  ...props.heroe,
});

const { mediaCloudinary } = useMedia();
</script>

<style scoped>
.hero-ico {
  vertical-align: middle;
}
.hero-ico .hero-image {
  width: 30px;
  height: 26px;
  display: inline-block;
  background-size: 210%;
}
.hero-ico .hero-name {
  height: 24px;
  display: inline-block;
}
</style>
