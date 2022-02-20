<template>
  <div class="mb-3 flex items-center">
    <div class="mr-2">
      <img :src="skillUrl" :alt="skill.name" />
    </div>

    <div>
      <p class="skill-name m-0" :title="skill.description">
        {{ skill.name }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Skill } from "@/modules/diablo3/interfaces/HeroDiablo";
import { computed } from "vue";

const props = defineProps<{
  skill: Skill;
}>();

const skillUrl = computed(() => {
  const sizes = {
    21: 21,
    42: 42,
    64: 64,
  };
  const host = `http://media.blizzard.com/d3/icons/skills/${sizes[42]}/`;
  return `${host}${props.skill.icon}.png`;
});
</script>
