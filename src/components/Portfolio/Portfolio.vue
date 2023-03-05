<script setup>
import phoneImg from "@/assets/images/phone.png";
import mobileWork from "@/assets/images/portfolio/mobile_work2.jpg";
import pcImg from "@/assets/images/pc.png";
import pcWork from "@/assets/images/portfolio/pc_work2.jpg";
import bgAdventages from "@/assets/images/bg_adventages_1.png";
</script>

<template>
  <section id="portfolio" class="portfolio pt-8 pb-12 lg:py-16">
    <div class="container w-full sm:w-[95%] pt-4">
      <h2
        class="font-bold mb-5 sm:mb-6 md:mb-7 lg:mb-8 xl:mb-9 2xl:mb-10 text-center leading-[45px] text-[30px] md:leading-[50px] md:text-[35px] lg:leading-[60px] lg:text-[42px] xl:text-5xl xl:leading-[70px]"
      >
        Bizning loyihalar
      </h2>
      <div class="relative">
        <div class="flex items-center justify-center relative z-10">
          <div
            class="phone w-[64px] sm:w-[95px] lg:w-[120px] lg:ml-[55px] xl:w-[150px] xl:ml-[75px] relative"
          >
            <img
              :src="phoneImg"
              alt="phone"
              class="w-full relative top-0 -right-3 sm:left-0 z-10"
            />
            <img
              :src="mobileWork"
              alt="site-mobile"
              class="phone_bg absolute top-[2px] left-[28%] sm:left-[11%] w-[52px] h-[113px] rounded-xl sm:rounded-2xl sm:top-1 sm:w-[73px] sm:h-[165px] lg:top-2 lg:w-[95px] lg:h-[205px] xl:w-[120px] xl:h-[255px]"
            />
          </div>
          <div
            class="desctop w-[300px] sm:ml-[20px] sm:w-[400px] lg:ml-[40px] lg:w-[500px] xl:w-[581px] xl:ml-[75px] relative"
          >
            <img
              :src="pcImg"
              alt="pc"
              class="w-full relative top-0 left-0 z-10"
            />
            <img
              :src="pcWork"
              alt="site-pc"
              class="desctop_bg absolute top-2 left-[11%] w-[233px] h-[155px] sm:top-3 sm:w-[310px] sm:h-[200px] lg:top-4 lg:w-[390px] lg:h-[245px] xl:w-[455px] xl:h-[290px]"
            />
          </div>
        </div>
        <div id="work-title" class="w-full mt-5 lg:w-[600px] lg:ml-[15%]">
          <a
            id="portfolio-link"
            href="#"
            class="text-[#00282F] block font-semibold text-lg text-center sm:text-xl lg:text-left lg:text-2xl xl:text-3xl hover:text-[#58259e] duration-200"
          >
            Online ta'lim platformasi.
          </a>
          <ul
            class="portfolio-nav flex justify-center lg:justify-start mt-2 sm:mt-4"
          >
            <li
              class="active w-[25px] text-base sm:text-lg lg:text-xl sm:w-[30px] lg:w-[35px] h-[25px] sm:h-[30px] lg:h-[35px] hover:bg-[#58259e] hover:border-[#58259e] hover:text-white duration-200 cursor-pointer border border-gray-400 mr-2 rounded lg:rounded-md flex items-center justify-center"
            >
              1
            </li>
            <li
              class="w-[25px] text-base sm:text-lg lg:text-xl sm:w-[30px] lg:w-[35px] h-[25px] sm:h-[30px] lg:h-[35px] hover:bg-[#58259e] hover:border-[#58259e] hover:text-white duration-200 cursor-pointer border border-gray-400 mr-2 rounded lg:rounded-md flex items-center justify-center"
            >
              2
            </li>
            <li
              class="w-[25px] text-base sm:text-lg lg:text-xl sm:w-[30px] lg:w-[35px] h-[25px] sm:h-[30px] lg:h-[35px] hover:bg-[#58259e] hover:border-[#58259e] hover:text-white duration-200 cursor-pointer border border-gray-400 mr-2 rounded lg:rounded-md flex items-center justify-center"
            >
              3
            </li>
            <li
              class="w-[25px] text-base sm:text-lg lg:text-xl sm:w-[30px] lg:w-[35px] h-[25px] sm:h-[30px] lg:h-[35px] hover:bg-[#58259e] hover:border-[#58259e] hover:text-white duration-200 cursor-pointer border border-gray-400 mr-2 rounded lg:rounded-md flex items-center justify-center"
            >
              4
            </li>
            <li
              class="w-[25px] text-base sm:text-lg lg:text-xl sm:w-[30px] lg:w-[35px] h-[25px] sm:h-[30px] lg:h-[35px] hover:bg-[#58259e] hover:border-[#58259e] hover:text-white duration-200 cursor-pointer border border-gray-400 mr-2 rounded lg:rounded-md flex items-center justify-center"
            >
              5
            </li>
          </ul>
        </div>
        <img
          :src="bgAdventages"
          alt="bg-adventages"
          class="w-[150px] sm:w-[170px] absolute z-0 -left-[5%] -top-[8%] sm:-top-[5%] lg:hidden"
        />
        <img
          :src="bgAdventages"
          alt="bg-adventages"
          class="hidden absolute z-0 lg:right-[7%] lg:block lg:-top-[7%] lg:w-[276px] xl:-top-[15%]"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.portfolio-nav > li.active {
  border-color: #58259e;
  background-image: linear-gradient(to bottom, #8c3af9, #58259e);
  color: #fff;
}

@media screen and (max-width: 400px) {
  #portfolio .phone {
    width: 58px;
  }
  #portfolio .phone .phone_bg {
    width: 48px;
    height: 102px;
  }
  #portfolio .desctop {
    width: 260px;
  }
  #portfolio .desctop .desctop_bg {
    width: 205px;
    height: 130px;
  }
}

@media screen and (max-width: 350px) {
  #portfolio .desctop {
    width: 230px;
  }
  #portfolio .desctop .desctop_bg {
    width: 180px;
    height: 115px;
  }
}
</style>
