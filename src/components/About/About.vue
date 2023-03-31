<script setup>
import VueJsCounter from "vue-js-counter";
import { useI18n } from "vue-i18n";
const { t } = useI18n({ useScope: "global" });
</script>

<template>
  <section id="about" class="py-10 sm:py-16">
    <div class="container w-full sm:w-[95%] pt-4">
      <div class="about__title" data-aos="fade-up" data-aos-duration="800">
        <h2
          class="font-bold text-center mb-4 lg:mb-6 xl:mb-8 max-w-[738px] mx-auto leading-[45px] text-[30px] md:leading-[50px] md:text-[35px] lg:leading-[60px] lg:text-[42px] xl:text-5xl xl:leading-[70px]"
        >
          <!-- Biz haqimizda -->
          {{ t("about.title") }}
        </h2>
        <p
          class="text-[#00282F] font-[500] max-w-[738px] mx-auto md:text-xl md:leading-7 lg:text-2xl lg:leading-8 text-center"
        >
          <span class="text-violet-800 font-semibold">
            {{ t("about.textTitle") }}
          </span>
          - {{ t("about.text") }}
        </p>
      </div>
      <div
        class="flex lg:justify-center flex-wrap lg:flex-nowrap mt-8 sm:mt-12 md:mt-16"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div
          class="w-[50%] lg:max-w-[140px] flex mb-8 lg:mx-10 flex-col items-center"
        >
          <div
            class="about-circle w-[100px] h-[100px] md:w-[120px] md:h-[120px] bg-color flex items-center justify-center rounded-full text-3xl md:text-4xl text-white font-[500]"
          >
            <!-- <span class="text-3xl md:text-4xl text-white font-[500]">15+</span> -->
            <VueJsCounter
              start="0"
              end="15"
              duration="3000"
              thousand="."
              decimal=","
            ></VueJsCounter>
            +
          </div>
          <p
            class="text-sm sm:text-base md:text-xl text-center leading-6 md:leading-8 text-[#00282F] font-[500] mt-3 sm:mt-5 lg:mt-7"
          >
            {{ t("about.stat1") }}
          </p>
        </div>
        <div
          class="w-[50%] lg:max-w-[140px] flex mb-8 lg:mx-10 flex-col items-center"
        >
          <div
            class="about-circle w-[100px] h-[100px] md:w-[120px] md:h-[120px] bg-color flex items-center justify-center rounded-full text-3xl md:text-4xl text-white font-[500]"
          >
            <!-- <span class="text-3xl md:text-4xl text-white font-[500]">10+</span> -->
            <VueJsCounter
              start="0"
              end="10"
              duration="3000"
              thousand="."
              decimal=","
            ></VueJsCounter>
            +
          </div>
          <p
            class="text-sm sm:text-base md:text-xl text-center leading-6 md:leading-8 text-[#00282F] font-[500] mt-3 sm:mt-5 lg:mt-7"
          >
            {{ t("about.stat2") }}
          </p>
        </div>
        <div
          class="w-[50%] lg:max-w-[140px] flex lg:mx-10 flex-col items-center"
        >
          <div
            class="about-circle w-[100px] h-[100px] md:w-[120px] md:h-[120px] bg-color flex items-center justify-center rounded-full text-3xl md:text-4xl text-white font-[500]"
          >
            <!-- <span class="text-3xl md:text-4xl text-white font-[500]">100%</span> -->
            <VueJsCounter
              start="0"
              end="100"
              duration="3000"
              thousand="."
              decimal=","
            ></VueJsCounter>
            %
          </div>
          <p
            class="text-sm sm:text-base md:text-xl text-center leading-6 md:leading-8 text-[#00282F] font-[500] mt-3 sm:mt-5 lg:mt-7"
          >
            {{ t("about.stat3") }}
          </p>
        </div>
        <div
          class="w-[50%] lg:max-w-[140px] flex lg:mx-10 flex-col items-center"
        >
          <div
            class="about-circle w-[100px] h-[100px] md:w-[120px] md:h-[120px] bg-color flex items-center justify-center rounded-full text-3xl md:text-4xl text-white font-[500]"
          >
            <!-- <span class="text-3xl md:text-4xl text-white font-[500]">5+</span> -->
            <VueJsCounter
              start="0"
              end="5"
              duration="3000"
              thousand="."
              decimal=","
            ></VueJsCounter>
            +
          </div>
          <p
            class="text-sm sm:text-base md:text-xl text-center leading-6 md:leading-8 text-[#00282F] font-[500] mt-3 sm:mt-5 lg:mt-7"
          >
            {{ t("about.stat4") }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
