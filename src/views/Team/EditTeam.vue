<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { toast } from "vue3-toastify";
import axios from "@/service/axios";

const router = useRouter();
const route = useRoute();

const id = route.params.id;
const oldTeam = ref(null);

let full_name;
let job;
let description;
let teamImg;
let lang;

// Created & Mounted
async function getOldData() {
  try {
    const response = await axios.get(`/team/${id}`);
    oldTeam.value = response.data.data;

    full_name = oldTeam.value.full_name;
    job = oldTeam.value.job;
    description = oldTeam.value.description;
    lang = oldTeam.value.lang;
  } catch (err) {
    console.log(err);
  }
}
onMounted(() => {
  getOldData();
});

// Handle input values
function getFullname(e) {
  full_name = e.target.value;
}
function getJob(e) {
  job = e.target.value;
}
function getDescription(e) {
  description = e.target.value;
}
function getLang(e) {
  lang = e.target.value;
}

const uploadFile = (event) => {
  teamImg = event.target.files[0];
};

// Submit Form
async function editTeam(e) {
  e.preventDefault();
  const token = window.localStorage.getItem("token");
  if (
    full_name.length === 0 ||
    job.length === 0 ||
    description.length === 0 ||
    lang.length === 0
  ) {
    toast.warning("Formalar to'liq to'ldirilmagan");
  } else {
    if (teamImg) {
      try {
        let formData = new FormData();
        formData.append("full_name", full_name);
        formData.append("job", job);
        formData.append("description", description);
        formData.append("teamImg", teamImg);
        formData.append("lang", lang);
        const response = await axios.put(`/team/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Barear ${token}`,
          },
        });
        if (response.status === 200) {
          toast.success(`Updated team member: ${id}`);
          router.push({ path: "/admin/team" });
        } else {
          console.log(response);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        let formData = {
          full_name,
          job,
          description,
          lang,
        };
        const response = await axios.put(`/team/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Barear ${token}`,
          },
        });
        if (response.status === 200) {
          toast.success(`Updated team member: ${id}`);
          router.push({ path: "/admin/team" });
        } else {
          console.log("Error", response);
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
        Member ID: {{ id }}
      </h1>
      <router-link
        to="/admin/team"
        class="block hover:bg-gray-600 py-2 px-5 rounded-[25px] duration-200 bg-gray-400 text-white"
      >
        All Team Members
      </router-link>
    </div>
    <form action="" class="block w-[55%]" @submit="editTeam">
      <div class="w-full p-4 bg-gray-200 rounded-lg">
        <label for="full_name" class="block w-full mb-4">
          <p class="text-gray-600 mb-1">Full name:</p>
          <input
            :value="oldTeam ? oldTeam.full_name : ''"
            @input="getFullname"
            id="full_name"
            type="text"
            class="w-full border border-gray-200 rounded-md py-2 px-4 focus:outline-none text-[#333333d8] focus:ring-4 focus:ring-violet-400"
            placeholder="Member fullname"
            name="full_name"
          />
        </label>
        <label for="description" class="block w-full mb-4">
          <p class="text-gray-600 mb-1">Description about new member:</p>
          <input
            :value="oldTeam ? oldTeam.description : ''"
            @input="getDescription"
            id="description"
            type="text"
            class="w-full border border-gray-200 rounded-md py-2 px-4 focus:outline-none text-[#333333d8] focus:ring-4 focus:ring-violet-400"
            placeholder="Description"
            name="description"
          />
        </label>
        <label for="teamImg" class="block w-full mb-4">
          <p class="text-gray-600 mb-1">New member avatar:</p>
          <input
            @change="uploadFile"
            id="teamImg"
            type="file"
            class="w-full block bg-white border border-gray-200 rounded-md py-2 px-4 focus:outline-none text-[#333333d8] focus:ring-4 focus:ring-violet-400"
            placeholder="Select file"
            name="teamImg"
          />
        </label>
        <label for="job" class="block w-full mb-4">
          <p class="text-gray-600 mb-1">Member job:</p>
          <input
            :value="oldTeam ? oldTeam.job : ''"
            @input="getJob"
            id="job"
            type="text"
            class="w-full border border-gray-200 rounded-md py-2 px-4 focus:outline-none text-[#333333d8] focus:ring-4 focus:ring-violet-400"
            placeholder="Job"
            name="job"
          />
        </label>
        <label for="lang" class="block w-full">
          <p class="text-gray-600 mb-1">Language:</p>
        </label>
        <select
          :value="oldTeam ? oldTeam.lang : ''"
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
