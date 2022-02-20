<template>
  <div class="d3-icon-item h-28 bg-gray-800 pt-3">
    <div class="flex flex-col items-center justify-center">
      <div class="mt-6 font-mono text-sm text-red-600">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  item: string;
}>();
</script>

<style scoped>
.d3-icon-item {
  min-height: 100px;
  border-top-style: solid;
  border-top-width: 4px;
}
.d3-icon-item.item-white {
  border-color: #a0aab5;
}
</style>
