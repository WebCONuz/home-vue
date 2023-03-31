<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";

import TeamCard from "@/ui/TeamCard/TeamCard.vue";

const { state } = useStore();
const store = useStore();
const { t } = useI18n({ useScope: "global" });

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

onMounted(async () => {
  await store.dispatch("fetchTeam");
  teamSlide();
});
</script>

<template>
  <section id="team" class="team pt-8 pb-12 lg:py-16">
    <div class="container w-full sm:w-[85%] pt-4">
      <h2
        class="font-bold mb-3 sm:mb-6 md:mb-7 lg:mb-8 xl:mb-9 2xl:mb-10 text-center leading-[45px] text-[30px] md:leading-[50px] md:text-[35px] lg:leading-[60px] lg:text-[42px] xl:text-5xl xl:leading-[70px]"
      >
        {{ t("team.title") }}
      </h2>
      <div v-if="state.getTeam.team.length" class="team__slider owl-carousel">
        <TeamCard
          v-for="(item, index) in state.getTeam.team"
          :teamImg="item.avatar_img_url"
          :name="item.full_name"
          :job="item.job"
          :text="item.description"
        />
      </div>

      <div v-else class="bg-red-100 text-center text-2xl py-10 rounded-md">
        <p class="text-2xl mb-4 text-gray-600">
          {{ t("team.empty") }}
        </p>
        <i class="bx bxs-user-x text-8xl text-gray-500"></i>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
