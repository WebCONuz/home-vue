<script setup>
import { onMounted } from "vue";

function clickNavLink(e) {
  const sidebarLinks = document.querySelectorAll(".aside-list > a");
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
      // PC ----
      const pcLink = document.querySelector(
        ".aside-list > a[href*=" + sectionId + "]"
      );

      const sidebarLinks = document.querySelectorAll(".aside-list > a");
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
    class="fixed z-30 w-[53px] lg:w-[60px] xl:w-[66px] bg-color text-white h-[80vh] left-0 top-[90px] rounded-r-[40px] py-12 flex-col justify-between items-center hidden md:flex"
  >
    <a
      href="#"
      class="w-[37px] h-[37px] lg:w-[42px] lg:h-[42px] xl:w-[45px] xl:h-[45px] rounded-xl lg:rounded-2xl bg-white flex justify-center items-center text-[#58259e] shadow-md"
    >
      <i class="bx bxs-phone text-2xl"></i>
    </a>
    <div class="aside-list flex flex-col items-center">
      <a
        href="#intro"
        @click="clickNavLink"
        class="bg-[white] w-[25px] h-[25px] text-[#58259e] text-xs rounded-full mb-[10px] flex items-center justify-center duration-100"
        >1</a
      >
      <a
        href="#about"
        @click="clickNavLink"
        class="bg-white w-[12px] h-[12px] text-xs text-white rounded-full mb-[10px] flex items-center justify-center duration-100"
        >2</a
      >
      <a
        href="#service"
        @click="clickNavLink"
        class="bg-white w-[12px] h-[12px] text-xs text-white rounded-full mb-[10px] flex items-center justify-center duration-100"
        >3</a
      >
      <a
        @click="clickNavLink"
        href="#portfolio"
        class="bg-white w-[12px] h-[12px] text-xs text-white rounded-full mb-[10px] flex items-center justify-center duration-100"
        >4</a
      >
      <a
        @click="clickNavLink"
        href="#team"
        class="bg-white w-[12px] h-[12px] text-xs text-white rounded-full mb-[10px] flex items-center justify-center duration-100"
        >5</a
      >
      <a
        @click="clickNavLink"
        href="#contact"
        class="bg-white w-[12px] h-[12px] text-xs text-white rounded-full mb-[10px] flex items-center justify-center duration-100"
        >6</a
      >
    </div>
    <ul class="social">
      <li
        class="w-[30px] h-[30px] rounded-full border border-white hover:border-[#086000] flex justify-center items-center duration-200"
      >
        <a
          href="#"
          class="bx bxl-facebook text-white hover:text-white duration-200"
        ></a>
      </li>
      <li
        class="w-[30px] h-[30px] rounded-full border border-white hover:border-[#086000] flex justify-center items-center duration-200 mt-3"
      >
        <a
          href="#"
          class="bx bxl-instagram text-white hover:text-white duration-200"
        ></a>
      </li>
      <li
        class="w-[30px] h-[30px] rounded-full border border-white hover:border-[#086000] flex justify-center items-center duration-200 mt-3"
      >
        <a
          href="#"
          class="bx bxl-twitter text-white hover:text-white duration-200"
        ></a>
      </li>
    </ul>
  </aside>
</template>

<style scoped></style>
