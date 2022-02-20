import type {
  HeroAttribute,
  HeroAttributes,
  HeroResourse,
} from "@/modules/diablo3/interfaces/HeroDiablo";

const useAttribute = () => {
  // attributes
  const coreAttr: string[] = [
    "strength",
    "dexterity",
    "vitality",
    "intelligence",
  ];
  const secondaryAttr: string[] = ["damage", "toughness", "healing"];
  const resourcesAttr: string[] = [
    "life",
    "primaryResource",
    "secondaryResource",
  ];

  // resources
  const names = {
    BARBARIAN: "barbarian",
    CRUSADER: "crusader",
    MONK: "monk",
    WIZARD: "wizard",
    WITCHDOCTOR: "witch-doctor",
    NECROMANCER: "necromancer",
    DEMONHUNTER: "demon-hunter",
  };

  const resourceClassNameObj = {
    [names.BARBARIAN]: "fury",
    [names.CRUSADER]: "wrath",
    [names.MONK]: "spirit",
    [names.WIZARD]: "arcane-power",
    [names.WITCHDOCTOR]: "mana",
    [names.NECROMANCER]: "essence",
    [names.DEMONHUNTER]: "hatred-discipline",
  };

  const resourceDisplayNameObj = {
    [names.BARBARIAN]: "Fury",
    [names.CRUSADER]: "Wrath",
    [names.MONK]: "Spirit",
    [names.WIZARD]: "Arcane Power",
    [names.WITCHDOCTOR]: "Mana",
    [names.NECROMANCER]: "Essence",
    [names.DEMONHUNTER]: "Hatred / Discipline",
  };

  const resourceClassName = (classSlug: string) => {
    return resourceClassNameObj[classSlug];
  };
  const resourceDisplayName = (classSlug: string): string => {
    return resourceDisplayNameObj[classSlug];
  };

  return {
    // Attributes
    coreAttributes: (stats: HeroAttributes): HeroAttribute[] => {
      return coreAttr.map<HeroAttribute>((item) => ({
        name: item,
        value: stats[item],
      }));
    },
    secondaryAttributes: (stats: HeroAttributes): HeroAttribute[] => {
      return secondaryAttr.map<HeroAttribute>((item) => ({
        name: item,
        value: stats[item],
      }));
    },
    resources: (stats: HeroAttributes): HeroResourse<HeroAttribute> => {
      const resources: HeroResourse<HeroAttribute> = {};
      resourcesAttr.forEach((item) => {
        resources[item] = { name: item, value: stats[item] };
      });
      return resources;
    },

    // recources
    classResourceName: (classSlug: string): string => {
      return `resource-${resourceClassName(classSlug)}`;
    },
    displayResourceName: (classSlug: string): string => {
      return resourceDisplayName(classSlug);
    },
    hasSecondaryResource: (classSlug: string): boolean => {
      return classSlug === "demon-hunter";
    },
  };
};

export { useAttribute };
