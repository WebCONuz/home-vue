<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { toast } from "vue3-toastify";

const store = useStore();
const router = useRouter();

const title = ref("");
const work_link = ref("");
const work_pc = ref(null);
const work_phone = ref(null);
const lang = ref("");

const uploadPc = (event) => {
  work_pc.value = event.target.files[0];
};
const uploadPhone = (event) => {
  work_phone.value = event.target.files[0];
};

function addWorks(e) {
  e.preventDefault();
  if (
    title.value.length === 0 ||
    work_link.value.length === 0 ||
    !work_pc.value ||
    !work_phone.value ||
    lang.value.length === 0
  ) {
    toast.warning("Formalar to'liq to'ldirilmagan");
  } else {
    let formData = new FormData();
    formData.append("title", title.value);
    formData.append("work_link", work_link.value);
    formData.append("work_pc", work_pc.value);
    formData.append("work_phone", work_phone.value);
    formData.append("lang", lang.value);
    store
      .dispatch("ADD_WORK", formData)
      .then((response) => {
        if (response.status === 201) {
          toast.success("Create new work");
          router.push({ path: "/admin/works" });
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
        Add new Work
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
      @submit="addWorks"
    >
      <div class="w-full p-4 bg-gray-200 rounded-lg">
        <label for="title" class="block w-full mb-4">
          <p class="text-gray-600 mb-1">Work name:</p>
          <input
            v-model="title"
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
            v-model="work_link"
            id="work_link"
            type="text"
            class="w-full border border-gray-200 rounded-md py-2 px-4 focus:outline-none text-[#333333d8] focus:ring-4 focus:ring-violet-400"
            placeholder="Work link"
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
