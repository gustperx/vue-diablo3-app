<template>
  <h1>Error Base</h1>
  <h3 class="text-red-400">{{ err }}</h3>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useErrorStore } from "../../stores/errorStore";

const errorStore = useErrorStore();
const err = computed(() => errorStore.error);
</script>
