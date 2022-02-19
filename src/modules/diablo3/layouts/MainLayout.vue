<template>
  <div class="vld-parent bg-slate-900 text-neutral-100">
    <TheLoader :isLoading="isLoading" color="red" message="Loading" />

    <div v-if="!isLoading" class="mx-auto max-w-6xl py-6 sm:px-6 lg:px-8">
      <DiabloHeader />
      <RouterView />
      <DiabloFooter />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { RouterView } from "vue-router";

import TheLoader from "@/components/TheLoader.vue";

import { useOauthStore } from "../stores/oAuthStore";
import DiabloHeader from "../components/DiabloHeader.vue";
import DiabloFooter from "../components/DiabloFooter.vue";

const oAuthStore = useOauthStore();
const isLoading = computed(() => oAuthStore.isLoading);

oAuthStore.getToken();
</script>
