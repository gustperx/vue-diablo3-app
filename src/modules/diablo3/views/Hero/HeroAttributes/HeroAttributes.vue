<template>
  <div class="h-attriubutes">
    <h2 class="mb-2 font-diablo text-2xl">Attributes</h2>

    <hr class="bg-white" />

    <div class="attributes">
      <div class="core">
        <HeroAttributesList :attributes="coreAttributes" />
      </div>

      <hr />

      <div class="secondary">
        <HeroAttributesList :attributes="secondaryAttributes" />
      </div>
    </div>

    <hr />

    <div class="resources">
      <HeroResources :resources="resources" :classSlug="classSlug" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import HeroAttributesList from "./HeroAttributesList.vue";
import HeroResources from "./HeroResources.vue";
import type {
  HeroAttribute,
  HeroResourse,
} from "@/modules/diablo3/interfaces/HeroDiablo";

const coreAttr: string[] = [
  "strength",
  "dexterity",
  "vitality",
  "intelligence",
];
const secondaryAttr: string[] = ["damage", "toughness", "healing"];
const resourcesAttr: string[] = [
  "life",
  "primaryResource",
  "secondaryResource",
];

const props = defineProps<{
  stats: { [key: string]: number };
  classSlug: string;
}>();

const coreAttributes = computed(() => {
  return coreAttr.map<HeroAttribute>((item) => ({
    name: item,
    value: props.stats[item],
  }));
});
const secondaryAttributes = computed(() => {
  return secondaryAttr.map<HeroAttribute>((item) => ({
    name: item,
    value: props.stats[item],
  }));
});
const resources = computed(() => {
  const resources: HeroResourse<HeroAttribute> = {};
  resourcesAttr.forEach((item) => {
    resources[item] = { name: item, value: props.stats[item] };
  });
  return resources;
});
</script>
