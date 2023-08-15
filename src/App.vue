<template>
  <div v-if="!fetching">
    <h1>{{ city }}</h1>
    <h2>{{ temp }}°c</h2>
    <div></div>
  </div>

  <h3>{{ weather }}</h3>
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
      weather: null,
      latitude: null,
      longitude: null,
    };
  },
  computed: {},
  methods: {
    setPosition(position) {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;

      this.fetchData();
    },
    async fetchData() {
      this.fetching = true;

      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${this.latitude}&lon=${this.longitude}&cnt=5&appid=04400c94c3fa39734684083c69ac10aa&units=metric`
        );
        const responseData = await response.json();
        console.log(responseData);

        this.fetching = false;

        this.city = responseData.city.name;
        this.temp = responseData.list[0].main.temp.toFixed();
        this.weather = responseData.list[0].weather[0].description;
      } catch (err) {
        console.error(err);
        this.fetching = false;
      }
    },
  },
  mounted() {
    navigator.geolocation.getCurrentPosition(this.setPosition);
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
