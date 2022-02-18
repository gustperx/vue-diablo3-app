<template>
  <div class="artisan-item mx-2 mb-2 flex items-center rounded bg-zinc-700 p-3">
    <div class="icon mr-2 flex items-center justify-center rounded-full">
      <i :class="artisan.icon" class="fa-2xl" :style="{ color: artisan.color }">
      </i>
    </div>

    <!-- Bloque Contenido -->
    <div>
      <h5 class="font-bold capitalize">{{ artisan.name }}</h5>

      <!-- Si hay artesano normal -->
      <p v-if="artisan.normal?.level" class="m-0 font-normal">
        Level {{ artisan.normal.level }} (normal)
      </p>

      <!-- Si hay artesano hardcore -->
      <p v-if="artisan.hardcore?.level" class="mb-0 font-normal">
        Level {{ artisan.hardcore.level }}
        <span class="text-red-900">(hardcore)</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Artisan } from "../../../interfaces/profileAccount";

defineProps<{
  artisan: Artisan;
}>();
</script>

<style scoped>
.artisan-item .icon {
  width: 80px;
  height: 80px;
  background-color: #404850;
}
</style>
