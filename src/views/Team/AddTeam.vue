<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { toast } from "vue3-toastify";

const store = useStore();
const router = useRouter();

const full_name = ref("");
const job = ref("");
const description = ref("");
const teamImg = ref(null);
const lang = ref("");

const uploadFile = (event) => {
  teamImg.value = event.target.files[0];
};

function addTeam(e) {
  e.preventDefault();
  if (
    full_name.value.length === 0 ||
    job.value.length === 0 ||
    description.value.length === 0 ||
    !teamImg.value ||
    lang.value.length === 0
  ) {
    toast.warning("Formalar to'liq to'ldirilmagan");
  } else {
    let formData = new FormData();
    formData.append("full_name", full_name.value);
    formData.append("job", job.value);
    formData.append("description", description.value);
    formData.append("teamImg", teamImg.value);
    formData.append("lang", lang.value);
    store
      .dispatch("ADD_TEAM", formData)
      .then((response) => {
        if (response.status === 201) {
          toast.success("Create new team member");
          router.push({ path: "/admin/team" });
        } else if (response.response.status === 403) {
          toast.error("Token expired");
          window.localStorage.clear();
          router.push({ path: "/login" });
        } else {
          console.log(response);
          toast.error("Some error! (File size: 5mb)");
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
        Add new Team member
      </h1>
      <router-link
        to="/admin/team"
        class="block hover:bg-gray-600 py-2 px-5 rounded-[25px] duration-200 bg-gray-400 text-white"
      >
        All Team Members
      </router-link>
    </div>
    <form action="" class="block w-[55%]" @submit="addTeam">
      <div class="w-full p-4 bg-gray-200 rounded-lg">
        <label for="full_name" class="block w-full mb-4">
          <p class="text-gray-600 mb-1">Full name:</p>
          <input
            v-model="full_name"
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
            v-model="description"
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
            v-model="job"
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
          v-model="lang"
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
