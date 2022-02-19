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
  dye?: Dye;
  craftedBy?: CraftedBy;
  damage?: string;
  dps?: string;
  flavorText?: string;
  elementalType?: string;
  blockChance?: string;
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
  Orange = "orange",
  Yellow = "yellow",
}

export interface Dye {
  id: string;
  name: string;
  icon: string;
  tooltipParams: string;
}

export interface Type {
  twoHanded: boolean;
  id: string;
}
