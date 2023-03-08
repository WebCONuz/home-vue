<script setup>
import { onMounted, ref } from "vue";
import logoImg from "../../assets/images/homedev.png";
import burger from "../../assets/icons/menu.svg";
import close from "../../assets/icons/close.png";

import eng from "../../assets/images/eng.png";
import rus from "../../assets/images/rus.png";
import uzb from "../../assets/images/uzb.png";

const isOpenLang = ref(false);
const isOpenMenu = ref(false);
const scrolling = ref(false);

function showLang() {
  isOpenLang.value = !isOpenLang.value;
  isOpenMenu.value = false;
}
function showMenu() {
  isOpenMenu.value = !isOpenMenu.value;
  isOpenLang.value = false;
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
      'bg-white py-4 shadow-md': scrolling,
      'bg-white shadow-md': isOpenMenu,
      'py-6': !scrolling,
    }"
    class="header w-full sticky top-0 left-0 z-20 duration-200"
  >
    <div class="container">
      <div class="flex items-center sm:items-center justify-between">
        <!-- logo -->
        <a href="/#intro" class="logo">
          <h2 class="flex items-baseline">
            <img :src="logoImg" alt="logo" class="w-[30px] sm:w-8" />
            <span
              class="text-color font-bold hidden sm:block sm:ml-2 text-2xl sm:text-3xl md:text-3xl"
              >HomeDev</span
            >
          </h2>
        </a>

        <div class="header__btns flex items-center font-semibold">
          <!-- lang -->
          <div class="lang-btn lang-menu cursor-pointer relative">
            <div
              @click="showLang"
              class="lang-element lang-area flex items-center"
            >
              <span class="lang-element text-xl mr-2" lang-data="en">Lang</span>
              <!-- <img :src="uzb" alt="lang-flag" class="lang-element w-6" /> -->
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

          <!-- menu -->
          <div
            @click="showMenu"
            class="menu-btn menu-element nav-menu cursor-pointer relative flex items-baseline sm:items-center ml-7"
          >
            <span class="menu-element text-xl mr-2 hidden sm:block">Menu</span>
            <img
              v-if="!isOpenMenu"
              :src="burger"
              alt="burger"
              class="menu-element menu-burder block w-6"
            />
            <img
              v-else="!isOpenMenu"
              :src="close"
              alt="close"
              class="menu-element menu-close w-6 scale-[75%]"
            />
            <ul
              :class="{
                flex: isOpenMenu,
                hidden: !isOpenMenu,
                'active-top': scrolling,
              }"
              class="menuList fixed top-[80.5px] sm:top-[91px] right-0 z-20 w-full p-4 md:p-1 shadow-lg flex-col bg-white md:rounded-lg duration-200 md:w-[170px] md:absolute md:top-[47px] md:right-0"
            >
              <li>
                <a
                  href="/#intro"
                  class="hover:text-[#58259e] hover:bg-[#57259e20] duration-200 text-xl px-10 md:px-3 py-4 md:py-2 block rounded-md"
                  >Home</a
                >
              </li>
              <li>
                <a
                  href="/#about"
                  class="hover:text-[#58259e] hover:bg-[#57259e20] duration-200 text-xl px-10 md:px-3 py-4 md:py-2 block rounded-md"
                  >About us</a
                >
              </li>
              <li>
                <a
                  href="/#service"
                  class="hover:text-[#58259e] hover:bg-[#57259e20] duration-200 text-xl px-10 md:px-3 py-4 md:py-2 block rounded-md"
                  >Services</a
                >
              </li>
              <li>
                <a
                  href="/#portfolio"
                  class="hover:text-[#58259e] hover:bg-[#57259e20] duration-200 text-xl px-10 md:px-3 py-4 md:py-2 block rounded-md"
                  >Portfolio</a
                >
              </li>
              <li>
                <a
                  href="/#team"
                  class="hover:text-[#58259e] hover:bg-[#57259e20] duration-200 text-xl px-10 md:px-3 py-4 md:py-2 block rounded-md"
                  >Our Team</a
                >
              </li>
              <li>
                <a
                  href="/#contact"
                  class="hover:text-[#58259e] hover:bg-[#57259e20] duration-200 text-xl px-10 md:px-3 py-4 md:py-2 block rounded-md"
                  >Contact</a
                >
              </li>
              <li>
                <router-link
                  to="/login"
                  class="hover:text-[#58259e] hover:bg-[#57259e20] duration-200 text-xl px-10 md:px-3 py-4 md:py-2 block rounded-md"
                  >Login</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
@media screen and (max-width: 768px) {
  .menuList {
    border-top: 1px solid rgba(0, 0, 0, 0.3);
  }
  .menuList.active-top {
    top: 75px;
  }
}
@media screen and (max-width: 640px) {
  .menuList.active-top {
    top: 64px;
  }
}
</style>
