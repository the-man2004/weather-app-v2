<template>
  <form @submit.prevent="searchCity">
    <input type="text" placeholder="search city..." v-model.trim="cityName" />
    <button>search</button>
  </form>
</template>

<script setup>
import { useWeatherStore } from "../stores/weatherStore";
import { ref } from "vue";

const store = useWeatherStore();
const cityName = ref("");

const searchCity = () => {
  store.resetError();
  store.fetchData("cityName", cityName.value);

  console.log(cityName.value);

  cityName.value = "";
};
</script>
