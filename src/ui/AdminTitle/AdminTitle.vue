<script setup>
const props = defineProps({
  link: String,
  title: String,
  btnText: String,
});
</script>

<template>
  <div class="flex items-center justify-between">
    <h2 class="py-5 text-2xl font-bold text-center text-violet-700 capitalize">
      {{ props.title }}
    </h2>

    <router-link
      :to="props.link"
      class="flex items-center hover:bg-green-600 py-2 px-3 rounded-md duration-200 bg-green-500 text-white"
    >
      <i class="bx bx-message-square-add text-xl mr-1"></i>
      <span>{{ props.btnText }}</span>
    </router-link>
  </div>
</template>

<style scoped></style>
