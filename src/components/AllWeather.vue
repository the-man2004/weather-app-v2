<template>
  <div>
    <ul
      class="max-w-sm py-5 mx-auto flex flex-col items-center justify-center gap-3 shadow-md md:flex-row md:max-w-none"
    >
      <WeatherItem
        v-for="weather in weatherList"
        :key="weather.dt"
        :info="weather"
      />
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useWeatherStore } from "../stores/weatherStore";
import WeatherItem from "./WeatherItem.vue";

const store = useWeatherStore();

const weatherList = ref(store.weatherList);
console.log("💥", weatherList.value);
</script>
