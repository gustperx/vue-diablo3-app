import { computed } from "vue";
import { useMedia } from "./useMedia";
import type { DetailedHeroItems } from "../interfaces/DetailedHeroItems";

const useItem = (item: DetailedHeroItems) => {
  const { mediaItem } = useMedia();

  return {
    itemClassColor: computed(() => {
      if (Object.prototype.hasOwnProperty.call(item, "displayColor")) {
        return `item-${item.displayColor}`;
      }
      return "item-none";
    }),
    itemUrl: computed(() => {
      return mediaItem(item.icon);
    }),
    slotName: computed(() => {
      const slotName = item.slots.split(/(?=[A-Z])/).join(" ");
      return slotName[0].toUpperCase() + slotName.slice(1);
    }),
    attributes: computed(() => {
      let attributesText = "";
      if (item.attributes) {
        attributesText += "Primary Attributes:\n";
        item.attributes.primary?.map((attribute) => {
          attributesText += `${attribute}\n`;
        });
        attributesText += "\nSecondary Attributes:\n";
        item.attributes.secondary?.map((attribute) => {
          attributesText += `${attribute}\n`;
        });
      }
      return attributesText;
    }),
    itemHasGems: computed(() =>
      Object.prototype.hasOwnProperty.call(item, "gems")
    ),
    gemOrJewel: computed(() => {
      if (item.gems) {
        return item.gems[0].isGem ? "Gems" : "Jewel";
      }
      return undefined;
    }),
  };
};

export { useItem };
