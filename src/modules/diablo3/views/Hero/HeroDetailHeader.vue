<template>
  <div class="hero-detail-header my-5">
    <div class="mb-3 flex justify-center">
      <div class="hero-detail-avatar" :class="heroClass"></div>
    </div>
    <div class="text-center">
      <h1 class="text-bone my-4 font-diablo text-3xl">{{ hero.name }}</h1>
    </div>
    <div class="flex flex-col items-center justify-center">
      <div class="text-md mb-1 font-mono font-medium">
        <span>{{ hero.level }}</span>

        <span class="text-blue-400" v-if="hero.paragonLevel">
          <span class="text-gray-100"> · </span>
          ({{ hero.paragonLevel }})
        </span>

        <span> · {{ textToCapitalize(hero.class, "-") }}</span>
        <span v-if="hero.seasonal" class="text-success"> · Seasonal </span>
        <span v-if="hero.hardcore" class="text-danger"> · Hardcore </span>
      </div>

      <div class="text-md font-mono font-medium">
        <small class="text-gray-500"> Season created: </small>
        <small class="rounded bg-zinc-600 py-0.5 px-1">{{
          hero.seasonCreated
        }}</small>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { textToCapitalize } from "@/helpers/basics";
import type { HeroDiablo } from "../../interfaces/HeroDiablo";

const props = defineProps<{
  hero: HeroDiablo;
}>();

const gender = computed(() => (props.hero.gender === 0 ? "male" : "female"));
const heroClass = computed(() => `hero-${props.hero.class} ${gender.value}`);
</script>

<style scoped>
.hero-detail-avatar {
  width: 138px;
  height: 105px;
  background-size: 280px;
}
.text-bone {
  color: #e8dcc2;
}
</style>
