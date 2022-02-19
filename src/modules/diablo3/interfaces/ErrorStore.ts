import type { ParamsProfileAccount } from "./ProfileAccountStore";

export interface ErrorState {
  error?: ErrorGlobal;
}

export interface ErrorGlobal {
  userParams: ParamsProfileAccount;
  message: string;
}
