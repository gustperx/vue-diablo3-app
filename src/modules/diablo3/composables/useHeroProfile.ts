import { useRouter } from "vue-router";
import { useErrorStore } from "../stores/errorStore";
import { useProfileStore } from "../stores/profileStore";
import type { ProfileParameters } from "../interfaces/ProfileAccountStore";
import type { ErrorGlobal } from "../interfaces/ErrorStore";
import { computed } from "vue";

const useHeroProfile = (props: ProfileParameters) => {
  const router = useRouter();
  const profileStore = useProfileStore();
  const errorStore = useErrorStore();

  Promise.all([
    profileStore.getHero(props),
    profileStore.getDetailedHeroItems(props),
  ]).catch((err) => {
    const errObj: ErrorGlobal = {
      userParams: { battleTag: props.battleTag, region: props.region },
      message: err.message,
    };
    errorStore.error = errObj;
    router.push({ name: "diablo3-error" });
  });

  return {
    isLoading: computed(() => profileStore.isLoading),
    hero: computed(() => profileStore.hero),
    heroItems: computed(() => profileStore.heroItems),
  };
};

export { useHeroProfile };
