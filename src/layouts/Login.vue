<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { toast } from "vue3-toastify";
import Footer from "@/components/Footer/Footer.vue";

const store = useStore();
const router = useRouter();

const email = ref("");
const password = ref("");

function useAuth(e) {
  e.preventDefault();
  const params = {
    email: email.value,
    password: password.value,
  };
  if (params.email.length === 0 || params.password.length === 0) {
    toast.warning("Formalar to'liq to'ldirilmagan");
  } else {
    store.dispatch("LOGIN_ADMIN", params).then((response) => {
      if (response.status === 201) {
        toast.success("Login successfully");
        router.push({ path: "/admin/service" });
      } else {
        toast.error(response.response.data.message);
      }
    });
  }
}
</script>

<template>
  <main class="main">
    <div
      class="container min-h-[76vh] flex flex-col items-center justify-center"
    >
      <h1 class="text-center mb-3 text-3xl font-semibold text-violet-700">
        Enter Adminstration
      </h1>
      <form
        @submit="useAuth"
        class="block sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[55%] 2xl:w-[40%]"
      >
        <div class="w-full p-4 bg-gray-200 rounded-lg">
          <label for="adminEmail" class="block w-full mb-4">
            <p class="text-lg mb-2">Login:</p>
            <input
              v-model="email"
              id="adminEmail"
              type="text"
              class="w-full border border-gray-200 rounded-md py-2 px-4 focus:outline-none text-[#333333d8] focus:ring-4 focus:ring-violet-400"
              placeholder="example@gmail.com"
            />
          </label>
          <label for="adminPassword" class="block w-full mb-4">
            <p class="text-lg mb-2">Password:</p>
            <input
              v-model="password"
              id="adminPassword"
              type="password"
              class="w-full border border-gray-200 rounded-md py-2 px-4 focus:outline-none text-[#333333d8] focus:ring-4 focus:ring-violet-400"
              placeholder="••••••••"
            />
          </label>
          <input
            type="submit"
            class="py-2 px-8 rounded-md bg-green-500 text-white"
            value="Log in"
          />
        </div>
      </form>
      <div class="text-center py-6">
        <router-link
          to="/"
          class="text-lg text-gray-400 hover:text-gray-900 duration-200"
          >Bosh sahifaga qaytish</router-link
        >
      </div>
    </div>
  </main>
  <Footer />
</template>

<style scoped>
.main {
  min-height: calc(100vh - 77px);
}
</style>
