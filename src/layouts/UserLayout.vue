<script setup>
import Header from "@/components/Header/Header.vue";
import PcSidebar from "@/components/Sidebar/PcSidebar.vue";
import MobileSidebar from "@/components/Sidebar/MobileSidebar.vue";
import Home from "@/views/Home.vue";
import Footer from "@/components/Footer/Footer.vue";
</script>

<template>
  <Header />
  <PcSidebar />
  <MobileSidebar />
  <main class="main">
    <Home />
  </main>
  <Footer />
</template>

<style scoped></style>
