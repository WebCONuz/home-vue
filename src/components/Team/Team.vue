<script setup>
import { onMounted } from "vue";
import teamImg from "@/assets/images/man.png";
import TeamCard from "@/ui/TeamCard/TeamCard.vue";

function teamSlide() {
  const owl2 = $(".team__slider");
  owl2.owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    margin: 40,
    responsive: {
      0: {
        items: 1,
      },
      640: {
        items: 2,
      },
      1024: {
        items: 3,
      },
    },
  });
}

onMounted(() => {
  teamSlide();
});
</script>

<template>
  <section id="team" class="team pt-8 pb-12 lg:py-16">
    <div class="container w-full sm:w-[85%] pt-4">
      <h2
        class="font-bold mb-3 sm:mb-6 md:mb-7 lg:mb-8 xl:mb-9 2xl:mb-10 text-center leading-[45px] text-[30px] md:leading-[50px] md:text-[35px] lg:leading-[60px] lg:text-[42px] xl:text-5xl xl:leading-[70px]"
      >
        Bizning Jamoa
      </h2>
      <div class="team__slider owl-carousel">
        <TeamCard
          :teamImg="teamImg"
          name="Axror Jumayev"
          job="Team Lead"
          text="20+ yillik tajribaga ega fullstack dasturchi."
        />
        <TeamCard
          :teamImg="teamImg"
          name="Axror Jumayev"
          job="Team Lead"
          text="20+ yillik tajribaga ega fullstack dasturchi."
        />
        <TeamCard
          :teamImg="teamImg"
          name="Axror Jumayev"
          job="Team Lead"
          text="20+ yillik tajribaga ega fullstack dasturchi."
        />
        <TeamCard
          :teamImg="teamImg"
          name="Axror Jumayev"
          job="Team Lead"
          text="20+ yillik tajribaga ega fullstack dasturchi."
        />
        <TeamCard
          :teamImg="teamImg"
          name="Axror Jumayev"
          job="Team Lead"
          text="20+ yillik tajribaga ega fullstack dasturchi."
        />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
