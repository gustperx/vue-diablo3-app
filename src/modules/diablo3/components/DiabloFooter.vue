<template>
  <footer class="mt-5">
    <div class="flex flex-col items-center justify-center">
      components powerd by
    </div>

    <hr class="my-8" />

    <div class="flex flex-col items-center justify-between md:flex-row">
      <div class="mb-5">
        <DiabloFooterLinks />
      </div>
      <div class="">Made By</div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import DiabloFooterLinks from "./DiabloFooterLinks.vue";
</script>
