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
import { RouterView, useRouter } from "vue-router";

import TheLoader from "@/components/TheLoader.vue";
import DiabloHeader from "../components/DiabloHeader.vue";
import DiabloFooter from "../components/DiabloFooter.vue";

import { useOauthStore } from "../stores/oAuthStore";
import { useErrorStore } from "../stores/errorStore";
import type { ErrorGlobal } from "../interfaces/ErrorStore";

const router = useRouter();
const oAuthStore = useOauthStore();
const errorStore = useErrorStore();
const isLoading = computed(() => oAuthStore.isLoading);

oAuthStore.getToken().catch((err) => {
  const errObj: ErrorGlobal = {
    message: err.message,
  };
  errorStore.error = errObj;
  router.push({ name: "diablo3-error" });
});
</script>
