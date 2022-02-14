import { defineStore } from "pinia";
import { blizzardProfileApi } from "../api/diablo/search";
import type { ProfileAccount } from "../interfaces/profileAccount";
import type { profileAccountStore } from "../interfaces/profileAccountStore";
import { useOauthStore } from "./oauthStore";

const useProfileAccountStore = defineStore("profileAccount", {
  state: (): profileAccountStore => {
    return {
      isLoading: false,
      profile: undefined,
    };
  },
  actions: {
    async getProfile(region: string, account: string) {
      try {
        if (this.profile) {
          const accountName = this.profile.battleTag.replace("#", "-");
          if (accountName === account) {
            return;
          }
          this.profile = undefined;
        }

        const oAuthStore = useOauthStore();

        const apiClient = blizzardProfileApi(region);
        const resource = `/d3/profile/${account}/`;
        const locale = "en_US";

        const params = {
          access_token: oAuthStore.token,
          locale,
        };

        this.isLoading = true;
        const { data } = await apiClient.get<ProfileAccount>(resource, {
          params,
        });

        this.profile = data;
        this.isLoading = false;
        console.warn("profile from Api");
      } catch (error) {
        this.isLoading = false;
        console.error(error);
      }
    },
  },
});

export { useProfileAccountStore };
