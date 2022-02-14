import { computed } from "vue";
import { useRouter } from "vue-router";
import { useErrorStore } from "../stores/errorStore";
import { useProfileAccountStore } from "../stores/profileAccountStore";
import type { userParamsProfileAccount } from "../interfaces/profileAccountStore";
import type { errorGlobal } from "../interfaces/errorStore";

const useProfile = (props: userParamsProfileAccount) => {
  const router = useRouter();
  const errorStore = useErrorStore();
  const profileAccountStore = useProfileAccountStore();

  const isLoading = computed(() => profileAccountStore.isLoading);
  const profile = computed(() => profileAccountStore.profile);

  // Get profile
  // SuperRambo-2613
  profileAccountStore.getProfile(props).catch((err) => {
    const errObj: errorGlobal = {
      userParams: { battleTag: props.battleTag, region: props.region },
      message: err.message,
    };
    errorStore.error = errObj;
    router.push({ name: "diablo3-error" });
  });

  return {
    isLoading,
    profile,
  };
};

export { useProfile };
