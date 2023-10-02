<template>
  <li class="font-semibold py-2">
    <div class="text-center">
      <p>{{ timeStr }}</p>
      <img class="w-14" :src="icon" alt="weather icon" />
      <p class="text-lg">{{ temp }}°C</p>
    </div>
  </li>
</template>

<script setup>
import { computed } from "vue";

// eslint-disable-next-line
const props = defineProps({
  info: String,
});
const temp = computed(() => Math.round(props.info.main.temp));
const icon = computed(() => {
  const i = `http://openweathermap.org/img/wn/${props.info.weather[0].icon}@2x.png`;
  return i;
});

const timeStr = computed(() => {
  const t = props.info.dt_txt.split(" ");
  let time = t[1].slice(0, 5);

  return time;
});

console.log(icon.value);
</script>
