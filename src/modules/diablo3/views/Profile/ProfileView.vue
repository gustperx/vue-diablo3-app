<template>
  <!-- flex items-center justify-center -->
  <div class="vld-parent mt-8 flex flex-col">
    <TheLoader :isLoading="isLoading" color="red" message="Loading Profile" />

    <template v-if="profile">
      <MainBlock :profile="profile" />
      <ArtisansBlock :artisans="artisans" />
    </template>
  </div>
</template>

<script lang="ts" setup>
import TheLoader from "@/components/TheLoader.vue";
import MainBlock from "./MainBlock/MainBlock.vue";
import ArtisansBlock from "./ArtisansBlock/ArtisansBlock.vue";
import { useProfile } from "../../composables/useProfile";

const props = defineProps<{
  battleTag: string;
  region: string;
}>();

const { isLoading, profile, artisans } = useProfile({
  battleTag: props.battleTag,
  region: props.region,
});
</script>
