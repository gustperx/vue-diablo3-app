export type BlizzardRegions = string[];
export type BlizzardLocales = {
  us: string;
  eu: string;
  kr: string;
  tw: string;
};

const regions: BlizzardRegions = ["us", "eu", "kr", "tw"];

const locales: BlizzardLocales = {
  us: "en_US",
  eu: "en_GB",
  kr: "ko_KR",
  tw: "zh_TW",
};

export { regions, locales };
