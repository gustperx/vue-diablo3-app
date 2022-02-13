<template>
  <footer class="mt-4">
    <div class="flex flex-col items-center justify-center">
      <DiabloFooterPoweredBy :icons="icons" />
    </div>

    <hr class="my-4" />

    <div class="flex flex-col items-center justify-between md:flex-row">
      <div class="mt-3 mb-4">
        <DiabloFooterLinks />
      </div>
      <div>
        <DiabloFooterMadeBy />
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import type { FontawesomeIconFooter } from "../interfaces/UI";
import DiabloFooterLinks from "./DiabloFooterLinks.vue";
import DiabloFooterMadeBy from "./DiabloFooterMadeBy.vue";
import DiabloFooterPoweredBy from "./DiabloFooterPoweredBy.vue";

const icons: FontawesomeIconFooter[] = [
  {
    classes: ["fa-brands", "fa-vuejs"],
    color: "#4fc08d",
    href: "https://vuejs.org/",
  },
  {
    classes: ["fa-brands", "fa-battle-net"],
    color: "#0e95ff",
    href: "https://develop.battle.net/documentation/diablo-3/community-apis",
  },
  {
    classes: ["fa-brands", "fa-github"],
    color: "#e4e4e4",
    href: "https://github.com/gustperx",
  },
  {
    classes: ["fa-brands", "fa-font-awesome"],
    color: "#0e95ff",
    href: "https://fontawesome.com/",
  },
];
</script>
