<template>
  <div class="border border-gray-200 p-6">
    <div class="flex items-center">
      <div class="mx-4 block">
        <i :class="icoName" class="fa-2xl" :style="{ color: icoColor }"> </i>
      </div>
      <div>
        <h4 class="mb-0 text-xl font-bold text-gray-400">{{ info.value }}</h4>
        <span class="mb-0 text-sm font-normal text-gray-300">{{
          info.text
        }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface InfoData {
  value: number;
  text: string;
}

defineProps<{
  icoName: string;
  icoColor: string;
  info: InfoData;
}>();
</script>
