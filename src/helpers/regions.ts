export type BlizzardRegions = string[];

export interface BlizzardLocales<T> {
  [id: string]: T;
}

const regions: BlizzardRegions = ["us", "eu", "kr", "tw"];

const locales: BlizzardLocales<string> = {
  us: "en_US",
  eu: "en_GB",
  kr: "ko_KR",
  tw: "zh_TW",
};

export { regions, locales };
