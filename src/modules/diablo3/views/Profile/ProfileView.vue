<template>
  <div class="mt-8 flex flex-col items-center justify-center">
    <h1>Profile Base</h1>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { useProfileAccountStore } from "../../stores/profileAccount";

interface Props {
  region: string;
  battleTag: string;
}

const props = defineProps<Props>();
const profileAccountStore = useProfileAccountStore();

onMounted(() => profileAccountStore.getProfile(props.region, props.battleTag));
</script>
