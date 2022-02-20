<template>
  <div class="vld-parent hero-view mt-8 flex flex-col">
    <TheLoader
      :isLoading="isLoading"
      color="red"
      message="Loading Hero Profile"
    />

    <template v-if="hero && heroItems">
      <HeroDetailHeader :hero="hero" />

      <div class="flex flex-col-reverse md:flex-row">
        <div class="mx-6 mb-2 basis-4/12 md:mx-2">
          <HeroAttributes :stats="hero.stats" :classSlug="hero.class" />
          <HeroSkills :skills="hero.skills" />
        </div>
        <div class="mx-6 mb-2 basis-8/12">
          <HeroItems :items="heroItems" />
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import TheLoader from "@/components/TheLoader.vue";
import HeroDetailHeader from "./HeroDetailHeader.vue";
import HeroAttributes from "./HeroAttributes/HeroAttributes.vue";
import HeroSkills from "./HeroSkills/HeroSkills.vue";
import HeroItems from "./HeroItems/HeroItems.vue";
import { useHeroProfile } from "../../composables/useHeroProfile";

const props = defineProps<{
  heroId: string;
  battleTag: string;
  region: string;
}>();

const { isLoading, hero, heroItems } = useHeroProfile({ ...props });
</script>
