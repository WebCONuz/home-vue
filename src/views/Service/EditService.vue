<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { toast } from "vue3-toastify";
import axios from "@/service/axios";

const router = useRouter();
const route = useRoute();

const id = route.params.id;
const oldService = ref(null);

let title;
let description;
let serviceImg;
let lang;

// Created & Mounted
async function getOldData() {
  try {
    const response = await axios.get(`/services/${id}`);
    oldService.value = response.data.data;
    title = oldService.value.title;
    description = oldService.value.description;
    lang = oldService.value.lang;
  } catch (err) {
    console.log(err);
  }
}
onMounted(() => {
  getOldData();
});

// Handle input values
function getTitle(e) {
  title = e.target.value;
}
function getDescription(e) {
  description = e.target.value;
}
function getLang(e) {
  lang = e.target.value;
}

const uploadFile = (event) => {
  serviceImg = event.target.files[0];
};

// Submit Form
async function editService(e) {
  e.preventDefault();
  const token = window.localStorage.getItem("token");
  if (title.length === 0 || description.length === 0 || lang.length === 0) {
    toast.warning("Formalar to'liq to'ldirilmagan");
  } else {
    if (serviceImg) {
      try {
        let formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("serviceImg", serviceImg);
        formData.append("lang", lang);
        const response = await axios.put(`/services/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Barear ${token}`,
          },
        });
        if (response.status === 200) {
          toast.success(`Updated service: ${id}`);
          router.push({ path: "/admin/service" });
        } else {
          console.log(response);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        let formData = {
          title,
          description,
          lang,
        };
        const response = await axios.put(`/services/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Barear ${token}`,
          },
        });
        if (response.status === 200) {
          toast.success(`Updated service: ${id}`);
          router.push({ path: "/admin/service" });
        } else {
          console.log(response);
        }
      } catch (err) {
        if (err.response.status === 403) {
          toast.error("Token expired");
          window.localStorage.clear();
          router.push({ path: "/login" });
        } else {
          console.log(err);
        }
      }
    }
  }
}
</script>

<template>
  <div class="container min-h-screen flex flex-col items-center justify-center">
    <div class="flex justify-between items-center w-[55%] mb-6">
      <h1 class="text-center text-2xl font-semibold text-violet-700">
        Service ID: {{ id }}
      </h1>
      <router-link
        to="/admin/service"
        class="block hover:bg-gray-600 py-2 px-5 rounded-[25px] duration-200 bg-gray-400 text-white"
      >
        All Services
      </router-link>
    </div>
    <form action="" class="block w-[55%]" @submit="editService">
      <div class="w-full p-4 bg-gray-200 rounded-lg">
        <label for="title" class="block w-full mb-4">
          <p class="text-gray-600 mb-1">Service title:</p>
          <input
            :value="oldService ? oldService.title : ''"
            @input="getTitle"
            id="title"
            type="text"
            class="w-full border border-gray-200 rounded-md py-2 px-4 focus:outline-none text-[#333333d8] focus:ring-4 focus:ring-violet-400"
            placeholder="Service name"
            name="title"
          />
        </label>
        <label for="description" class="block w-full mb-4">
          <p class="text-gray-600 mb-1">Service description:</p>
          <input
            :value="oldService ? oldService.description : ''"
            @input="getDescription"
            id="description"
            type="text"
            class="w-full border border-gray-200 rounded-md py-2 px-4 focus:outline-none text-[#333333d8] focus:ring-4 focus:ring-violet-400"
            placeholder="Description"
            name="description"
          />
        </label>
        <label for="serviceImg" class="block w-full mb-4">
          <p class="text-gray-600 mb-1">Service image:</p>
          <input
            @change="uploadFile"
            id="serviceImg"
            type="file"
            class="w-full block bg-white border border-gray-200 rounded-md py-2 px-4 focus:outline-none text-[#333333d8] focus:ring-4 focus:ring-violet-400"
            placeholder="Select file"
            name="serviceImg"
          />
        </label>
        <label for="lang" class="block w-full">
          <p class="text-gray-600 mb-1">Service language:</p>
        </label>
        <select
          :value="oldService ? oldService.lang : ''"
          @input="getLang"
          name="lang"
          id="lang"
          class="w-full border border-gray-200 rounded-md py-2 px-4 focus:outline-none mb-4 text-[#333333d8] focus:ring-4 focus:ring-violet-400"
        >
          <option value="uz" selected>uz</option>
          <option value="en">en</option>
          <option value="ru">ru</option>
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
