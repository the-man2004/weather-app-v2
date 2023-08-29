<template>
  <h1>Weather</h1>
</template>

<script>
import { useWeatherStore } from "../stores/weatherStore";

export default {
  setup() {
    const store = useWeatherStore();

    return {
      store,
    };
  },
};
</script>
