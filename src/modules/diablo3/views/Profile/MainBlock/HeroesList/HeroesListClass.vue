<template>
  <div class="hero-name-level">
    <span class="text-gray-400"> {{ classToName(heroe.class) }} </span>
    <span class="mx-2">·</span>
    <span class="text-mono font-bold text-gray-400"> {{ heroe.level }} </span>
  </div>
</template>

<script lang="ts" setup>
import { useHero } from "@/modules/diablo3/composables/useHero";
import type { Hero } from "@/modules/diablo3/interfaces/ProfileAccount";

const props = defineProps<{
  heroe: Hero;
}>();

const { classToName } = useHero({ ...props.heroe });
</script>
