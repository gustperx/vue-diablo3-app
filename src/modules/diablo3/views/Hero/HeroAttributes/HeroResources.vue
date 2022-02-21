<template>
  <div class="resource-wrapper">
    <div class="resource py-2.5">
      <div class="flex items-center justify-start">
        <div class="resource-icon resource-life" />
        <div class="ml-3 uppercase text-amber-500">
          <span>{{ resources.life.name }}</span>
        </div>
        <div class="ml-3">
          <span class="text-monospace"> {{ resources.life.value }} </span>
        </div>
      </div>
    </div>

    <div class="resource">
      <div class="flex items-center justify-start py-2.5">
        <div class="resource-icon" :class="classResourceName(classSlug)" />
        <div
          class="ml-3 uppercase text-amber-500"
          :class="'resource-name-' + classSlug"
        >
          <span>{{ displayResourceName(classSlug) }}</span>
        </div>
        <div class="ml-3">
          <span class="font-mono">
            {{ resources.primaryResource.value }}
            <template v-if="hasSecondaryResource(classSlug)">
              <span class="mx-0 text-gray-400">/</span>
              <span> {{ resources.secondaryResource.value }} </span>
            </template>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAttribute } from "@/modules/diablo3/composables/useAttribute";
import type {
  HeroAttribute,
  HeroResourse,
} from "@/modules/diablo3/interfaces/HeroDiablo";

defineProps<{
  resources: HeroResourse<HeroAttribute>;
  classSlug: string;
}>();

const { classResourceName, displayResourceName, hasSecondaryResource } =
  useAttribute();
</script>

<style scoped>
.resource .resource-icon {
  background-image: url("https://res.cloudinary.com/dpfdgvz5b/image/upload/v1644710869/diablo3/wdexkvnrakcewjdmyl28.png");
  width: 50px;
  height: 50px;
}
.resource .resource-icon.resource-mana {
  background-position: 0 -50px;
}
.resource .resource-icon.resource-fury {
  background-position: -50px 0;
}
.resource .resource-icon.resource-hatred-discipline {
  background-position: -100px 0px;
}
.resource .resource-icon.resource-spirit {
  background-position: -50px -50px;
}
.resource .resource-icon.resource-arcane-power {
  background-position: -100px -50px;
}
.resource .resource-icon.resource-wrath {
  background-position: 0px -100px;
}
.resource .resource-icon.resource-essence {
  background-position: -50px -100px;
}

.resource .resource-name-demon-hunter {
  width: auto;
}
@media (min-width: 992px) {
  .resource .resource-name-demon-hunter {
    width: 100px;
  }
}
</style>
