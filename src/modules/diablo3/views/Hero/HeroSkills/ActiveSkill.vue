<template>
  <div class="mb-3 flex items-center">
    <div class="mr-2">
      <!-- <span class="slot" :class="slotClass" /> -->
      <img :src="skillUrl" :alt="skill.name" />
    </div>

    <div>
      <p class="skill-name m-0" :title="skill.description">
        {{ skill.name }}
      </p>
      <small
        v-if="rune"
        class="rune-name text-gray-400"
        :title="rune.description"
      >
        {{ rune.name }}
      </small>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Rune, Skill } from "@/modules/diablo3/interfaces/HeroDiablo";
import { computed } from "vue";

const props = defineProps<{
  skill: Skill;
  rune: Rune;
  slotNum: string | number;
}>();

const skillUrl = computed(() => {
  const sizes = [21, 42, 64];
  const host = `http://media.blizzard.com/d3/icons/skills/${sizes[1]}/`;
  return `${host}${props.skill.icon}.png`;
});

/* const slotClass = computed(() => `slot-${props.slotNum}`); */
</script>

<style scoped>
/* .active-skills .skills .slot {
  display: block;
  width: 22px;
  height: 22px;
  background: url("https://res.cloudinary.com/dpfdgvz5b/image/upload/v1644710868/diablo3/igb6nodrrzvygwpbrfml.png")
    0 0;
  position: absolute;
  top: -5px;
  left: 5px;
}
.active-skills .skills .slot .slot-1 {
  background-position: 0 -1px;
}
.active-skills .skills .slot .slot-2 {
  background-position: -21px -1px;
}
.active-skills .skills .slot .slot-3 {
  background-position: 0 -23px;
}
.active-skills .skills .slot .slot-4 {
  background-position: -23px -23px;
}
.active-skills .skills .slot .slot-5 {
  background-position: 0 -46px;
}
.active-skills .skills .slot .slot-6 {
  background-position: -23px -46px;
} */
</style>
