import type { ProfileAccount } from "./profileAccount";

export interface profileAccountState {
  isLoading: boolean;
  profile?: ProfileAccount;
}

export interface userParamsProfileAccount {
  battleTag: string;
  region: string;
  heroId?: string;
}
