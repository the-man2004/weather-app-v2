import { defineStore } from "pinia";

export const useUIStore = defineStore("UIstore", {
  state: () => {
    return {
      colorScheme: localStorage.getItem("color-scheme"),
    };
  },
  actions: {
    changeColorScheme() {
      let color;
      if (this.colorScheme === "light") {
        color = "dark";
      } else {
        color = "light";
      }

      this.colorScheme = color;
      localStorage.setItem("color-scheme", color);
    },
  },
  getters: {
    mode: (state) => {
      return state.colorScheme;
    },
  },
});
