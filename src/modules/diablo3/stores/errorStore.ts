import { defineStore } from "pinia";
import type { errorState } from "../interfaces/errorStore";

const useErrorStore = defineStore("errorStore", {
  state: (): errorState => {
    return {
      error: null,
    };
  },
});

export { useErrorStore };
