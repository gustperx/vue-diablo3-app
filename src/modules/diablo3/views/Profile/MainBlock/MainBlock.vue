<template>
  <div class="flex flex-col md:flex-row">
    <div class="basis-4/6">
      Derecha
      <div class="hero-demon-hunter female"></div>
    </div>
    <div class="basis-2/6">Izquierda</div>
  </div>
</template>

<script lang="ts" setup>
import type { ProfileAccount } from "@/modules/diablo3/interfaces/profileAccount";

defineProps<{
  profile: ProfileAccount;
}>();
</script>
