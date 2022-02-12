import { defineStore } from "pinia";
import { getToken } from "../api/oauth";
import type { oauthStore } from "../interfaces/aouthStore";

const nameSessionStorage = "diablo3-token";

const useOauthStore = defineStore("oauthStore", {
  state: (): oauthStore => {
    return {
      isLoading: false,
      token: undefined,
    };
  },
  actions: {
    async getToken(): Promise<void> {
      if (this.token) return;

      this.isLoading = true;
      const token = sessionStorage.getItem(nameSessionStorage);
      if (token) {
        console.log("token from sessionStorage");
        this.token = token;
        this.isLoading = false;
      } else {
        await getToken()
          .then(({ data }) => {
            console.log("token from oauth");
            this.token = data.access_token;
            this.isLoading = false;
            sessionStorage.setItem(nameSessionStorage, data.access_token);
          })
          .catch((err) => {
            this.isLoading = false;
            console.log(err);
          });
      }
    },
    clearToken(): void {
      this.token = undefined;
      sessionStorage.removeItem(nameSessionStorage);
    },
  },
});

export { useOauthStore };
