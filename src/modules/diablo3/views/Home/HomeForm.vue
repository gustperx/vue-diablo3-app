<template>
  <div class="my-6 w-full md:w-2/3">
    <div class="mx-3">
      <form action="" @submit.prevent="onSubmit">
        <div class="mb-4">
          <label for="email" class="mb-2 block text-sm font-medium"
            >BattleTag:</label
          >
          <input
            type="text"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
            placeholder="Format: YourProfile#1234"
            v-model="form.battleTag"
            required="true"
          />
        </div>
        <div class="mb-4">
          <label for="password" class="mb-2 block text-sm font-medium"
            >Region:</label
          >
          <select
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
            v-model="form.region"
            required="true"
          >
            <option
              v-for="region in regionList"
              :value="region.value"
              :key="region.value"
            >
              {{ region.text }}
            </option>
          </select>
        </div>
        <div class="flex justify-end">
          <button
            type="submit"
            class="rounded-lg bg-zinc-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-zinc-800 focus:ring-4 focus:ring-blue-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive } from "vue";
import { useRouter } from "vue-router";
import { regions } from "@/helpers/regions";

const router = useRouter();

const form = reactive<{ battleTag: string; region: string }>({
  battleTag: "",
  region: "us",
});

const regionList = computed(() =>
  regions.map((region) => ({ value: region, text: region.toUpperCase() }))
);

const onSubmit = () => {
  router.push({
    name: "diablo3-profile",
    params: {
      region: form.region,
      battleTag: form.battleTag.replace("#", "-"),
    },
  });
};
</script>
