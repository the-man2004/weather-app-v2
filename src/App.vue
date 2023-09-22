<template>
  <main class="container mx-auto px-5 max-w-3xl">
    <div>
      <TheHeader />
    </div>
    <div v-if="!store.isFetching && !store.error" class="weather">
      <div>
        <CurrentWeather />
        <p>-------------------</p>
        <AllWeather />
      </div>
    </div>
    <div v-else>
      <h2>
        {{ store.error }}
      </h2>
    </div>
    <div v-if="store.isFetching">
      <p>Loading...</p>
    </div>
  </main>
</template>

<script setup>
import { onMounted } from "vue";
import { useWeatherStore } from "./stores/weatherStore";

import TheHeader from "./components/TheHeader.vue";
import CurrentWeather from "./components/CurrentWeather.vue";
import AllWeather from "./components/AllWeather.vue";

// "04400c94c3fa39734684083c69ac10aa"
// "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
// HOW TO GET ICON <img src="http://openweathermap.org/img/w/01d.png" alt="" />

const store = useWeatherStore();

onMounted(() => {
  navigator.geolocation.getCurrentPosition(store.setPosition);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date();
  const day = days[d.getDay()];
  console.log(day);

  store.setDay(day);
});
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

.weather {
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
