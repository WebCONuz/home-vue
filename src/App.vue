<script setup>
import { RouterView } from "vue-router";
import Header from "@/components/Header/Header.vue";
import PcSidebar from "./components/Sidebar/PcSidebar.vue";
import MobileSidebar from "./components/Sidebar/MobileSidebar.vue";
</script>

<template>
  <div class="">
    <Header />
    <PcSidebar />
    <MobileSidebar />
    <main class="">
      <RouterView />
    </main>
  </div>
</template>
