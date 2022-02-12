export interface oauthStore {
  isLoading: boolean;
  token: string | undefined;
}

export interface BlizzardToken {
  access_token: string;
  token_type: string;
  expires_in: number;
  sub: string;
}
