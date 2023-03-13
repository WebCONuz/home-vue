<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { toast } from "vue3-toastify";
import axios from "@/service/axios";

const router = useRouter();
const route = useRoute();

const id = route.params.id;
const oldAdmin = ref(null);

let full_name;
let email;
let is_creator;
let password;

// Created & Mounted
async function getOldData() {
  try {
    const token = window.localStorage.getItem("token");
    const response = await axios.get(`/admin/${id}`, {
      headers: {
        Authorization: `Barear ${token}`,
      },
    });
    oldAdmin.value = response.data.data;
    full_name = oldAdmin.value.full_name;
    email = oldAdmin.value.email;
    is_creator = oldAdmin.value.is_creator;
  } catch (err) {
    if (err.response.status === 403) {
      toast.error("Admin ushbu huquqqa ega emas!");
      router.push({ path: "/admin/all" });
      //   window.localStorage.clear();
    } else {
      console.log(err);
    }
  }
}
onMounted(() => {
  getOldData();
});

// Handle input values
function getFullname(e) {
  full_name = e.target.value;
}
function getEmail(e) {
  email = e.target.value;
}
function getPassword(e) {
  password = e.target.value;
}
function getIscreator(e) {
  is_creator = e.target.value;
}

// Submit Form
async function editAdmin(e) {
  e.preventDefault();
  const token = window.localStorage.getItem("token");
  if (full_name.length === 0 || email.length === 0 || email.password === 0) {
    toast.warning("Formalar to'liq to'ldirilmagan");
  } else {
    try {
      let formData = {
        full_name,
        email,
        is_creator,
        password,
      };
      const response = await axios.put(`/admin/${id}`, formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Barear ${token}`,
        },
      });
      if (response.status === 200) {
        toast.success(`Updated Admin: ${id}`);
        router.push({ path: "/admin/all" });
      } else {
        console.log(response);
      }
    } catch (err) {
      if (err.response && err.response.status === 403) {
        toast.error(err.response.data.message);
      } else {
        console.log(err);
      }
    }
  }
}
</script>

<template>
  <div class="container min-h-screen flex flex-col items-center justify-center">
    <div class="flex justify-between items-center w-[55%] mb-6">
      <h1 class="text-center text-2xl font-semibold text-violet-700">
        Edit Admin: {{ id }}
      </h1>
      <router-link
        to="/admin/all"
        class="block hover:bg-gray-600 py-2 px-5 rounded-[25px] duration-200 bg-gray-400 text-white"
      >
        All Admins
      </router-link>
    </div>
    <form @submit="editAdmin" class="block w-[55%]">
      <div class="w-full p-4 bg-gray-200 rounded-lg">
        <label for="full_name" class="block w-full mb-4">
          <p class="text-gray-600 mb-1">Full name:</p>
          <input
            :value="oldAdmin ? oldAdmin.full_name : ''"
            @input="getFullname"
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
            :value="oldAdmin ? oldAdmin.email : ''"
            @input="getEmail"
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
            @input="getPassword"
            id="password"
            type="password"
            class="w-full border border-gray-200 rounded-md py-2 px-4 focus:outline-none text-[#333333d8] focus:ring-4 focus:ring-violet-400"
            placeholder="Password"
            name="password"
            minlength="6"
            required
          />
        </label>

        <label for="is_creator" class="block w-full">
          <p class="text-gray-600 mb-1">Is creator:</p>
        </label>
        <select
          :value="oldAdmin ? oldAdmin.is_creator : ''"
          @input="getIscreator"
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
