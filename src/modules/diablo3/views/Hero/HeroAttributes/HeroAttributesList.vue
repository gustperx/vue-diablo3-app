<template>
  <ul class="list-none">
    <li v-for="attr in attributes" :key="attr.name" class="mb-1">
      <div class="my-3 flex justify-between">
        <div class="pl-2 capitalize text-amber-500">{{ attr.name }}</div>
        <div class="px-2 font-mono">{{ formatNumber(attr.value) }}</div>
      </div>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { useNumeral } from "@/modules/diablo3/composables/useNumeral";
import type { HeroAttribute } from "@/modules/diablo3/interfaces/HeroDiablo";

defineProps<{
  attributes: HeroAttribute[];
}>();

const { formatNumber } = useNumeral();
</script>
