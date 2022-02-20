export interface DetailedHeroItems {
  id: string;
  name: string;
  icon: string;
  displayColor: DisplayColor;
  tooltipParams: string;
  requiredLevel: number;
  itemLevel: number;
  stackSizeMax: number;
  accountBound: boolean;
  flavorText: string;
  typeName: string;
  type: Type;
  armor: number;
  attacksPerSecond: number;
  minDamage: number;
  maxDamage: number;
  slots: string;
  attributes: Attributes;
  attributesHtml: Attributes;
  openSockets: number;
  seasonRequiredToDrop: number;
  isSeasonRequiredToDrop: boolean;
  set?: Set;
  craftedBy?: CraftedBy;
  gems?: Gem[];
  damage?: string;
  dps?: string;
  elementalType?: string;
}

export interface Attributes {
  primary: string[];
  secondary: string[];
}

export interface CraftedBy {
  id: string;
  slug: string;
  name: string;
  cost: number;
  reagents: Reagent[];
  itemProduced: ItemProduced;
}

export interface ItemProduced {
  id: string;
  path: string;
}

export interface Reagent {
  quantity: number;
  item: Item;
}

export interface Item {
  id: string;
  slug: string;
  name: string;
  icon: string;
  path: string;
}

export enum DisplayColor {
  Green = "green",
  Orange = "orange",
  Yellow = "yellow",
}

export interface Gem {
  item: Item;
  attributes: string[];
  isGem: boolean;
  isJewel: boolean;
  jewelRank?: number;
  jewelSecondaryUnlockRank?: number;
}

export interface Set {
  name: string;
  slug: string;
  description: string;
  descriptionHtml: string;
}

export interface Type {
  twoHanded: boolean;
  id: string;
}

export interface HeroItems {
  [key: string]: DetailedHeroItems;
}
