import type { userParamsProfileAccount } from "./profileAccountStore";

export interface errorState {
  error: errorGlobal | null;
}

export interface errorGlobal {
  userParams: userParamsProfileAccount;
  message: string;
}
