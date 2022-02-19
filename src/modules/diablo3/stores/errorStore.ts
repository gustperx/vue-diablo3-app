import { defineStore } from "pinia";
import type { ErrorState } from "../interfaces/ErrorStore";

const useErrorStore = defineStore("errorStore", {
  state: (): ErrorState => {
    return {
      error: undefined,
    };
  },
});

export { useErrorStore };
