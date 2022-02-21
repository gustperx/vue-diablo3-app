<template>
  <div class="error-page m-5 mx-6 mt-40">
    <div v-if="err">
      <!-- Si hay codigo de error -->
      <h1 class="my-5 text-2xl text-red-600">
        <span v-if="err.message">{{ err.message }}</span>
      </h1>

      <!-- Si hay parámetros de ruta -->
      <div v-if="err.userParams">
        <h2 class="my-4 text-lg font-semibold text-gray-400">Query Params:</h2>
        <ul class="list-unstyled">
          <li v-for="(val, key) in err.userParams" :key="key">
            👉 {{ key.toUpperCase() }}:
            <span class="text-md font-semibold text-orange-700">{{ val }}</span>
          </li>
        </ul>

        <div class="mb-40"></div>
      </div>
    </div>

    <!-- Si NO hay error -->
    <div v-else>
      <h1 class="my-5">Error Page</h1>
      <p class="lead">What are you doing here? 🤔</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useErrorStore } from "../../stores/errorStore";

const errorStore = useErrorStore();
const err = computed(() => errorStore.error);
</script>
