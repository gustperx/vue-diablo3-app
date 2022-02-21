<template>
  <div class="skills-wrapper mt-5">
    <h2 class="mb-2 font-diablo text-2xl text-bone">Skills</h2>
    <hr class="bg-white" />

    <button
      class="mr-2 mt-4 w-20 rounded-md bg-gray-700 py-1 text-sm font-medium"
      :class="{ 'bg-orange-800': activeComponent }"
      :active="activeComponent"
      @click="changeComponent"
    >
      Active
    </button>
    <button
      class="mt-4 w-20 rounded-md bg-gray-700 py-1 text-sm font-medium"
      :class="{ 'bg-orange-800': !activeComponent }"
      :active="!activeComponent"
      @click="changeComponent"
    >
      Passive
    </button>

    <keep-alive>
      <ActiveSkills :skills="skills.active" v-if="activeComponent" />
      <PassiveSkills :skills="skills.passive" v-else />
    </keep-alive>
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, ref } from "vue";
import type { Skills } from "@/modules/diablo3/interfaces/HeroDiablo";

const ActiveSkills = defineAsyncComponent(() => import("./ActiveSkills.vue"));
const PassiveSkills = defineAsyncComponent(() => import("./PassiveSkills.vue"));

defineProps<{
  skills: Skills;
}>();

const activeComponent = ref(true);

const changeComponent = () => {
  activeComponent.value = !activeComponent.value;
};
</script>
