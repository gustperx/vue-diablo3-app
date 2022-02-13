import { defineStore } from "pinia";
import { getApiAccount } from "../api/diablo/search";
import type {
  profileAccountParams,
  profileAccountStore,
} from "../interfaces/profileAccountStore";

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
        const profile = sessionStorage.getItem(account);
        if (profile) {
          this.profile = JSON.parse(profile);
          console.warn("profile from sessionStorage");
          return;
        }

        this.isLoading = true;
        //this.isLoading = true;

        const accountParams: profileAccountParams = {
          account,
          region,
        };
        const { data } = await getApiAccount(accountParams);

        this.profile = data;
        this.isLoading = false;
        sessionStorage.setItem(account, JSON.stringify(data));
        console.warn("profile from Api");
      } catch (error) {
        this.isLoading = false;
        console.error(error);
      }
    },
  },
});

export { useProfileAccountStore };
