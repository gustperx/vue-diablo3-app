<template>
  <loading
    :active="isLoading"
    :loader="loader || 'spinner'"
    :color="color || '#075985'"
    :opacity="0"
    :height="128"
    :width="128"
    :can-cancel="false"
    :is-full-page="false"
  />

  <div
    v-if="isLoading"
    class="flex h-96 w-full flex-col items-center justify-start"
  ></div>
</template>

<script lang="ts" setup>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

interface Props {
  isLoading: boolean;
  loader?: string;
  color?: string;
}

defineProps<Props>();
</script>
