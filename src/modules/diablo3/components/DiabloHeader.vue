<template>
  <nav class="bg-zinc-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between"
        >
          <div class="flex flex-shrink-0 items-center">
            <img
              :src="
                mediaCloudinary('v1644710868/diablo3/sljwip6lsi5le4da7fjm.svg')
              "
              class="h-8 w-8"
              alt="D3"
            />
            <span class="font-diablo text-bone ml-2">D3PF</span>
          </div>
          <div class="hidden md:block">
            <span class="font-diablo text-bone mr-2">25</span>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { useMedia } from "@/modules/diablo3/composables/useMedia";

const { mediaCloudinary } = useMedia();
</script>
