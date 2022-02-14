<template>
  <loading
    :active="isLoading"
    :loader="loader || 'spinner'"
    :color="color || '#075985'"
    :opacity="0"
    :height="100"
    :width="100"
    :can-cancel="false"
    :is-full-page="false"
  />

  <div
    v-if="isLoading"
    class="flex h-96 w-full flex-col items-center justify-start"
  >
    <div v-if="message" class="mt-12 text-center">
      <h3 class="text-2xl">{{ message }}</h3>
      <h4 class="mt-4 text-xl">Please wait</h4>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

interface Props {
  isLoading: boolean;
  loader?: string;
  color?: string;
  message?: string;
}

defineProps<Props>();
</script>
