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
    <div
      v-if="isModalOpen === true"
      class="fixed top-16 inset-x-4 z-50 p-4 max-w-2xl mx-auto rounded-md"
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
            <li @click="changeLang('en')">English</li>
            <li @click="changeLang('ar')">Arabic</li>
            <li @click="changeLang('cz')">Czech</li>
            <li @click="changeLang('el')">Greek</li>
            <li @click="changeLang('Farsi')">Persian</li>
            <li @click="changeLang('gl')">Galician</li>
            <li @click="changeLang('hu')">Hungarian</li>
            <li @click="changeLang('ja')">Japanese</li>
            <li @click="changeLang('kr')">Korean</li>
            <li @click="changeLang('la')">Latvian</li>
            <li @click="changeLang('lt')">Lithuanian</li>
            <li @click="changeLang('mk')">Macedonian</li>
            <li @click="changeLang('sk')">Slovak</li>
            <li @click="changeLang('sl')">Slovenian</li>
            <li @click="changeLang('vi')">Vietnamese</li>
          </ul>
        </figure>

        <figure class="sm:flex-1">
          <figcaption class="mb-2 md:text-xl">Units</figcaption>
          <ul class="ml-2 text-sm md:text-md">
            <li @click="changeUnits('metric')">Celsius</li>
            <li @click="changeUnits('imperial')">Fahrenheit</li>
          </ul>
        </figure>
      </div>
    </div>
  </teleport>

  <!-- Backdrop -->
  <teleport to="#popups-and-modals">
    <div
      @click="toggleIsModalOpen"
      class="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-black opacity-30"
      :class="{ hidden: isModalOpen === false }"
    ></div>
  </teleport>
</template>

<script setup>
import { ref } from "vue";
import { computed } from "vue";
import { useUIStore } from "../stores/UIStore";

const UIStore = useUIStore();

const isModalOpen = ref(false);

const toggleIsModalOpen = () => {
  isModalOpen.value = !isModalOpen.value;
};

const changeLang = (lang) => {
  console.log(lang);
};

const changeUnits = (unit) => {
  console.log(unit);
};

const bgColor = computed(() =>
  UIStore.colorScheme === "light" ? "bg-gray-200" : "bg-gray-800"
);
const textColor = computed(() =>
  UIStore.mode === "light" ? "text-gray-500" : "text-gray-400"
);
</script>

<style scoped>
li {
  cursor: pointer;
}
li:hover {
  color: rgb(96 165 250 / 1);
}
</style>
