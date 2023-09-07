<template>
  <div>
    <ul>
      <WeatherList
        v-for="weather in weatherList"
        :key="weather.dt"
        :info="weather"
      />
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
import { useWeatherStore } from "../stores/weatherStore";
import WeatherList from "./WeatherList.vue";

export default {
  components: {
    WeatherList,
  },
  setup() {
    const store = useWeatherStore();

    const weatherList = ref(store.weatherList);
    console.log("💥", weatherList.value);

    return {
      store,
      weatherList,
    };
  },
};
</script>
