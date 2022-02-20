export interface HeroDiablo {
  id: number;
  name: string;
  class: string;
  gender: number;
  level: number;
  paragonLevel: number;
  kills: Kills;
  hardcore: boolean;
  seasonal: boolean;
  seasonCreated: number;
  skills: Skills;
  items: { [key: string]: Item };
  followers: Followers;
  legendaryPowers: any[];
  progression: Progression;
  alive: boolean;
  lastUpdated: number;
  highestSoloRiftCompleted: number;
  stats: { [key: string]: number };
}

export interface Followers {
  templar: Templar;
  scoundrel: Scoundrel;
  enchantress: Enchantress;
}

export interface Enchantress {
  slug: string;
  level: number;
  items: { [key: string]: Item };
  stats: Stats;
  skills: Skill[];
}

export interface Item {
  id: string;
  name: string;
  icon: string;
  displayColor?: DisplayColor;
  tooltipParams: string;
  dyeColor?: Item;
}

export enum DisplayColor {
  Blue = "blue",
  Orange = "orange",
  Yellow = "yellow",
}

export interface Skill {
  slug: string;
  name: string;
  icon: string;
  level: number;
  tooltipUrl: string;
  description: string;
  descriptionHtml: string;
  flavorText?: string;
}

export interface Stats {
  goldFind: number;
  magicFind: number;
  experienceBonus: number;
}

export interface Scoundrel {
  slug: string;
  level: number;
  items: ScoundrelItems;
  stats: Stats;
  skills: any[];
}

export interface ScoundrelItems {
  mainHand: Item;
}

export interface Templar {
  slug: string;
  level: number;
  items: TemplarItems;
  stats: Stats;
  skills: Skill[];
}

export interface TemplarItems {
  neck: Item;
  leftFinger: Item;
  rightFinger: Item;
  mainHand: Item;
  offHand: Item;
  special: Item;
}

export interface Kills {
  elites: number;
}

export interface Progression {
  act1: Act;
  act2: Act;
  act3: Act;
  act4: Act;
  act5: Act;
}

export interface Act {
  completed: boolean;
  completedQuests: CompletedQuest[];
}

export interface CompletedQuest {
  slug: string;
  name: string;
}

export interface Skills {
  active: Active[];
  passive: Passive[];
}

export interface Active {
  skill: Skill;
  rune: Rune;
}

export interface Rune {
  slug: string;
  type: string;
  name: string;
  level: number;
  description: string;
  descriptionHtml: string;
}

export interface Passive {
  skill: Skill;
}

export interface HeroAttribute {
  name: string;
  value: number;
}

export interface HeroResourse<T> {
  [id: string]: T;
}

export interface HeroAttributes {
  [key: string]: number;
}
