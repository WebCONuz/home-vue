<script setup>
import AdminSidebar from "@/components/AdminSidebar/AdminSidebar.vue";
</script>

<template>
  <main class="main flex">
    <AdminSidebar />
    <div class="px-4 w-[80%]">
      <h1>{{ $route.params.id }}</h1>
      <router-view></router-view>
    </div>
  </main>
</template>

<style scoped></style>
