<template>
  <img :src="mediaGem(gem.item.icon)" :alt="gem.item.name" :title="gemTitle" />
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useMedia } from "@/modules/diablo3/composables/useMedia";
import type { Gem } from "@/modules/diablo3/interfaces/DetailedHeroItems";

const props = defineProps<{
  gem: Gem;
}>();

const { mediaGem } = useMedia();

const gemTitle = computed(
  () => `${props.gem.item.name}\n\n${props.gem.attributes}`
);
</script>
