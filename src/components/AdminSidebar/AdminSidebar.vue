<script setup>
import logoImg from "@/assets/images/homedev.png";
</script>

<template>
  <div
    class="w-[20%] h-screen px-4 py-8 border-r border-gray-400 flex flex-col"
  >
    <router-link to="/" class="logo mb-6">
      <h2 class="flex items-baseline">
        <img :src="logoImg" alt="logo" class="w-[20px] sm:w-6" />
        <span
          class="text-color font-bold hidden sm:block sm:ml-2 text-lg sm:text-xl md:text-2xl"
          >HomeDev</span
        >
      </h2>
    </router-link>
    <div class="flex flex-col">
      <router-link
        to="/admin/all"
        class="my-1 px-4 py-3 bg-white rounded-md hover:bg-[#58259e1e] block hover:text-[#58259e] duration-200"
      >
        All admins
      </router-link>
      <router-link
        to="/admin/service"
        class="my-1 px-4 py-3 bg-white rounded-md hover:bg-[#58259e1e] block hover:text-[#58259e] duration-200"
      >
        Service
      </router-link>
      <router-link
        to="/admin/team"
        class="my-1 px-4 py-3 bg-white rounded-md hover:bg-[#58259e1e] block hover:text-[#58259e] duration-200"
      >
        Team
      </router-link>
      <router-link
        to="/admin/works"
        class="my-1 px-4 py-3 bg-white rounded-md hover:bg-[#58259e1e] block hover:text-[#58259e] duration-200"
      >
        Works
      </router-link>
      <router-link
        to="/admin/msg"
        class="my-1 px-4 py-3 bg-white rounded-md hover:bg-[#58259e1e] block hover:text-[#58259e] duration-200"
      >
        Message
      </router-link>
    </div>
    <router-link
      to="/login"
      class="px-4 py-2 bg-gray-300 rounded-[25px] hover:bg-gray-700 block hover:text-white duration-200 mt-auto text-center"
    >
      Logout
    </router-link>
  </div>
</template>

<style scoped>
.router-link-active {
  background-color: #58259e !important;
  color: #fff !important;
}
</style>
