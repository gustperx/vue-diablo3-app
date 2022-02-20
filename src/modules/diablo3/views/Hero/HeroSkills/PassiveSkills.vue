<template>
  <div class="passive-skills">
    <h3 class="my-4 text-lg font-semibold text-gray-500">Passive</h3>
    <div class="skills">
      <div class="flex flex-col">
        <div v-for="(skill, idx) in skills" :key="idx">
          <PassiveSkill :skill="skill.skill" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import PassiveSkill from "./PassiveSkill.vue";
import type { Passive } from "@/modules/diablo3/interfaces/HeroDiablo";

defineProps<{
  skills: Passive[];
}>();
</script>
