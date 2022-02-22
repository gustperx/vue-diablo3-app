export interface ProfileAccount {
  battleTag: string;
  paragonLevel: number;
  paragonLevelHardcore: number;
  paragonLevelSeason: number;
  paragonLevelSeasonHardcore: number;
  guildName: string;
  heroes: Hero[];
  lastHeroPlayed: number;
  lastUpdated: number;
  kills: ProfileAccountKills;
  highestHardcoreLevel: number;
  timePlayed: TimePlayed;
  progression: Progression;
  seasonalProfiles: SeasonalProfiles;
  blacksmithSeason: Blacksmith;
  jewelerSeason: Blacksmith;
  mysticSeason: Blacksmith;
  blacksmithHardcore: Blacksmith;
  jewelerHardcore: Blacksmith;
  mysticHardcore: Blacksmith;
  blacksmithSeasonHardcore: Blacksmith;
  jewelerSeasonHardcore: Blacksmith;
  mysticSeasonHardcore: Blacksmith;
  blacksmith: Blacksmith;
  jeweler: Blacksmith;
  mystic: Blacksmith;
}

export interface Blacksmith {
  slug: Slug;
  level: number;
}

export enum Slug {
  Blacksmith = "blacksmith",
  Jeweler = "jeweler",
  Mystic = "mystic",
}

export interface Hero {
  id: number;
  name: string;
  class: string;
  classSlug: string;
  gender: number;
  level: number;
  kills: HeroKills;
  paragonLevel: number;
  hardcore: boolean;
  seasonal: boolean;
  dead: boolean;
  "last-updated": number;
}

export interface HeroKills {
  elites: number;
}

export interface ProfileAccountKills {
  monsters: number;
  elites: number;
  hardcoreMonsters: number;
}

export interface Progression {
  act1: boolean;
  act3: boolean;
  act2: boolean;
  act5: boolean;
  act4: boolean;
}

export interface SeasonalProfiles {
  season19: Season;
  season0: Season;
}

export interface Season {
  seasonId: number;
  paragonLevel: number;
  paragonLevelHardcore: number;
  kills: ProfileAccountKills;
  timePlayed: TimePlayed;
  highestHardcoreLevel: number;
}

export interface TimePlayed {
  "demon-hunter": number;
  barbarian: number;
  "witch-doctor": number;
  necromancer: number;
  wizard: number;
  monk: number;
  crusader: number;
}

export interface Artisans {
  blacksmith?: Blacksmith;
  blacksmithHardcore?: Blacksmith;
  jeweler?: Blacksmith;
  jewelerHardcore?: Blacksmith;
  mystic?: Blacksmith;
  mysticHardcore?: Blacksmith;
}

export interface Artisan {
  name: string;
  icon: string;
  color: string;
  normal?: Blacksmith;
  hardcore?: Blacksmith;
}

export interface TimePlayedGeneric {
  [key: string]: number;
}
