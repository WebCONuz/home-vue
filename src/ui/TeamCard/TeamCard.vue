<script setup>
const props = defineProps({
  teamImg: String,
  name: String,
  job: String,
  text: String,
});
</script>

<template>
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
        {{ name }}
      </h3>
      <p class="text-white text-center text-base h-[4.69rem] overflow-hidden">
        {{ job }}<br />
        <span class="text-[#ffffffc2]">{{ text }}</span>
      </p>
    </div>
  </div>
</template>

<style scoped></style>
