import { defineStore } from "pinia";
import { blizzardOauhtApi } from "../api/oauth";
import type { oAuthState } from "../interfaces/oAuthStore";

const clientId: string = import.meta.env.VITE_DIABLO3_APP_CLIENT_ID;
const clientSecret: string = import.meta.env.VITE_DIABLO3_APP_CLIENT_SECRET;

const useOauthStore = defineStore("oAuthStore", {
  state: (): oAuthState => {
    return {
      isLoading: false,
      token: undefined,
    };
  },
  actions: {
    async getToken() {
      if (this.token) return;

      try {
        this.isLoading = true;

        const body = new FormData();
        body.append("grant_type", "client_credentials");

        const config = {
          headers: { "Content-Type": "multipart/form-data" },
          auth: { username: clientId, password: clientSecret },
        };

        const { data } = await blizzardOauhtApi.post(
          "/oauth/token",
          body,
          config
        );

        this.token = data.access_token;
        this.isLoading = false;
        console.warn("token from API");
      } catch (error) {
        this.isLoading = false;
        throw new Error(`${error}`);
      }
    },
    clearToken(): void {
      this.token = undefined;
    },
  },
});

export { useOauthStore };
