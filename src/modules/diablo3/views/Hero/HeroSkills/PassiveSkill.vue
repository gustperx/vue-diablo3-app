<template>
  <div class="mb-3 flex items-center">
    <div class="mr-2">
      <img :src="mediaSkill(skill.icon)" :alt="skill.name" />
    </div>

    <div>
      <p class="skill-name m-0" :title="skill.description">
        {{ skill.name }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMedia } from "@/modules/diablo3/composables/useMedia";
import type { Skill } from "@/modules/diablo3/interfaces/HeroDiablo";

defineProps<{
  skill: Skill;
}>();

const { mediaSkill } = useMedia();
</script>
