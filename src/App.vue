<template>
  <div>
    <TheHeader />
  </div>
  <div v-if="!store.isFetching">
    <div>
      <CurrentWeather />
      <AllWeather />
    </div>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useWeatherStore } from "./stores/weatherStore";

import TheHeader from "./components/TheHeader.vue";
import CurrentWeather from "./components/CurrentWeather.vue";
import AllWeather from "./components/AllWeather.vue";

export default {
  // "04400c94c3fa39734684083c69ac10aa"
  // "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
  // HOW TO GET ICON <img src="http://openweathermap.org/img/w/01d.png" alt="" />
  components: {
    TheHeader,
    CurrentWeather,
    AllWeather,
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
