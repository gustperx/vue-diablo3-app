<template>
  <h1>Hero Base</h1>
</template>

<script lang="ts" setup>
defineProps<{
  heroId: string;
  battleTag: string;
  region: string;
}>();
</script>
