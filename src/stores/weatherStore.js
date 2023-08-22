import { defineStore } from "pinia";

export const useWeatherStore = defineStore("weather", {
  state: () => {
    return {
      something: "Something",
    };
  },
  actions: {
    changeSomething() {
      setTimeout(() => {
        this.something = "Something else";
        console.log(this.something);
      }, 1000);
    },
  },
  getters: {},
});
