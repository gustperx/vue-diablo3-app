<template>
  <section class="hero-items mb-5">
    <h2 class="font-diablo mb-2 text-2xl">Items</h2>

    <hr class="bg-white" />

    <div class="mx-2flex flex-col">
      <div class="my-4 grid grid-cols-3 gap-4">
        <div></div>
        <div>
          <ItemDetail :item="items.head" v-if="items.head" />
          <ItemDetailEmpty v-else item="head" />
        </div>
        <div></div>
      </div>

      <hr />

      <div class="my-4 grid grid-cols-3 gap-4">
        <div>
          <ItemDetail :item="items.shoulders" v-if="items.shoulders" />
          <ItemDetailEmpty v-else item="shoulders" />
        </div>
        <div>
          <ItemDetail :item="items.torso" v-if="items.torso" />
          <ItemDetailEmpty v-else item="torso" />
        </div>
        <div>
          <ItemDetail :item="items.neck" v-if="items.neck" />
          <ItemDetailEmpty v-else item="neck" />
        </div>
      </div>

      <hr />

      <div class="my-4 grid grid-cols-3 gap-4">
        <div>
          <ItemDetail :item="items.hands" v-if="items.hands" />
          <ItemDetailEmpty v-else item="hands" />
        </div>
        <div>
          <ItemDetail :item="items.waist" v-if="items.waist" />
          <ItemDetailEmpty v-else item="waist" />
        </div>
        <div>
          <ItemDetail :item="items.bracers" v-if="items.bracers" />
          <ItemDetailEmpty v-else item="bracers" />
        </div>
      </div>

      <hr />

      <div class="my-4 grid grid-cols-3 gap-4">
        <div>
          <ItemDetail :item="items.leftFinger" v-if="items.leftFinger" />
          <ItemDetailEmpty v-else item="leftFinger" />
        </div>
        <div>
          <ItemDetail :item="items.legs" v-if="items.legs" />
          <ItemDetailEmpty v-else item="legs" />
        </div>
        <div>
          <ItemDetail :item="items.rightFinger" v-if="items.rightFinger" />
          <ItemDetailEmpty v-else item="rightFinger" />
        </div>
      </div>

      <hr />

      <div class="my-4 grid grid-cols-3 gap-4">
        <div>
          <ItemDetail :item="items.mainHand" v-if="items.mainHand" />
          <ItemDetailEmpty v-else item="mainHand" />
        </div>
        <div>
          <ItemDetail :item="items.feet" v-if="items.feet" />
          <ItemDetailEmpty v-else item="feet" />
        </div>
        <div>
          <ItemDetail :item="items.offHand" v-if="items.offHand" />
          <ItemDetailEmpty v-else item="offHand" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import ItemDetail from "./ItemDetail.vue";
import type { HeroItems } from "@/modules/diablo3/interfaces/DetailedHeroItems";
import ItemDetailEmpty from "./ItemDetailEmpty.vue";

defineProps<{
  items: HeroItems;
}>();
</script>
