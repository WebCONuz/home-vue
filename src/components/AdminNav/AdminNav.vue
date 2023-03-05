<script setup>
import { onMounted, ref } from "vue";
import logoImg from "../../assets/images/homedev.png";

import eng from "../../assets/images/eng.png";
import rus from "../../assets/images/rus.png";
import uzb from "../../assets/images/uzb.png";

const isOpenLang = ref(false);
const scrolling = ref(false);

function showLang() {
  isOpenLang.value = !isOpenLang.value;
}

function scrollHeader() {
  if (window.scrollY === 0) {
    scrolling.value = false;
  } else {
    scrolling.value = true;
  }
}

onMounted(() => {
  window.addEventListener("scroll", () => {
    scrollHeader();
  });
});
</script>

<template>
  <header
    :class="{
      'py-4': scrolling,
      'py-6': !scrolling,
    }"
    class="header bg-white shadow-md w-full sticky top-0 left-0 z-20 duration-200"
  >
    <div class="container">
      <div class="flex items-center justify-between">
        <!-- logo -->
        <a href="/" class="logo">
          <h2 class="flex items-baseline">
            <img :src="logoImg" alt="logo" class="w-[30px] sm:w-8" />
            <span
              class="text-color font-bold hidden sm:block sm:ml-2 text-2xl sm:text-3xl md:text-3xl"
              >HomeDev</span
            >
          </h2>
        </a>

        <ul class="flex items-center">
          <li class="mx-4">
            <a href="/admin" class="hover:text-[#58259e] duration-200"
              >All admins</a
            >
          </li>
          <li class="mx-4">
            <a href="/service" class="hover:text-[#58259e] duration-200"
              >Service</a
            >
          </li>
          <li class="mx-4">
            <a href="/team" class="hover:text-[#58259e] duration-200"
              >Team Member</a
            >
          </li>
          <li class="mx-4">
            <a href="/works" class="hover:text-[#58259e] duration-200">Works</a>
          </li>
          <li class="mx-4">
            <a href="/msg" class="hover:text-[#58259e] duration-200">Message</a>
          </li>
          <li class="mx-4">
            <a href="/login" class="hover:text-[#58259e] duration-200"
              >Logout</a
            >
          </li>
        </ul>

        <div class="header__btns flex items-center font-semibold">
          <!-- lang -->
          <div class="lang-btn lang-menu cursor-pointer relative">
            <div
              @click="showLang"
              class="lang-element lang-area flex items-center"
            >
              <span class="lang-element text-xl mr-2" lang-data="en">Uzb</span>
              <img :src="uzb" alt="lang-flag" class="lang-element w-6" />
            </div>
            <ul
              v-if="isOpenLang"
              class="langList absolute top-[45px] right-0 z-20 w-[100px] p-1 shadow-lg flex-col bg-white rounded-lg duration-200"
            >
              <li
                class="flex items-center hover:text-[#58259e] hover:bg-[#57259e20] duration-200 px-3 py-[6px] rounded-md"
              >
                <span class="text-lg mr-2" lang-data="uz">Uzb</span>
                <img :src="uzb" alt="lang-flag" class="w-6" />
              </li>
              <li
                class="flex items-center hover:text-[#58259e] hover:bg-[#57259e20] duration-200 px-3 py-[6px] rounded-md"
              >
                <span class="text-lg mr-2" lang-data="ru">Rus</span>
                <img :src="rus" alt="lang-flag" class="w-6" />
              </li>
              <li
                class="flex items-center hover:text-[#58259e] hover:bg-[#57259e20] duration-200 px-3 py-[6px] rounded-md"
              >
                <span class="text-lg mr-2" lang-data="en">Eng</span>
                <img :src="eng" alt="lang-flag" class="w-6" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
