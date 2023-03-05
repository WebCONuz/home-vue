<script setup>
import { onMounted } from "vue";

function clickNavLink(e) {
  console.log(e.target);
  const sidebarLinks = document.querySelectorAll(".mobile-aside > a");
  sidebarLinks.forEach((item) => {
    item.classList.remove("w-[25px]", "h-[25px]", "text-[#58259e]");
    item.classList.add("w-[12px]", "h-[12px]", "text-white");
  });
  e.target.classList.remove("w-[12px]", "h-[12px]", "text-white");
  e.target.classList.add("w-[25px]", "h-[25px]", "text-[#58259e]");
}

function scrollSidebar() {
  const sectionAll = document.querySelectorAll("section[id]");
  const scrollY = window.pageYOffset;
  sectionAll.forEach((item) => {
    const sectionHeight = item.offsetHeight;
    const sectionTop = item.offsetTop - 100;
    const sectionId = item.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      // Mobile ----
      const pcLink = document.querySelector(
        ".mobile-aside > a[href*=" + sectionId + "]"
      );

      const sidebarLinks = document.querySelectorAll(".mobile-aside > a");
      sidebarLinks.forEach((item) => {
        item.classList.remove("w-[25px]", "h-[25px]", "text-[#58259e]");
        item.classList.add("w-[12px]", "h-[12px]", "text-white");
      });
      pcLink.classList.add("w-[25px]", "h-[25px]", "text-[#58259e]");
      pcLink.classList.remove("w-[12px]", "h-[12px]", "text-white");
    }
  });
}

onMounted(() => {
  window.addEventListener("scroll", () => {
    scrollSidebar();
  });
});
</script>

<template>
  <aside
    class="bg-color text-white w-screen fixed bottom-0 left-0 rounded-t-[25px] sm:rounded-t-[40px] py-2 sm:py-4 flex justify-center z-30 md:hidden"
  >
    <div class="mobile-aside flex items-center">
      <a
        href="#intro"
        @click="clickNavLink"
        class="bg-white w-[25px] h-[25px] text-xs text-[#8c3af9] rounded-full mx-[5px] sm:mx-2 flex items-center justify-center"
        >1</a
      >
      <a
        href="#about"
        @click="clickNavLink"
        class="bg-white w-[12px] h-[12px] text-xs text-white rounded-full mx-[5px] sm:mx-2 flex items-center justify-center"
        >2</a
      >
      <a
        href="#service"
        @click="clickNavLink"
        class="bg-white w-[12px] h-[12px] text-xs text-white rounded-full mx-[5px] sm:mx-2 flex items-center justify-center"
        >3</a
      >
      <a
        href="#portfolio"
        @click="clickNavLink"
        class="bg-white w-[12px] h-[12px] text-xs text-white rounded-full mx-[5px] sm:mx-2 flex items-center justify-center"
        >4</a
      >
      <a
        href="#team"
        @click="clickNavLink"
        class="bg-white w-[12px] h-[12px] text-xs text-white rounded-full mx-[5px] sm:mx-2 flex items-center justify-center"
        >5</a
      >
      <a
        href="#contact"
        @click="clickNavLink"
        class="bg-white w-[12px] h-[12px] text-xs text-white rounded-full mx-[5px] sm:mx-2 flex items-center justify-center"
        >6</a
      >
    </div>
  </aside>
</template>

<style scoped></style>
