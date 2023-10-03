<template>
  <!-- Modal toggle -->
  <svg
    @click="toggleIsModalOpen"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-6 h-6 cursor-pointer text-blue-400"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
    />
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>

  <!-- Main modal -->
  <teleport to="#popups-and-modals">
    <transition name="slide-fade">
      <div
        v-if="isModalOpen === true"
        class="absolute top-16 inset-x-4 z-50 p-8 max-w-2xl mx-auto rounded-md"
        :class="`${bgColor} ${textColor}`"
      >
        <div class="flex flex-row mb-8">
          <p class="font-semibold text-xl md:text-2xl">Settings</p>
          <!-- Close button -->
          <svg
            @click="toggleIsModalOpen"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 ml-auto cursor-pointer text-blue-400 md:w-8 md:h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <!--  -->
        <div class="flex flex-col md:flex-row">
          <figure class="sm:flex-1">
            <figcaption class="mb-2 md:text-xl">Language</figcaption>
            <ul class="ml-2 mb-5 text-sm md:text-md md:mb-0">
              <li :class="{ 'text-blue-400': weatherStore.lang === 'en' }">
                <button @click="changeLang('en')">English</button>
              </li>
              <li :class="{ 'text-blue-400': weatherStore.lang === 'ar' }">
                <button @click="changeLang('ar')">Arabic</button>
              </li>
              <li :class="{ 'text-blue-400': weatherStore.lang === 'cz' }">
                <button @click="changeLang('cz')">Czech</button>
              </li>
              <li :class="{ 'text-blue-400': weatherStore.lang === 'el' }">
                <button @click="changeLang('el')">Greek</button>
              </li>
              <li :class="{ 'text-blue-400': weatherStore.lang === 'Farsi' }">
                <button @click="changeLang('Farsi')">Persian</button>
              </li>
              <li :class="{ 'text-blue-400': weatherStore.lang === 'gl' }">
                <button @click="changeLang('gl')">Galician</button>
              </li>
              <li :class="{ 'text-blue-400': weatherStore.lang === 'hu' }">
                <button @click="changeLang('hu')">Hungarian</button>
              </li>
              <li :class="{ 'text-blue-400': weatherStore.lang === 'ja' }">
                <button @click="changeLang('ja')">Japanese</button>
              </li>
              <li :class="{ 'text-blue-400': weatherStore.lang === 'kr' }">
                <button @click="changeLang('kr')">Korean</button>
              </li>
              <li :class="{ 'text-blue-400': weatherStore.lang === 'la' }">
                <button @click="changeLang('la')">Latvian</button>
              </li>
              <li :class="{ 'text-blue-400': weatherStore.lang === 'lt' }">
                <button @click="changeLang('lt')">Lithuanian</button>
              </li>
              <li :class="{ 'text-blue-400': weatherStore.lang === 'mk' }">
                <button @click="changeLang('mk')">Macedonian</button>
              </li>
              <li :class="{ 'text-blue-400': weatherStore.lang === 'sk' }">
                <button @click="changeLang('sk')">Slovak</button>
              </li>
              <li :class="{ 'text-blue-400': weatherStore.lang === 'sl' }">
                <button @click="changeLang('sl')">Slovenian</button>
              </li>
              <li :class="{ 'text-blue-400': weatherStore.lang === 'vi' }">
                <button @click="changeLang('vi')">Vietnamese</button>
              </li>
            </ul>
          </figure>
          <figure class="sm:flex-1">
            <figcaption class="mb-2 md:text-xl">Units</figcaption>
            <ul class="ml-2 mb-5 text-sm md:text-md">
              <li
                :class="{ 'text-blue-400': weatherStore.tempUnit === 'metric' }"
              >
                <button @click="changeUnits('metric')">Celsius</button>
              </li>
              <li
                :class="{
                  'text-blue-400': weatherStore.tempUnit === 'imperial',
                }"
              >
                <button @click="changeUnits('imperial')">Fahrenheit</button>
              </li>
            </ul>
          </figure>
        </div>
      </div>
    </transition>
  </teleport>

  <!-- Backdrop -->
  <teleport to="#popups-and-modals">
    <transition name="fade">
      <div
        @click="toggleIsModalOpen"
        class="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-black opacity-30"
        :class="{ hidden: isModalOpen === false }"
      ></div>
    </transition>
  </teleport>
</template>

<script setup>
import { ref } from "vue";
import { computed } from "vue";
import { useWeatherStore } from "@/stores/weatherStore";
import { useUIStore } from "../stores/UIStore";

const weatherStore = useWeatherStore();
const UIStore = useUIStore();

const isModalOpen = ref(false);

// Helper functions
const toggleIsModalOpen = () => {
  isModalOpen.value = !isModalOpen.value;
};

const changeLang = (lang) => {
  if (weatherStore.lang !== lang) {
    weatherStore.setLang(lang);
    toggleIsModalOpen();

    weatherStore.fetchData("cityName", weatherStore.location.city);
  }
};

const changeUnits = (unit) => {
  if (weatherStore.weatherUnit !== unit) {
    weatherStore.setUnits(unit);
    toggleIsModalOpen();

    weatherStore.fetchData("cityName", weatherStore.location.city);
  }
};

// Computed properties
const bgColor = computed(() =>
  UIStore.colorScheme === "light" ? "bg-gray-200" : "bg-gray-800"
);
const textColor = computed(() =>
  UIStore.mode === "light" ? "text-gray-500" : "text-gray-400"
);
</script>

<!-- Styling -->
<style scoped>
li {
  cursor: pointer;
}
li:hover {
  color: rgb(96 165 250 / 1);
}

/* modal animations */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

/* Backdrop animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
