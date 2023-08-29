import { defineStore } from "pinia";

export const useWeatherStore = defineStore("weather", {
  state: () => {
    return {
      latitude: null,
      longitude: null,
      isFetching: true,
      weatherInfo: null,
    };
  },
  actions: {
    setPosition(position) {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;

      this.fetchData();
    },
    async fetchData() {
      this.isFetching = true;

      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${this.latitude}&lon=${this.longitude}&cnt=8&appid=04400c94c3fa39734684083c69ac10aa&units=metric`
        );
        const responseData = await response.json();
        console.log(responseData);

        this.weatherInfo = {
          ...responseData,
        };
        // this.weatherInfo = {
        //   status: "FUCKED",
        // };

        this.isFetching = false;
      } catch (err) {
        console.log(err);
        this.isFetching = false;
      }
    },
  },
  getters: {
    city: (state) => {
      return state.weatherInfo.city;
    },
    currentWeather: (state) => {
      return state.weatherInfo.list[0];
    },
    weatherList: (state) => {
      return state.weatherInfo;
    },
  },
});
