<template>
  <img
    class="block h-8 w-auto lg:hidden"
    :src="mediaCloudinary('v1644710868/diablo3/sljwip6lsi5le4da7fjm.svg')"
    alt="vue"
  />
  <img
    class="hidden h-8 w-auto lg:block"
    :src="mediaCloudinary('v1644710868/diablo3/sljwip6lsi5le4da7fjm.svg')"
    alt="vue"
  />
</template>

<script lang="ts" setup>
import { useMedia } from "@/modules/diablo3/composables/useMedia";

const { mediaCloudinary } = useMedia();
</script>
