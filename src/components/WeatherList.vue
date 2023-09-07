<template>
  <li>
    <div>
      <p>{{ temp }}°C</p>
      <img :src="icon" alt="weather icon" />
    </div>
  </li>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["info"],
  setup(props) {
    const temp = computed(() => Math.round(props.info.main.temp));
    const icon = computed(() => {
      const i = `http://openweathermap.org/img/w/${props.info.weather.icon}.png`;

      return i;
    });

    console.log(icon.value);

    return {
      temp,
      icon,
    };
  },
};
</script>
