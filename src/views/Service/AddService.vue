<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { toast } from "vue3-toastify";

const store = useStore();
const router = useRouter();

const title = ref("");
const description = ref("");
const serviceImg = ref(null);
const lang = ref("");

const uploadFile = (event) => {
  serviceImg.value = event.target.files[0];
};

function addService(e) {
  e.preventDefault();
  if (
    title.value.length === 0 ||
    description.value.length === 0 ||
    !serviceImg.value ||
    lang.value.length === 0
  ) {
    toast.warning("Formalar to'liq to'ldirilmagan");
  } else {
    let formData = new FormData();
    formData.append("title", title.value);
    formData.append("description", description.value);
    formData.append("serviceImg", serviceImg.value);
    formData.append("lang", lang.value);
    store
      .dispatch("ADD_SERVICE", formData)
      .then((response) => {
        if (response.status === 201) {
          toast.success("Create new service");
          router.push({ path: "/admin/service" });
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
        Add new Service
      </h1>
      <router-link
        to="/admin/service"
        class="block hover:bg-gray-600 py-2 px-5 rounded-[25px] duration-200 bg-gray-400 text-white"
      >
        All Services
      </router-link>
    </div>
    <form action="" class="block w-[55%]" @submit="addService">
      <div class="w-full p-4 bg-gray-200 rounded-lg">
        <label for="title" class="block w-full mb-4">
          <p class="text-gray-600 mb-1">Service title:</p>
          <input
            v-model="title"
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
            v-model="description"
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
