import type { ProfileAccount } from "./profileAccount";

export interface profileAccountParams {
  region: string;
  account: string;
}

export interface profileAccountStore {
  isLoading: boolean;
  profile?: ProfileAccount;
}
