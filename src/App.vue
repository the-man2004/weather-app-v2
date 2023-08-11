<template>
  <div v-if="!fetching">
    <h1>{{ city }}</h1>
    <h2>{{ temp }}°c</h2>
    <div></div>
  </div>
</template>

<script>
export default {
  // "04400c94c3fa39734684083c69ac10aa"
  // "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"

  data() {
    return {
      fetching: true,
      city: "",
      temp: null,
    };
  },
  computed: {},
  methods: {
    async fetchData(cityName) {
      this.fetching = true;

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=04400c94c3fa39734684083c69ac10aa`
      );
      const responseData = await response.json();
      console.log(responseData);

      this.fetching = false;

      this.city = responseData.name;

      this.temp = (responseData.main.temp - 273.15).toFixed();
    },
  },
  mounted() {
    this.fetchData("london");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

svg {
  width: 1.2rem;
}
</style>
