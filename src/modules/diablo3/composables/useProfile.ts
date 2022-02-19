import { computed } from "vue";
import { useRouter } from "vue-router";
import { useErrorStore } from "../stores/errorStore";
import { useProfileStore } from "../stores/profileStore";
import type { ProfileParameters } from "../interfaces/ProfileAccountStore";
import type { ErrorGlobal } from "../interfaces/ErrorStore";

const useProfile = (props: ProfileParameters) => {
  const router = useRouter();
  const errorStore = useErrorStore();
  const profileStore = useProfileStore();

  // Get profile
  // SuperRambo-2613
  profileStore.getProfile(props).catch((err) => {
    const errObj: ErrorGlobal = {
      userParams: { battleTag: props.battleTag, region: props.region },
      message: err.message,
    };
    errorStore.error = errObj;
    router.push({ name: "diablo3-error" });
  });

  return {
    isLoading: computed(() => profileStore.isLoading),
    profile: computed(() => profileStore.profile),

    artisans: computed(() => profileStore.artisansData),
  };
};

export { useProfile };
