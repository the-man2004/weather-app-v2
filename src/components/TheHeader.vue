<template>
  <div class="py-5 mb-5">
    <form
      class="max-w-xl mx-auto border border-gray-400"
      @submit.prevent="searchCity"
    >
      <input
        class="outline-none w-5/6 pl-2 placeholder-gray-500 text-gray-500"
        type="text"
        placeholder="search city..."
        v-model.trim="cityName"
      />
      <button class="w-1/6 bg-gray-300 text-gray-500">search</button>
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
