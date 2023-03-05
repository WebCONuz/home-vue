<script setup>
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import cardImg from "@/assets/images/service/bot.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const modules = [Pagination, Navigation];
</script>

<template>
  <section id="service" class="service pt-8 pb-12 lg:py-12 overflow-hidden">
    <div class="container w-full sm:w-[85%] pt-4 relative pb-10">
      <h2
        class="font-bold mb-5 sm:mb-6 md:mb-7 lg:mb-8 xl:mb-9 2xl:mb-10 text-center leading-[45px] text-[30px] md:leading-[50px] md:text-[35px] lg:leading-[60px] lg:text-[42px] xl:text-5xl xl:leading-[70px]"
      >
        Bizning xizmatlar
      </h2>
      <swiper
        :modules="modules"
        :slides-per-view="4"
        :space-between="15"
        navigation
        :pagination="{ clickable: true }"
      >
        <swiper-slide>
          <div
            class="service__carousel--item flex flex-col border border-gray-200 py-6 px-3 rounded-md bg-white items-center relative overflow-hidden"
          >
            <div class="w-full">
              <img :src="cardImg" alt="service" class="block mx-auto" />
            </div>
            <h3
              class="text-2xl lg:text-xl xl:text-2xl font-semibold mb-3 mt-6 text-center"
            >
              Amaliy kurslar
            </h3>
            <p
              class="text-base leading-6 text-[#00282F] h-[7.75rem] overflow-hidden text-center"
            >
              Ko'p yillik tajribaga ega dasturchilardan real loyihalarga
              asoslangan amaliy kurslar.
            </p>
            <button
              class="bg-color border-2 lg:text-sm xl:text-base border-[#58259e] py-2 px-4 rounded-md mt-3 hover:text-[#58259e] text-white duration-200"
            >
              Kursga yozilish
            </button>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="service__carousel--item flex flex-col border border-gray-200 py-6 px-3 rounded-md bg-white items-center relative overflow-hidden"
          >
            <div class="w-full">
              <img :src="cardImg" alt="service" class="block mx-auto" />
            </div>
            <h3
              class="text-2xl lg:text-xl xl:text-2xl font-semibold mb-3 mt-6 text-center"
            >
              Amaliy kurslar
            </h3>
            <p
              class="text-base leading-6 text-[#00282F] h-[7.75rem] overflow-hidden text-center"
            >
              Ko'p yillik tajribaga ega dasturchilardan real loyihalarga
              asoslangan amaliy kurslar.
            </p>
            <button
              class="bg-color border-2 lg:text-sm xl:text-base border-[#58259e] py-2 px-4 rounded-md mt-3 hover:text-[#58259e] text-white duration-200"
            >
              Kursga yozilish
            </button>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="service__carousel--item flex flex-col border border-gray-200 py-6 px-3 rounded-md bg-white items-center relative overflow-hidden"
          >
            <div class="w-full">
              <img :src="cardImg" alt="service" class="block mx-auto" />
            </div>
            <h3
              class="text-2xl lg:text-xl xl:text-2xl font-semibold mb-3 mt-6 text-center"
            >
              Amaliy kurslar
            </h3>
            <p
              class="text-base leading-6 text-[#00282F] h-[7.75rem] overflow-hidden text-center"
            >
              Ko'p yillik tajribaga ega dasturchilardan real loyihalarga
              asoslangan amaliy kurslar.
            </p>
            <button
              class="bg-color border-2 lg:text-sm xl:text-base border-[#58259e] py-2 px-4 rounded-md mt-3 hover:text-[#58259e] text-white duration-200"
            >
              Kursga yozilish
            </button>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="service__carousel--item flex flex-col border border-gray-200 py-6 px-3 rounded-md bg-white items-center relative overflow-hidden"
          >
            <div class="w-full">
              <img :src="cardImg" alt="service" class="block mx-auto" />
            </div>
            <h3
              class="text-2xl lg:text-xl xl:text-2xl font-semibold mb-3 mt-6 text-center"
            >
              Amaliy kurslar
            </h3>
            <p
              class="text-base leading-6 text-[#00282F] h-[7.75rem] overflow-hidden text-center"
            >
              Ko'p yillik tajribaga ega dasturchilardan real loyihalarga
              asoslangan amaliy kurslar.
            </p>
            <button
              class="bg-color border-2 lg:text-sm xl:text-base border-[#58259e] py-2 px-4 rounded-md mt-3 hover:text-[#58259e] text-white duration-200"
            >
              Kursga yozilish
            </button>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="service__carousel--item flex flex-col border border-gray-200 py-6 px-3 rounded-md bg-white items-center relative overflow-hidden"
          >
            <div class="w-full">
              <img :src="cardImg" alt="service" class="block mx-auto" />
            </div>
            <h3
              class="text-2xl lg:text-xl xl:text-2xl font-semibold mb-3 mt-6 text-center"
            >
              Amaliy kurslar
            </h3>
            <p
              class="text-base leading-6 text-[#00282F] h-[7.75rem] overflow-hidden text-center"
            >
              Ko'p yillik tajribaga ega dasturchilardan real loyihalarga
              asoslangan amaliy kurslar.
            </p>
            <button
              class="bg-color border-2 lg:text-sm xl:text-base border-[#58259e] py-2 px-4 rounded-md mt-3 hover:text-[#58259e] text-white duration-200"
            >
              Kursga yozilish
            </button>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style scoped>
#service .swiper-button-next {
  border: 1px solid red !important;
  background-color: green !important;
  display: inline-block !important;
  width: 100px !important;
  height: 100px !important;
}
.service__carousel--item img {
  width: 70px !important;
}
.service__carousel--item::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  background-color: #57259e24;
  transition: 0.2s;
}
.service__carousel--item:hover::before {
  left: -100%;
}
</style>
