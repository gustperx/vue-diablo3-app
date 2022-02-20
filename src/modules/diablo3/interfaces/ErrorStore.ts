import type { ProfileParameters } from "./ProfileAccountStore";

export interface ErrorState {
  error?: ErrorGlobal;
}

export interface ErrorGlobal {
  userParams: ProfileParameters;
  message: string;
}
