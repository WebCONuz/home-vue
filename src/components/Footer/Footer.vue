<script setup>
import { ref, onMounted } from "vue";

const year = ref(0);
function getNowYear() {
  year.value = new Date().getFullYear();
}

onMounted(() => {
  getNowYear();
});
</script>

<template>
  <footer id="footer" class="footer mb-10 md:mb-0">
    <div class="container w-full">
      <p class="text-center text-lg py-6 border-t border-gray-300">
        <a href="#intro" class="cursor-pointer text-gray-500"
          >&copy; Copyright
          {{ year }}
          HomeDev</a
        >
      </p>
    </div>
  </footer>
</template>

<style scoped></style>
