<template>
  <h1>
    {{ store.location.city }}, <span>{{ store.location.country }}</span>
  </h1>
  <div>
    <img :src="icon" alt="weather icon" />
    <h3>{{ temp }}°C</h3>
    <p>Humidity: {{ humidity }}%</p>
    <p>Wind: {{ wind }} km/h</p>
    <img class="weather-img" :src="imageUrl" alt="" />
  </div>
</template>

<script>
import { useWeatherStore } from "../stores/weatherStore";
import { computed } from "vue";

export default {
  setup() {
    const store = useWeatherStore();

    const temp = computed(() => Math.round(store.currentWeather.main.temp));
    // const description = computed(
    //   () => store.currentWeather.weather[0].description
    // );
    const humidity = computed(() => store.currentWeather.main.humidity);
    const wind = computed(() => Math.round(store.currentWeather.wind.speed));
    const icon = computed(
      () =>
        `http://openweathermap.org/img/w/${store.currentWeather.weather[0].icon}.png`
    );
    const imageUrl = computed(() => {
      const imageName = store.currentWeather.weather[0].description
        .split(" ")
        .join("-");

      return `../../assets/${imageName}.jpg`;
    });

    return {
      store,
      temp,
      humidity,
      wind,
      icon,
      imageUrl,
    };
  },
};
</script>

<style scoped>
.weather-img {
  max-width: 100%;
}
</style>
