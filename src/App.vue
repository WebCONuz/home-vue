<script setup>
import { RouterView } from "vue-router";
import Header from "@/components/Header/Header.vue";
</script>

<template>
  <div class="">
    <Header />
    <main class="">
      <RouterView />
    </main>
  </div>
</template>
