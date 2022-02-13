<template>
  <div class="text-center">
    <p class="text-lg font-medium">Powered by</p>

    <div class="mt-2 flex">
      <div>
        <a
          class="mx-2 inline-block"
          href="https://tailwindcss.com/"
          title="https://tailwindcss.com/"
          target="_blank"
        >
          <IconTailwind />
        </a>
      </div>
      <div v-for="(icon, idx) in icons" :key="idx">
        <a
          class="mx-2 inline-block"
          :href="icon.href"
          target="_blank"
          :title="icon.href"
        >
          <i :class="icon.classes" class="fa-lg" :style="{ color: icon.color }">
          </i>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { FontawesomeIconFooter } from "../interfaces/UI";
import IconTailwind from "@/components/icons/IconTailwind.vue";

defineProps<{
  icons: FontawesomeIconFooter[];
}>();
</script>
