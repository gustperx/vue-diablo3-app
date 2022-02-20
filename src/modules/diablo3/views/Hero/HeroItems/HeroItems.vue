<template>
  <h1>HeroItems</h1>
</template>

<script lang="ts" setup>
import type { DetailedHeroItems } from "@/modules/diablo3/interfaces/DetailedHeroItems";

defineProps<{
  items: DetailedHeroItems;
}>();
</script>
