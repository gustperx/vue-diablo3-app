<template>
  <div class="skills-wrapper mt-5">
    <h2 class="font-diablo text-2xl">Skills</h2>
    <hr class="bg-white" />

    <!-- <b-nav pills small>
      <b-nav-item :active="!isPassiveSkillsActive" @click="changeComponent('ActiveSkills')">Active</b-nav-item>
      <b-nav-item :active="isPassiveSkillsActive" @click="changeComponent('PassiveSkills')">Passive</b-nav-item>
    </b-nav>

    <keep-alive>
      <component :is="activeComponent" :skills="componentProps"/>
    </keep-alive> -->

    <ActiveSkills :skills="skills.active" />
    <PassiveSkills :skills="skills.passive" />
  </div>
</template>

<script lang="ts" setup>
import ActiveSkills from "./ActiveSkills.vue";
import PassiveSkills from "./PassiveSkills.vue";
import type { Skills } from "@/modules/diablo3/interfaces/HeroDiablo";

defineProps<{
  skills: Skills;
}>();
</script>
