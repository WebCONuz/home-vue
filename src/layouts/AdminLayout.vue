<script setup>
import AdminSidebar from "@/components/AdminSidebar/AdminSidebar.vue";
import adminGuard from "../helper/adminGuard";
import { useRouter } from "vue-router";
import { toast } from "vue3-toastify";

const result = adminGuard();
const router = useRouter();

if (result) {
  router.push({ path: "/admin/service" });
} else {
  toast.warning("Tizimga kirish uchun login qiling");
  router.push({ path: "/login" });
}
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
