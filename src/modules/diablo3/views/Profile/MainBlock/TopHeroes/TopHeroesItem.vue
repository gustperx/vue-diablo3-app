<template>
  <div
    class="mb-4 flex cursor-pointer flex-col items-center justify-between"
    @click="goToHero"
  >
    <!-- Avatar -->
    <div :class="heroClass"></div>

    <div class="w-[8.5rem] bg-gray-800 p-2">
      <!-- Nombre héroe -->
      <!-- Si es hardcore, pintamos el fondo rojo -->
      <div
        class="font-diablo text-bone flex items-center justify-around font-bold"
        :class="hardcoreBgColor"
      >
        {{ heroName }}
        <!-- Si es condicional, pintamos la hoja verde -->
        <img
          v-if="heroe.seasonal"
          :src="mediaCloudinary('v1644710868/diablo3/xj12ru7yh3s3hxbas8kd.png')"
          class="h-4"
        />
      </div>
      <hr class="my-2" />
      <div class="mt-2 flex items-center justify-between text-gray-300">
        <small class="elite-kills">
          <!-- Jefes (Élites) asesinados -->
          <span class="text-mono">{{ formatNumber(heroe.kills.elites) }}</span>
          Elite kills
        </small>
        <!-- Nivel. De color rojo si el héroe está muerto -->
        <small class="level-circle" :class="heroColorDead">
          {{ heroe.level }}
        </small>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useHero } from "@/modules/diablo3/composables/useHero";
import { useMedia } from "@/modules/diablo3/composables/useMedia";
import { useNumeral } from "@/modules/diablo3/composables/useNumeral";
import type { Hero } from "@/modules/diablo3/interfaces/ProfileAccount";

const props = defineProps<{
  heroe: Hero;
}>();

const { heroClass, heroName, hardcoreBgColor, heroColorDead, goToHero } =
  useHero({
    ...props.heroe,
  });

const { formatNumber } = useNumeral();
const { mediaCloudinary } = useMedia();
</script>

<style scoped>
.level-circle {
  width: 26px;
  height: 26px;
  padding: 4px;
  font-weight: bold;
  text-align: center;
  border-radius: 13px;
  background-color: #15202b;
  box-shadow: 0 0 0 2px #6c757d;
}
</style>
