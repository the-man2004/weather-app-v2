<template>
  <div
    class="text-center text-base font-semibold mt-10 mb-20 md:mt-16 md:mb-24 md:text-xl"
  >
    <h1 class="text-3xl text-center md:text-5xl xl:text-7xl">
      {{ store.location.city }}, {{ store.location.country }}
    </h1>
    <div class="">
      <img class="mx-auto w-1/4" :src="icon" alt="weather icon" />

      <div class="mb-3 md:mb-5">
        <h3>{{ temp }}°C</h3>
        <p>Humidity: {{ humidity }}%</p>
        <p>Wind: {{ wind }} km/h</p>
        <!-- <img class="weather-img" :src="imageUrl" alt="" /> -->
      </div>
      <div>
        <h3>Weather</h3>
        <p>{{ day }} {{ time }}</p>
        <p>{{ store.weatherCondition }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useWeatherStore } from "../stores/weatherStore";
import { computed } from "vue";

const store = useWeatherStore();

const temp = computed(() => Math.round(store.currentWeather.main.temp));
const humidity = computed(() => store.currentWeather.main.humidity);
const wind = computed(() => Math.round(store.currentWeather.wind.speed));
const icon = computed(
  () =>
    `http://openweathermap.org/img/w/${store.currentWeather.weather[0].icon}.png`
);
// eslint-disable-next-line
const imageUrl = computed(() => {
  const imageName = store.currentWeather.weather[0].description
    .split(" ")
    .join("-");

  return `../../assets/${imageName}.jpg`;
});
const day = computed(() => store.day);
const time = computed(() => {
  const t = store.currentTime.split(" ");

  return t[1].slice(0, 5);
});
</script>

<style scoped>
.weather-img {
  max-width: 100%;
}
</style>
