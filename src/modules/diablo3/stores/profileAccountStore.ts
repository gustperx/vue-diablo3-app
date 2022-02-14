import { defineStore } from "pinia";
import { blizzardProfileApi } from "../api/diablo/search";
import type { ProfileAccount } from "../interfaces/profileAccount";
import type {
  profileAccountState,
  userParamsProfileAccount,
} from "../interfaces/profileAccountStore";
import { useOauthStore } from "./oauthStore";

const useProfileAccountStore = defineStore("profileAccount", {
  state: (): profileAccountState => {
    return {
      isLoading: false,
      profile: undefined,
    };
  },
  actions: {
    async getProfile(props: userParamsProfileAccount) {
      try {
        if (this.profile) {
          const accountName = this.profile.battleTag.replace("#", "-");
          if (accountName === props.battleTag) {
            return;
          }
          this.profile = undefined;
        }

        const oAuthStore = useOauthStore();

        const apiClient = blizzardProfileApi(props.region);
        const resource = `/d3/profile/${props.battleTag}/`;
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
      } catch (err) {
        this.isLoading = false;
        throw new Error(`${err}`);
      }
    },
  },
});

export { useProfileAccountStore };
