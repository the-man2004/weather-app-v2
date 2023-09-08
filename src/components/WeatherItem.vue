<template>
  <li>
    <div>
      <p>{{ timeStr }}</p>
      <img :src="icon" alt="weather icon" />
      <p>{{ temp }}°C</p>
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
      const i = `http://openweathermap.org/img/w/${props.info.weather[0].icon}.png`;
      return i;
    });
    const timeStr = computed(() => {
      const t = props.info["dt_txt"].split(" ");
      let time = t[1].slice(0, 5);

      return time;
    });

    console.log(icon.value);

    return {
      temp,
      icon,
      timeStr,
    };
  },
};
</script>
