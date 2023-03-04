<script setup>
import adventages from "@/assets/images/bg_adventages_1.png";
import netbook from "@/assets/images/netbook2.png";
</script>

<template>
  <section id="intro" class="pt-12 pb-16 sm:pt-0 md:pt-28 md:mb-20">
    <div
      class="container w-full sm:w-[85%] flex flex-col-reverse flex-wrap md:flex-nowrap md:flex-row items-center relative"
    >
      <h1
        id="main-title"
        class="title absolute hidden md:block lg:left-[4rem] xl:left-[5rem] 2xl:left-[6rem] -top-4 text-5xl lg:text-6xl uppercase font-bold"
      >
        HomeDev
      </h1>
      <div
        class="w-full md:w-[55%] relative"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <h1
          class="font-bold mb-6 pt-12 sm:mt-0 sm:mb-28 text-center md:text-left lg:mb-36 leading-[45px] text-[30px] md:leading-[50px] md:text-[35px] lg:leading-[60px] lg:text-[42px] xl:text-5xl xl:leading-[70px]"
        >
          Biznesingiz uchun <span class="text-violet-800">Foydali</span> IT
          yechimlar
        </h1>
        <a href="#contact">
          <button
            class="order-btn py-[6px] px-6 sm:py-[10px] sm:px-9 rounded-3xl bg-color text-white text-lg sm:text-xl duration-200 mx-auto block md:mx-0"
          >
            Buyurtma berish
          </button>
        </a>
        <img
          :src="adventages"
          alt="bg-adventages"
          class="absolute right-0 top-0 -z-10 w-[200px] hidden md:block"
        />
      </div>
      <div
        class="w-full md:w-[45%] relative overflow-hidden"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <img
          :src="netbook"
          alt="netbook"
          class="w-full md:w-[446px] md:scale-110 md:ml-auto lg:scale-105"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.title {
  z-index: 2;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-color: rgba(0, 0, 0, 0.2);
  -webkit-text-stroke-width: 1px;
}
</style>
