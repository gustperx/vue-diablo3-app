<template>
  <div class="active-skills">
    <h3 class="my-4 text-lg font-semibold text-gray-500">Active</h3>
    <div class="skills">
      <div class="flex flex-col">
        <div v-for="(skill, idx) in skills" :key="idx">
          <ActiveSkill
            :skill="skill.skill"
            :rune="skill.rune"
            :slot-num="idx + 1"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ActiveSkill from "./ActiveSkill.vue";
import type { Active } from "@/modules/diablo3/interfaces/HeroDiablo";

defineProps<{
  skills: Active[];
}>();
</script>
