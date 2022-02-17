import { computed } from "vue";
import { textToCapitalize } from "@/helpers/basics";
import { HeroData } from "../classes/HeroData";
import type { TimePlayed } from "../interfaces/profileAccount";

const useTimePlayed = (timePlayed: TimePlayed) => {
  const timeProcess = (): HeroData[] => {
    return Object.keys(timePlayed)
      .sort()
      .map((hero) => {
        return new HeroData(
          textToCapitalize(hero, "-"),
          timePlayed[hero],
          hero
        );
      });
  };

  return {
    timeProcess: computed(() => timeProcess()),
  };
};

export { useTimePlayed };
