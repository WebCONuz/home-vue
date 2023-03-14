<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { toast } from "vue3-toastify";

const store = useStore();

const full_name = ref("");
const email = ref("");
const phone = ref("");
const user_msg = ref("");

function addMessage(e) {
  e.preventDefault();
  const params = {
    full_name: full_name.value,
    email: email.value,
    phone: phone.value,
    user_msg: user_msg.value,
  };
  if (
    params.full_name.length === 0 ||
    params.email.length === 0 ||
    params.phone.length === 0 ||
    params.user_msg.length === 0
  ) {
    toast.warning("Formalar to'liq to'ldirilmagan");
  } else {
    store
      .dispatch("ADD_MESSAGE", params)
      .then((response) => {
        if (response.status === 201) {
          toast.success("Xabaringiz yuborildi.");
          full_name.value = "";
          email.value = "";
          phone.value = "";
          user_msg.value = "";
        } else {
          toast.error(response.response.data.message);
        }
      })
      .catch((err) => console.log(err));
  }
}
</script>

<template>
  <section id="contact" class="contact pt-8 pb-12 lg:py-16">
    <div class="container w-full sm:w-[85%] py-4">
      <h2
        class="font-bold mb-5 sm:mb-6 md:mb-7 lg:mb-8 xl:mb-9 2xl:mb-10 text-center leading-[45px] text-[30px] md:leading-[50px] md:text-[35px] lg:leading-[60px] lg:text-[42px] xl:text-5xl xl:leading-[70px]"
      >
        Aloqa
      </h2>
      <div class="flex flex-col md:flex-row gap-8">
        <div class="w-full md:w-1/2 p-3 md:p-5 bg-white rounded-lg shadow-lg">
          <form @submit="addMessage">
            <h3 class="text-xl md:text-2xl font-semibold text-[#00282F] mb-4">
              Xabar yuborish
            </h3>
            <input
              v-model="full_name"
              type="text"
              id="fullname"
              class="w-full mb-3 md:mb-4 py-2 px-4 placeholder:text-[#00282f63] focus:outline-0 focus:ring focus:ring-[#57259e4f] shadow-md rounded-md border border-gray-200"
              placeholder="Ism-sharif"
            />
            <input
              v-model="email"
              type="email"
              id="email"
              class="w-full mb-3 md:mb-4 py-2 px-4 placeholder:text-[#00282f63] focus:outline-0 focus:ring focus:ring-[#57259e4f] shadow-md rounded-md border border-gray-200"
              placeholder="Email"
            />
            <input
              v-model="phone"
              type="text"
              id="phone"
              class="w-full mb-3 md:mb-4 py-2 px-4 placeholder:text-[#00282f63] focus:outline-0 focus:ring focus:ring-[#57259e4f] shadow-md rounded-md border border-gray-200"
              placeholder="Phone: 90-123-45-67"
            />
            <textarea
              v-model="user_msg"
              class="w-full resize-none mb-3 md:mb-4 h-[120px] md:h-[80px] py-2 px-4 placeholder:text-[#00282f63] focus:outline-0 focus:ring focus:ring-[#57259e4f] shadow-md rounded-md border border-gray-200"
              placeholder="Xabarnoma"
            ></textarea>
            <div class="flex justify-end">
              <button
                class="bg-color py-1 px-5 md:mr-10 rounded-md md:rounded-3xl text-white text-base duration-200"
                type="submit"
              >
                Yuborish
              </button>
            </div>
          </form>
        </div>
        <iframe
          class="w-full h-[300px] md:h-auto md:w-1/2 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d749.6914516822403!2d69.20019182922611!3d41.2704347987047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b7f1f2b9533%3A0x576c942e2c17aa30!2shijabhouse.uz!5e0!3m2!1suz!2s!4v1677511480981!5m2!1suz!2s"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
