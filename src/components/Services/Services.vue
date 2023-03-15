<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";

import ServiceCard from "@/ui/ServiceCard/ServiceCard.vue";

const { state } = useStore();
const store = useStore();

function serviceSlide() {
  const owl1 = $(".service__carousel");
  owl1.owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    margin: 15,
    responsive: {
      0: {
        items: 1,
      },
      640: {
        items: 2,
      },
      768: {
        item: 3,
      },
      1024: {
        items: 4,
      },
    },
  });
}

onMounted(async () => {
  await store.dispatch("fetchServices");
  serviceSlide();
});
</script>

<template>
  <section id="service" class="service pt-8 pb-12 lg:py-12 overflow-hidden">
    <div class="container w-full sm:w-[85%] pt-4 relative pb-10">
      <h2
        class="font-bold mb-5 sm:mb-6 md:mb-7 lg:mb-8 xl:mb-9 2xl:mb-10 text-center leading-[45px] text-[30px] md:leading-[50px] md:text-[35px] lg:leading-[60px] lg:text-[42px] xl:text-5xl xl:leading-[70px]"
      >
        Bizning xizmatlar
      </h2>
      <div
        v-if="state.getServices.services.length"
        class="service__carousel owl-carousel w-full"
      >
        <ServiceCard
          v-for="(item, index) in state.getServices.services"
          :title="item.title"
          :text="item.description"
          :cardImg="'http://localhost:5000/' + item.img_url"
        />
      </div>

      <div v-else class="bg-red-100 text-center text-2xl py-10 rounded-md">
        <p class="text-2xl mb-4 text-gray-600">Hali serviceslar qo'shilmagan</p>
        <i class="bx bx-task-x text-8xl text-gray-500"></i>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
