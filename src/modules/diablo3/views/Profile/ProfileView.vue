<template>
  <div class="vld-parent mt-8 flex flex-col items-center justify-center">
    <TheLoader :isLoading="isLoading" color="red" message="Loading Profile" />

    <div v-if="!isLoading">
      <code>
        {{ profile }}
      </code>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TheLoader from "@/components/TheLoader.vue";
import { useProfile } from "../../composables/useProfile";

const props = defineProps<{
  battleTag: string;
  region: string;
}>();

const { isLoading, profile } = useProfile({
  battleTag: props.battleTag,
  region: props.region,
});
</script>
