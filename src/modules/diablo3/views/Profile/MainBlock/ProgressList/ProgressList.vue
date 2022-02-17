<template>
  <div class="mt-4 pt-4 md:mt-8">
    <h2 class="mb-4 font-diablo text-2xl">Progression</h2>
    <div class="flex flex-col justify-around md:flex-row">
      <div v-for="(val, key) in actsOrden" :key="key">
        <div class="mb-2 rounded bg-gray-800">
          <ProgressListItem :act="{ actNum: key, value: val }" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import ProgressListItem from "./ProgressListItem.vue";
import type { Progression } from "@/modules/diablo3/interfaces/profileAccount";

const props = defineProps<{
  acts: Progression;
}>();

const actsOrden = reactive({
  act1: props.acts.act1,
  act2: props.acts.act2,
  act3: props.acts.act3,
  act4: props.acts.act4,
  act5: props.acts.act5,
});
</script>
