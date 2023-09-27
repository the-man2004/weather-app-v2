import { defineStore } from "pinia";

export const useUIStore = defineStore("UIstore", {
  state: () => {
    return {
      colorMode: "light",
    };
  },
  actions: {
    changeColorScheme() {
      if (this.colorMode === "light") {
        this.colorMode = "dark";
      } else {
        this.colorMode = "light";
      }
    },
  },
  getters: {
    mode: (state) => {
      return state.colorMode;
    },
  },
});
