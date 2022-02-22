<template>
  <nav class="bg-gray-900">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
            @click="openMenuMobile"
          >
            <span class="sr-only">Open main menu</span>
            <IconOpen v-if="isActiveMenuMobile" />
            <IconClose v-else />
          </button>
        </div>
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex flex-shrink-0 items-center">
            <TheLogo />
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <NavLink
                :key="headerLink.name"
                v-for="headerLink in headerLinks"
                :to="headerLink.to"
                :name="headerLink.name"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div v-if="isActiveMenuMobile" id="mobile-menu" class="sm:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <NavLinkResponsive
          :key="headerLink.name"
          v-for="headerLink in headerLinks"
          :to="headerLink.to"
          :name="headerLink.name"
        />
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { headerLinks } from "@/router/global-routes";
import IconClose from "./icons/IconClose.vue";
import IconOpen from "./icons/IconOpen.vue";
import NavLink from "./NavLink.vue";
import NavLinkResponsive from "./NavLinkResponsive.vue";
import TheLogo from "./TheLogo.vue";

const isActiveMenuMobile = ref(false);

const openMenuMobile = () => {
  isActiveMenuMobile.value = !isActiveMenuMobile.value;
};
</script>
