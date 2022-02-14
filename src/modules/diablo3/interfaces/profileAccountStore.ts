import type { ProfileAccount } from "./profileAccount";

export interface profileAccountStore {
  isLoading: boolean;
  profile?: ProfileAccount;
}
