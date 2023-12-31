import { defineStore } from "pinia";

export const useWeatherStore = defineStore("weather", {
  state: () => {
    return {
      tempUnit: localStorage.getItem("units") || "metric",
      lang: localStorage.getItem("lang") || "en",
      latitude: null,
      longitude: null,
      isFetching: true,
      weatherInfo: null,
      error: null,
      day: null,
    };
  },
  actions: {
    setPosition(position) {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;

      this.fetchData();
    },
    setUnits(unit) {
      localStorage.setItem("units", unit);

      this.tempUnit = unit;
    },
    setLang(lang) {
      localStorage.setItem("lang", lang);

      this.lang = lang;
    },
    setDay(day) {
      this.day = day;
    },
    setError(message) {
      this.error = message;
    },
    resetError() {
      this.error = null;
    },
    async fetchData(mode = "coords", city = "johannesburg") {
      this.isFetching = true;

      let APIUrl;

      if (mode === "coords") {
        APIUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${this.latitude}&lon=${this.longitude}&cnt=8&appid=04400c94c3fa39734684083c69ac10aa&units=${this.tempUnit}&lang=${this.lang}`;
      }

      if (mode === "cityName") {
        APIUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&appid=04400c94c3fa39734684083c69ac10aa&units=${this.tempUnit}&lang=${this.lang}`;
      }

      try {
        const response = await fetch(APIUrl);

        if (!response.ok) {
          console.log(response);
          throw new Error(response.statusText);
        }

        const responseData = await response.json();
        console.log(responseData);

        this.weatherInfo = {
          ...responseData,
        };

        this.resetError();
        this.isFetching = false;
      } catch (err) {
        console.log(err);

        this.error = "Something went wrong!";
        this.isFetching = false;
      }
    },
  },
  getters: {
    location: (state) => {
      return {
        city: state.weatherInfo.city.name,
        country: state.weatherInfo.city.country,
      };
    },
    currentWeather: (state) => {
      return state.weatherInfo.list[0];
    },
    weatherList: (state) => {
      return state.weatherInfo.list;
    },
    currentTime: (state) => {
      return state.weatherInfo.list[0].dt_txt;
    },
    weatherCondition: (state) => {
      return state.weatherInfo.list[0].weather[0].description;
    },
    weatherUnit: (state) => {
      return state.tempUnit;
    },
  },
});
