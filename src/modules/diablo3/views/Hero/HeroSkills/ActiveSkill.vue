<template>
  <div class="mb-3 flex items-center">
    <div class="mr-2">
      <span class="slot" :class="slotClass" />
      <img :src="mediaSkill(skill.icon)" :alt="skill.name" class="-mt-6" />
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
import { computed } from "vue";
import { useMedia } from "@/modules/diablo3/composables/useMedia";
import type { Rune, Skill } from "@/modules/diablo3/interfaces/HeroDiablo";

const props = defineProps<{
  skill: Skill;
  rune: Rune;
  slotNum: string | number;
}>();

const { mediaSkill } = useMedia();
const slotClass = computed(() => `slot-${props.slotNum}`);
</script>

<style scoped>
.active-skills .skills .slot {
  display: block;
  width: 22px;
  height: 22px;
  background: url("https://res.cloudinary.com/dpfdgvz5b/image/upload/v1644710868/diablo3/igb6nodrrzvygwpbrfml.png")
    0 0;
  position: relative;
  top: -10px;
  left: -10px;
}
.active-skills .skills .slot.slot-1 {
  background-position: 0 -1px;
}
.active-skills .skills .slot.slot-2 {
  background-position: -21px -1px;
}
.active-skills .skills .slot.slot-3 {
  background-position: 0 -23px;
}
.active-skills .skills .slot.slot-4 {
  background-position: -23px -23px;
}
.active-skills .skills .slot.slot-5 {
  background-position: 0 -46px;
}
.active-skills .skills .slot.slot-6 {
  background-position: -23px -46px;
}
</style>
