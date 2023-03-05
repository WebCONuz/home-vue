<script setup>
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import teamImg from "@/assets/images/man.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const modules = [Pagination, Navigation];
</script>

<template>
  <section id="team" class="team pt-8 pb-12 lg:py-16">
    <div class="container w-full sm:w-[85%] pt-4">
      <h2
        class="font-bold mb-3 sm:mb-6 md:mb-7 lg:mb-8 xl:mb-9 2xl:mb-10 text-center leading-[45px] text-[30px] md:leading-[50px] md:text-[35px] lg:leading-[60px] lg:text-[42px] xl:text-5xl xl:leading-[70px]"
      >
        Bizning Jamoa
      </h2>
      <swiper
        :modules="modules"
        :slides-per-view="3"
        :space-between="30"
        navigation
        :pagination="{ clickable: true }"
      >
        <swiper-slide>
          <div class="team__slider--item flex flex-col items-center">
            <img
              :src="teamImg"
              alt="card-img"
              class="mb-[-80px] relative z-10"
              style="width: 60%"
            />
            <div
              class="card-body bg-color py-4 px-5 flex flex-col justify-end h-[230px] rounded-3xl"
            >
              <h3 class="mb-2 text-lg text-white text-center uppercase">
                Husanboy Mansurov
              </h3>
              <p
                class="text-white text-center text-base h-[4.69rem] overflow-hidden"
              >
                Product manager<br />
                <span class="text-[#ffffffc2]"
                  >20+ yillik tajribaga ega fullstack dasturchi.</span
                >
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="team__slider--item flex flex-col items-center">
            <img
              :src="teamImg"
              alt="card-img"
              class="mb-[-80px] relative z-10"
              style="width: 60%"
            />
            <div
              class="card-body bg-color py-4 px-5 flex flex-col justify-end h-[230px] rounded-3xl"
            >
              <h3 class="mb-2 text-lg text-white text-center uppercase">
                Husanboy Mansurov
              </h3>
              <p
                class="text-white text-center text-base h-[4.69rem] overflow-hidden"
              >
                Product manager<br />
                <span class="text-[#ffffffc2]"
                  >20+ yillik tajribaga ega fullstack dasturchi.</span
                >
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="team__slider--item flex flex-col items-center">
            <img
              :src="teamImg"
              alt="card-img"
              class="mb-[-80px] relative z-10"
              style="width: 60%"
            />
            <div
              class="card-body bg-color py-4 px-5 flex flex-col justify-end h-[230px] rounded-3xl"
            >
              <h3 class="mb-2 text-lg text-white text-center uppercase">
                Husanboy Mansurov
              </h3>
              <p
                class="text-white text-center text-base h-[4.69rem] overflow-hidden"
              >
                Product manager<br />
                <span class="text-[#ffffffc2]"
                  >20+ yillik tajribaga ega fullstack dasturchi.</span
                >
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="team__slider--item flex flex-col items-center">
            <img
              :src="teamImg"
              alt="card-img"
              class="mb-[-80px] relative z-10"
              style="width: 60%"
            />
            <div
              class="card-body bg-color py-4 px-5 flex flex-col justify-end h-[230px] rounded-3xl"
            >
              <h3 class="mb-2 text-lg text-white text-center uppercase">
                Husanboy Mansurov
              </h3>
              <p
                class="text-white text-center text-base h-[4.69rem] overflow-hidden"
              >
                Product manager<br />
                <span class="text-[#ffffffc2]"
                  >20+ yillik tajribaga ega fullstack dasturchi.</span
                >
              </p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style scoped></style>
