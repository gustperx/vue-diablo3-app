<template>
  <div class="h-attriubutes">
    <h2 class="mb-2 font-diablo text-2xl text-bone">Attributes</h2>

    <hr class="bg-white" />

    <div class="attributes">
      <div class="core">
        <HeroAttributesList :attributes="coreAttributes(stats)" />
      </div>

      <div class="secondary">
        <HeroAttributesList :attributes="secondaryAttributes(stats)" />
      </div>
    </div>

    <div class="resources">
      <HeroResources :resources="resources(stats)" :classSlug="classSlug" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import HeroAttributesList from "./HeroAttributesList.vue";
import HeroResources from "./HeroResources.vue";
import { useAttribute } from "@/modules/diablo3/composables/useAttribute";
import type { HeroAttributes } from "@/modules/diablo3/interfaces/HeroDiablo";

defineProps<{
  stats: HeroAttributes;
  classSlug: string;
}>();

const { coreAttributes, secondaryAttributes, resources } = useAttribute();
</script>
