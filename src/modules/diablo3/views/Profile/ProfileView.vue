<template>
  <div class="vld-parent mt-8 flex flex-col items-center justify-center">
    <TheLoader :isLoading="isLoading" />

    <div v-if="!isLoading">
      <p>Profile Base</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useProfileAccountStore } from "../../stores/profileAccountStore";
import TheLoader from "../../../../components/TheLoader.vue";

interface Props {
  region: string;
  battleTag: string;
}

const props = defineProps<Props>();
const profileAccountStore = useProfileAccountStore();

const isLoading = computed(() => profileAccountStore.isLoading);

profileAccountStore.getProfile(props.region, props.battleTag);
</script>
