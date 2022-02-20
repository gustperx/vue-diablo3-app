import type { HeroItems } from "./DetailedHeroItems";
import type { HeroDiablo } from "./HeroDiablo";
import type { ProfileAccount } from "./ProfileAccount";

export interface ProfileState {
  isLoading: boolean;
  profile?: ProfileAccount;
  hero?: HeroDiablo;
  heroItems?: HeroItems;
}

export interface ProfileParameters {
  battleTag: string;
  region: string;
  heroId?: string;
}
