<template>
  <img :src="gemUrl" :alt="gem.item.name" :title="gemTitle" />
</template>

<script lang="ts" setup>
import { computed } from "vue";
import type { Gem } from "@/modules/diablo3/interfaces/DetailedHeroItems";

const props = defineProps<{
  gem: Gem;
}>();

const gemUrl = computed(() => {
  const host = "http://media.blizzard.com/d3/icons/items/small/";
  return `${host}${props.gem.item.icon}.png`;
});

const gemTitle = computed(
  () => `${props.gem.item.name}\n\n${props.gem.attributes}`
);
</script>
