<template>
  <div class="pt-5 max-w-xl mx-auto">
    <nav>
      <svg
        v-if="UIStore.mode === 'light'"
        @click="UIStore.changeColorScheme"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 text-blue-400"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
        />
      </svg>
      <svg
        v-if="UIStore.mode === 'dark'"
        @click="UIStore.changeColorScheme"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 text-blue-400"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      </svg>
    </nav>
  </div>
  <div class="py-5">
    <form
      class="max-w-xl mx-auto border"
      :class="inputBorderColor"
      @submit.prevent="searchCity"
    >
      <input
        class="outline-none w-4/6 pl-2 md:w-3/4"
        :class="inputColor"
        type="text"
        placeholder="search city..."
        v-model.trim="cityName"
      />
      <button class="w-2/6 bg-gray-300 md:w-1/4" :class="btnColor">
        search
      </button>
    </form>
  </div>
</template>

<script setup>
import { useWeatherStore } from "../stores/weatherStore";
import { useUIStore } from "../stores/UIStore";
import { ref } from "vue";
import { computed } from "vue";

const store = useWeatherStore();
const UIStore = useUIStore();
const cityName = ref("");

const searchCity = () => {
  if (cityName.value !== "") {
    store.resetError();
    store.fetchData("cityName", cityName.value);

    console.log(cityName.value);

    cityName.value = "";
  }
};

const inputBorderColor = computed(() =>
  UIStore.mode === "light" ? "border-gray-500" : "border-gray-400"
);
const inputColor = computed(() =>
  UIStore.mode === "light"
    ? "placeholder-gray-500"
    : "placeholder-gray-400 bg-gray-800"
);
const btnColor = computed(() =>
  UIStore.mode === "light" ? "bg-gray-300" : "bg-gray-700"
);
</script>
