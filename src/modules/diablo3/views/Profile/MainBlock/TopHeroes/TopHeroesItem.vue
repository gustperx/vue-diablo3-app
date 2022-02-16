<template>
  <div class="hero-portrait-wrapper mb-5">
    <!-- Avatar -->
    <div class="flex justify-center">
      <!-- Imagen de fondo, según la clase y el género -->
      <div :class="heroClass"></div>
    </div>
    <div class="bg-zinc-700 p-1">
      <!-- Nombre héroe -->
      <!-- Si es hardcore, pintamos el fondo rojo -->
      <div
        class="title-name flex items-center justify-around truncate font-diablo"
        :class="hardcoreBgColor"
      >
        {{ heroName }}
        <!-- Si es condicional, pintamos la hoja verde -->
        <img
          v-if="heroe.seasonal"
          src="https://res.cloudinary.com/dpfdgvz5b/image/upload/v1644710868/diablo3/xj12ru7yh3s3hxbas8kd.png"
          class="h-4"
        />
      </div>
      <hr class="my-2" />
      <div class="mt-2 flex items-center justify-between">
        <small class="elite-kills">
          <!-- Jefes (Élites) asesinados -->
          <span class="text-mono">{{ heroe.kills.elites }}</span>
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
import type { Hero } from "@/modules/diablo3/interfaces/profileAccount";

const props = defineProps<{
  heroe: Hero;
}>();

const { heroClass, heroName, hardcoreBgColor, heroColorDead } = useHero({
  ...props.heroe,
});
</script>

<style scoped>
.hero-portrait-wrapper .title-name {
  color: #fff;
  font-weight: 900;
}
.hero-portrait-wrapper .level-circle {
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
