import { computed } from "vue";
import type { Hero } from "../interfaces/profileAccount";

const useHero = (heroe: Hero) => {
  const gender = computed(() => (heroe.gender === 0 ? "male" : "female"));
  const hardcoreBoderColor = computed(() =>
    heroe.hardcore ? "border-red-700" : ""
  );
  const hardcoreBgColor = computed(() => (heroe.hardcore ? "bg-red-700" : ""));
  return {
    gender,
    hardcoreBgColor,
    heroName: computed(() =>
      heroe.name.length > 7 ? heroe.name.slice(0, 7) + "..." : heroe.name
    ),
    heroClass: computed(() => `hero-${heroe.classSlug} ${gender.value}`),
    heroClassImg: computed(
      () =>
        `hero-${heroe.classSlug} ${gender.value} ${hardcoreBoderColor.value}`
    ),
    heroColorDead: computed(() => (heroe.dead ? "text-red-700" : "")),

    // method - demon-hunter -> Demon Hunter
    classToName: (classSlug: string) => {
      const name = classSlug.replace("-", " ");
      const arr = name.split(" ");
      for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      }
      return arr.join(" ");
    },
  };
};

export { useHero };
