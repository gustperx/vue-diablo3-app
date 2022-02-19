import type { DetailedHeroItems } from "./DetailedHeroItems";
import type { HeroDiablo } from "./HeroDiablo";
import type { ProfileAccount } from "./profileAccount";

export interface profileAccountState {
  isLoading: boolean;
  profile?: ProfileAccount;
  hero?: HeroDiablo;
  heroItems?: DetailedHeroItems;
}

export interface userParamsProfileAccount {
  battleTag: string;
  region: string;
  heroId?: string;
}
