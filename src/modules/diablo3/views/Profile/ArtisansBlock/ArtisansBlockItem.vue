<template>
  <div
    class="artisan-item mx-2 mb-2 flex items-center rounded bg-gray-800 p-3 md:w-64"
  >
    <div class="icon mr-2 flex items-center justify-center rounded-full">
      <i :class="artisan.icon" class="fa-2xl" :style="{ color: artisan.color }">
      </i>
    </div>

    <!-- Bloque Contenido -->
    <div>
      <h5 class="font-medium capitalize text-gray-400">{{ artisan.name }}</h5>

      <!-- Si hay artesano normal -->
      <p v-if="artisan.normal?.level" class="m-0 font-normal text-gray-400">
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
import type { Artisan } from "../../../interfaces/ProfileAccount";

defineProps<{
  artisan: Artisan;
}>();
</script>

<style scoped>
.artisan-item .icon {
  width: 80px;
  height: 80px;
  background-color: #3f3f46;
}
</style>
