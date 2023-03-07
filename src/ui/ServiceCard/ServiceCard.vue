<script setup>
const props = defineProps({
  title: String,
  text: String,
  cardImg: String,
});
</script>

<template>
  <div
    class="service__carousel--item flex flex-col border border-gray-200 py-6 px-3 rounded-md bg-white items-center relative overflow-hidden"
  >
    <div class="w-full">
      <img :src="cardImg" alt="service" class="block mx-auto" />
    </div>
    <h3
      class="text-2xl lg:text-xl xl:text-2xl font-semibold mb-3 mt-6 text-center"
    >
      {{ title }}
    </h3>
    <p
      class="text-base leading-6 text-[#00282F] h-[7.75rem] overflow-hidden text-center"
    >
      {{ text }}
    </p>
    <button
      class="bg-color border-2 lg:text-sm xl:text-base border-[#58259e] py-2 px-4 rounded-md mt-3 hover:text-[#58259e] text-white duration-200"
    >
      Kursga yozilish
    </button>
  </div>
</template>

<style scoped>
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
