<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { toast } from "vue3-toastify";

const store = useStore();
const router = useRouter();

const full_name = ref("");
const email = ref("");
const password = ref("");
const is_creator = ref(false);

function addAdmin(e) {
  e.preventDefault();
  const params = {
    full_name: full_name.value,
    email: email.value,
    password: password.value,
    is_creator: is_creator.value,
  };
  if (
    params.full_name.length === 0 ||
    params.email.length === 0 ||
    params.password.length === 0
  ) {
    toast.warning("Formalar to'liq to'ldirilmagan");
  } else {
    store
      .dispatch("ADD_ADMIN", params)
      .then((response) => {
        if (response.status === 201) {
          toast.success("Create new admin");
          router.push({ path: "/admin/all" });
        } else if (response.response.status === 403) {
          toast.error("Token expired");
          window.localStorage.clear();
          router.push({ path: "/login" });
        }
      })
      .catch((err) => console.log(err));
  }
}
</script>

<template>
  <div class="container min-h-screen flex flex-col items-center justify-center">
    <div class="flex justify-between items-center w-[55%] mb-6">
      <h1 class="text-center text-2xl font-semibold text-violet-700">
        Add new Admin
      </h1>
      <router-link
        to="/admin/all"
        class="block hover:bg-gray-600 py-2 px-5 rounded-[25px] duration-200 bg-gray-400 text-white"
      >
        All Admins
      </router-link>
    </div>
    <form @submit="addAdmin" class="block w-[55%]">
      <div class="w-full p-4 bg-gray-200 rounded-lg">
        <label for="full_name" class="block w-full mb-4">
          <p class="text-gray-600 mb-1">Full name:</p>
          <input
            v-model="full_name"
            id="full_name"
            type="text"
            class="w-full border border-gray-200 rounded-md py-2 px-4 focus:outline-none text-[#333333d8] focus:ring-4 focus:ring-violet-400"
            placeholder="Admin fullname"
            name="full_name"
          />
        </label>
        <label for="email" class="block w-full mb-4">
          <p class="text-gray-600 mb-1">Email:</p>
          <input
            v-model="email"
            id="email"
            type="text"
            class="w-full border border-gray-200 rounded-md py-2 px-4 focus:outline-none text-[#333333d8] focus:ring-4 focus:ring-violet-400"
            placeholder="Email"
            name="email"
          />
        </label>
        <label for="password" class="block w-full mb-4">
          <p class="text-gray-600 mb-1">Password:</p>
          <input
            v-model="password"
            id="password"
            type="password"
            class="w-full border border-gray-200 rounded-md py-2 px-4 focus:outline-none text-[#333333d8] focus:ring-4 focus:ring-violet-400"
            placeholder="Password"
            name="password"
          />
        </label>

        <label for="is_creator" class="block w-full">
          <p class="text-gray-600 mb-1">Is creator:</p>
        </label>
        <select
          v-model="is_creator"
          name="is_creator"
          id="is_creator"
          class="w-full border border-gray-200 rounded-md py-2 px-4 focus:outline-none mb-4 text-[#333333d8] focus:ring-4 focus:ring-violet-400"
        >
          <option value="false" selected>false</option>
          <option value="true">true</option>
        </select>
        <input
          type="submit"
          class="py-2 px-8 rounded-md bg-green-500 text-white"
          value="Add"
        />
        <input
          type="reset"
          class="py-2 px-8 rounded-md bg-orange-500 text-white ml-2"
          value="Reset"
        />
      </div>
    </form>
  </div>
</template>

<style scoped></style>
