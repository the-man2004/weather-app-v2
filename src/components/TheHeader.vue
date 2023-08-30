<template>
  <form @submit.prevent="searchCity">
    <input type="text" placeholder="search city..." v-model.trim="cityName" />
    <button>search</button>
  </form>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const cityName = ref("");

    const searchCity = () => {
      console.log(cityName.value);
    };

    return {
      searchCity,
      cityName,
    };
  },
};
</script>
