<template>
  <div
    class="d3-icon-item h-72 bg-gray-800 pt-3 text-center"
    :class="itemClassColor"
  >
    <div class="flex h-52 flex-col justify-between">
      <template v-if="item.id">
        <div>
          <div v-if="item" class="item-image">
            <small class="mx-1 text-gray-200">{{ item.name }}</small>
            <div class="mt-4 flex items-center justify-center">
              <img
                :src="itemUrl"
                :alt="slotName + ' ' + item.name"
                :title="attributes"
              />
            </div>
          </div>
        </div>

        <div>
          <template v-if="itemHasGems">
            <small class="text-gray-400">{{ gemOrJewel }}:</small>
            <div class="mt-2 flex items-center justify-center">
              <div
                v-for="(gem, index) in item.gems"
                :key="'gem-' + index"
                class="mx-1"
              >
                <ItemDetailGem :gem="gem" />
              </div>
            </div>
          </template>
        </div>
      </template>
      <div v-else>
        <p class="text-xl text-zinc-500">{{ slotName }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import ItemDetailGem from "./ItemDetailGem.vue";
import type { DetailedHeroItems } from "@/modules/diablo3/interfaces/DetailedHeroItems";

const props = defineProps<{
  item: DetailedHeroItems;
}>();

const itemUrl = computed(() => {
  const host = "http://media.blizzard.com/d3/icons/items/large/";
  return `${host}${props.item.icon}.png`;
});

const slotName = computed(() => {
  const slotName = props.item.slots.split(/(?=[A-Z])/).join(" ");
  return slotName[0].toUpperCase() + slotName.slice(1);
});

const itemClassColor = computed(() => {
  if (Object.prototype.hasOwnProperty.call(props.item, "displayColor")) {
    return `item-${props.item.displayColor}`;
  }
  return "item-none";
});

const attributes = computed(() => {
  let attributesText = "";
  if (props.item.attributes) {
    attributesText += "Primary Attributes:\n";
    props.item.attributes.primary?.map((attribute) => {
      attributesText += `${attribute}\n`;
    });
    attributesText += "\nSecondary Attributes:\n";
    props.item.attributes.secondary?.map((attribute) => {
      attributesText += `${attribute}\n`;
    });
  }
  return attributesText;
});

const itemHasGems = computed(() =>
  Object.prototype.hasOwnProperty.call(props.item, "gems")
);

const gemOrJewel = computed(() => {
  if (props.item.gems) {
    return props.item.gems[0].isGem ? "Gems" : "Jewel";
  }
  return undefined;
});
</script>

<style scoped>
.d3-icon-item {
  min-height: 100px;
  border-top-style: solid;
  border-top-width: 4px;
}
.d3-icon-item.item-none {
  border-color: transparent;
}
.d3-icon-item.item-green {
  border-color: #8bc34a;
}
.d3-icon-item.item-orange {
  border-color: #ff9800;
}
.d3-icon-item.item-yellow {
  border-color: #ffeb3b;
}
.d3-icon-item.item-blue {
  border-color: #03a9f4;
}
.d3-icon-item.item-white {
  border-color: #a0aab5;
}
</style>
