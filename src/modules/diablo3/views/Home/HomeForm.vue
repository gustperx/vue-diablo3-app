<template>
  <div class="my-6 w-full md:w-2/3">
    <div class="mx-3">
      <form action="" @submit.prevent="onSubmit">
        <div class="mb-4">
          <label
            for="email"
            class="mb-2 block text-sm font-medium text-gray-400"
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
          <label
            for="password"
            class="mb-2 block text-sm font-medium text-gray-400"
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
            :disabled="btnLock"
            type="submit"
            class="rounded-lg bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-600"
            :class="{ 'bg-blue-100 text-black hover:bg-blue-100': btnLock }"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { regions } from "@/helpers/regions";

const router = useRouter();

const form = reactive<{ battleTag: string; region: string }>({
  battleTag: "",
  region: "us",
});

const btnLock = ref(false);

const regionList = computed(() =>
  regions.map((region) => ({ value: region, text: region.toUpperCase() }))
);

const onSubmit = () => {
  btnLock.value = true;
  router.push({
    name: "diablo3-profile",
    params: {
      region: form.region,
      battleTag: form.battleTag.replace("#", "-"),
    },
  });
};
</script>
