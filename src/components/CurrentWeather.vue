<template>
  <h1>
    {{ store.location.city }} <span>{{ store.location.country }}</span>
  </h1>
  <div>
    <img :src="icon" alt="weather icon" />
    <h3>{{ temp }}°C</h3>
    <p>wind speed: {{ wind }}km/h</p>
    <p>{{ description }}</p>
  </div>
</template>

<script>
import { useWeatherStore } from "../stores/weatherStore";
import { computed } from "vue";

export default {
  setup() {
    const store = useWeatherStore();

    const temp = computed(() => Math.round(store.currentWeather.main.temp));
    const description = computed(
      () => store.currentWeather.weather[0].description
    );
    const wind = computed(() => store.currentWeather.wind.speed);
    const icon = computed(() => {
      const i = `http://openweathermap.org/img/w/${store.currentWeather.weather[0].icon}.png`;

      return i;
    });

    return {
      store,
      temp,
      description,
      wind,
      icon,
    };
  },
};
</script>
