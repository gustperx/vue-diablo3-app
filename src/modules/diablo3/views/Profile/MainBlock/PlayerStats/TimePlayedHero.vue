<template>
  <div class="progress-time-played">
    <div class="flex justify-between">
      <h5 class="mb-0 font-medium">{{ heroTime.hero }}</h5>
      <span>
        <span class="w-50p">{{ (heroTime.time * 100).toFixed(2) }}</span>
      </span>
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
