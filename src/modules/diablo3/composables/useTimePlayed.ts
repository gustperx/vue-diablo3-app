import { computed } from "vue";
import { HeroData } from "../classes/HeroData";
import type { TimePlayed } from "../interfaces/profileAccount";

const useTimePlayed = (timePlayed: TimePlayed) => {
  const classToName = (classSlug: string) => {
    const name = classSlug.replace("-", " ");
    const arr = name.split(" ");
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(" ");
  };

  const timeProcess = (): HeroData[] => {
    return Object.keys(timePlayed)
      .sort()
      .map((hero) => {
        return new HeroData(classToName(hero), timePlayed[hero], hero);
      });
  };

  return {
    timeProcess: computed(() => timeProcess()),
  };
};

export { useTimePlayed };
