<template>
  <div v-if="!store.isFetching">
    <div>
      <CurrentWeather />
    </div>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useWeatherStore } from "./stores/weatherStore";

import CurrentWeather from "./components/CurrentWeather.vue";

export default {
  // "04400c94c3fa39734684083c69ac10aa"
  // "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
  // HOW TO GET ICON <img src="http://openweathermap.org/img/w/01d.png" alt="" />
  components: {
    CurrentWeather,
  },
  setup() {
    const store = useWeatherStore();

    onMounted(() => {
      navigator.geolocation.getCurrentPosition(store.setPosition);
    });

    return {
      store,
    };
  },

  // data() {
  //   return {
  //     fetching: true,
  //     city: "",
  //     temp: null,
  //     weather: null,
  //     latitude: null,
  //     longitude: null,
  //   };
  // },
  // methods: {
  //   setPosition(position) {
  //     this.latitude = position.coords.latitude;
  //     this.longitude = position.coords.longitude;

  //     this.fetchData();
  //   },
  //   async fetchData() {
  //     this.fetching = true;

  //     try {
  //       const response = await fetch(
  //         `https://api.openweathermap.org/data/2.5/forecast?lat=${this.latitude}&lon=${this.longitude}&cnt=5&appid=04400c94c3fa39734684083c69ac10aa&units=metric`
  //       );
  //       const responseData = await response.json();
  //       console.log(responseData);

  //       this.fetching = false;

  //       this.city = responseData.city.name;
  //       this.temp = responseData.list[0].main.temp.toFixed();
  //       this.weather = responseData.list[0].weather[0].description;
  //     } catch (err) {
  //       console.error(err);
  //       this.fetching = false;
  //     }
  //   },
  // },
  // mounted() {
  //   navigator.geolocation.getCurrentPosition(this.setPosition);
  // },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

svg {
  width: 1.2rem;
}
</style>
