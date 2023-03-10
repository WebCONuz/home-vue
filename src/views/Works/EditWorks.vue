<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { toast } from "vue3-toastify";
import axios from "@/service/axios";

const router = useRouter();
const route = useRoute();

const id = route.params.id;
const oldWork = ref(null);

let title;
let work_link;
let lang;
let work_pc;
let work_phone;

// Created & Mounted
async function getOldData() {
  try {
    const response = await axios.get(`/works/${id}`);
    oldWork.value = response.data.data;

    title = oldWork.value.title;
    work_link = oldWork.value.work_link;
    lang = oldWork.value.lang;
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
function getWorklink(e) {
  work_link = e.target.value;
}
function getLang(e) {
  lang = e.target.value;
}

const uploadPc = (event) => {
  work_pc = event.target.files[0];
};
const uploadPhone = (event) => {
  work_phone = event.target.files[0];
};

// Submit Form
async function editWork(e) {
  e.preventDefault();
  const token = window.localStorage.getItem("token");
  if (title.length === 0 || work_link.length === 0 || lang.length === 0) {
    toast.warning("Formalar to'liq to'ldirilmagan");
  } else {
    if (work_phone && work_pc) {
      try {
        let formData = new FormData();
        formData.append("title", title);
        formData.append("work_link", work_link);
        formData.append("work_pc", work_pc);
        formData.append("work_phone", work_phone);
        formData.append("lang", lang);
        const response = await axios.put(`/works/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Barear ${token}`,
          },
        });
        if (response.status === 200) {
          toast.success(`Updated work: ${id}`);
          router.push({ path: "/admin/works" });
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
          work_link,
          lang,
        };
        const response = await axios.put(`/works/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Barear ${token}`,
          },
        });
        if (response.status === 200) {
          toast.success(`Updated work: ${id}`);
          router.push({ path: "/admin/works" });
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
        Work ID: {{ id }}
      </h1>
      <router-link
        to="/admin/works"
        class="block hover:bg-gray-600 py-2 px-5 rounded-[25px] duration-200 bg-gray-400 text-white"
      >
        All Works
      </router-link>
    </div>
    <form
      class="block sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[55%]"
      @submit="editWork"
    >
      <div class="w-full p-4 bg-gray-200 rounded-lg">
        <label for="title" class="block w-full mb-4">
          <p class="text-gray-600 mb-1">Work name:</p>
          <input
            :value="oldWork ? oldWork.title : ''"
            @input="getTitle"
            id="title"
            type="text"
            class="w-full border border-gray-200 rounded-md py-2 px-4 focus:outline-none text-[#333333d8] focus:ring-4 focus:ring-violet-400"
            placeholder="Work name"
            name="title"
          />
        </label>
        <label for="work_link" class="block w-full mb-4">
          <p class="text-gray-600 mb-1">Work link:</p>
          <input
            :value="oldWork ? oldWork.work_link : ''"
            @input="getWorklink"
            id="work_link"
            type="text"
            class="w-full border border-gray-200 rounded-md py-2 px-4 focus:outline-none text-[#333333d8] focus:ring-4 focus:ring-violet-400"
            placeholder="Description"
            name="work_link"
          />
        </label>
        <label for="work_pc" class="block w-full mb-4">
          <p class="text-gray-600 mb-1">Work image file for PC:</p>
          <input
            @change="uploadPc"
            id="work_pc"
            type="file"
            class="w-full block bg-white border border-gray-200 rounded-md py-2 px-4 focus:outline-none text-[#333333d8] focus:ring-4 focus:ring-violet-400"
            placeholder="Select file"
            name="work_pc"
          />
        </label>
        <label for="work_phone" class="block w-full mb-4">
          <p class="text-gray-600 mb-1">Work image file for phone:</p>
          <input
            @change="uploadPhone"
            id="work_phone"
            type="file"
            class="w-full block bg-white border border-gray-200 rounded-md py-2 px-4 focus:outline-none text-[#333333d8] focus:ring-4 focus:ring-violet-400"
            placeholder="Select file"
            name="work_phone"
          />
        </label>
        <label for="lang" class="block w-full">
          <p class="text-gray-600 mb-1">Language:</p>
        </label>
        <select
          :value="oldWork ? oldWork.lang : ''"
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
