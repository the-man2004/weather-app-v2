<template>
  <div class="py-5">
    <form class="" @submit.prevent="searchCity">
      <input
        class="outline-none"
        type="text"
        placeholder="search city..."
        v-model.trim="cityName"
      />
      <button>search</button>
    </form>
  </div>
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
