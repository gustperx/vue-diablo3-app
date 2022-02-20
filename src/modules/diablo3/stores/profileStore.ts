import { defineStore } from "pinia";
import { locales } from "@/helpers/regions";
import { blizzardProfileApi } from "../api/diablo/search";
import { useOauthStore } from "./oAuthStore";
import type { Artisans, ProfileAccount } from "../interfaces/ProfileAccount";
import type {
  ProfileState,
  ProfileParameters,
} from "../interfaces/ProfileAccountStore";
import type { HeroDiablo } from "../interfaces/HeroDiablo";
import type { HeroItems } from "../interfaces/DetailedHeroItems";

const oAuthStore = useOauthStore();

const useProfileStore = defineStore("profileStore", {
  state: (): ProfileState => {
    return {
      isLoading: false,
      profile: undefined,
      hero: undefined,
      heroItems: undefined,
    };
  },
  getters: {
    artisansData: (state): Artisans => {
      if (state.profile) {
        return {
          blacksmith: state.profile.blacksmith,
          blacksmithHardcore: state.profile.blacksmithHardcore,
          jeweler: state.profile.jeweler,
          jewelerHardcore: state.profile.jewelerHardcore,
          mystic: state.profile.mystic,
          mysticHardcore: state.profile.mysticHardcore,
        };
      }
      return {};
    },
  },
  actions: {
    async getProfile(props: ProfileParameters): Promise<void> {
      try {
        if (this.profile) {
          const accountName = this.profile.battleTag.replace("#", "-");
          if (accountName === props.battleTag) {
            return;
          }
          this.profile = undefined;
        }

        const apiClient = blizzardProfileApi(props.region);
        const resource = `/d3/profile/${props.battleTag}/`;
        const locale = locales[props.region];

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
    async getHero(props: ProfileParameters): Promise<void> {
      try {
        if (this.hero) {
          if (this.hero.id === Number(props.heroId)) {
            return;
          }
          this.hero = undefined;
        }

        const apiClient = blizzardProfileApi(props.region);
        const resource = `/d3/profile/${props.battleTag}/hero/${props.heroId}`;
        const locale = locales[props.region];

        const params = {
          access_token: oAuthStore.token,
          locale,
        };

        this.isLoading = true;
        const { data } = await apiClient.get<HeroDiablo>(resource, {
          params,
        });

        this.hero = data;
        this.isLoading = false;
        console.warn("hero from Api");
      } catch (error) {
        this.isLoading = false;
        throw new Error(`${error}`);
      }
    },
    async getDetailedHeroItems(props: ProfileParameters): Promise<void> {
      try {
        if (this.heroItems) {
          if (this.hero?.id === Number(props.heroId)) {
            return;
          }
          this.heroItems = undefined;
        }

        const apiClient = blizzardProfileApi(props.region);
        const resource = `/d3/profile/${props.battleTag}/hero/${props.heroId}/items`;
        const locale = locales[props.region];

        const params = {
          access_token: oAuthStore.token,
          locale,
        };

        this.isLoading = true;
        const { data } = await apiClient.get<HeroItems>(resource, {
          params,
        });

        this.heroItems = data;
        this.isLoading = false;
        console.warn("hero items from Api");
      } catch (error) {
        this.isLoading = false;
        throw new Error(`${error}`);
      }
    },
  },
});

export { useProfileStore };
