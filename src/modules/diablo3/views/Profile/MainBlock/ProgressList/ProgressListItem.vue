<template>
  <div class="flex flex-col" :title="actTitle">
    <div class="boss-img py-2 px-8">
      <div class="act" :class="actClass"></div>
    </div>
    <p class="mb-3 block text-center text-sm font-bold">
      {{ fullActName }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  act: {
    actNum: string;
    value: boolean;
  };
}>();

const status = props.act.value ? "done" : "pending";
let act: string;

switch (props.act.actNum) {
  case "act1":
    act = "I";
    break;
  case "act2":
    act = "II";
    break;
  case "act3":
    act = "III";
    break;
  case "act4":
    act = "IV";
    break;
  case "act5":
    act = "V";
    break;
}

const fullActName = computed(() => `Act ${act}`);
const actClass = computed(() => `${props.act.actNum} ${status}`);
const actTitle = computed(() =>
  props.act.value ? "Act completed!" : "Act uncompleted"
);
</script>

<style scoped>
.boss-img {
  display: block;
}
.boss-img .act {
  margin: 0 auto;
  width: 50px;
  height: 55px;
}

.act {
  background-image: url("https://res.cloudinary.com/dpfdgvz5b/image/upload/v1644710870/diablo3/deuisns1bsk65lltmjkg.png");
  background-size: 500%;
}
.act.act1.pending {
  background-position: -1px 0;
}
.act.act1.done {
  background-position: -1px 57px;
}
.act.act2.pending {
  background-position: -51px 0;
}
.act.act2.done {
  background-position: -51px -56px;
}
.act.act3.pending {
  background-position: -101px 0px;
}
.act.act3.done {
  background-position: -101px -168px;
}
.act.act4.pending {
  background-position: -151px 0px;
}
.act.act4.done {
  background-position: -151px -168px;
}
.act.act5.pending {
  background-position: 50px 0;
}
.act.act5.done {
  background-position: 50px 57px;
}
</style>
