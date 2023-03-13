<script setup>
import { ref } from "vue";
import { toast } from "vue3-toastify";
import { useRouter } from "vue-router";
import axios from "@/service/axios";
import Modal from "@/ui/Modal/Modal.vue";

const router = useRouter();
const showModal = ref(false);

function modalF(bool) {
  showModal.value = bool;
}
function showModalFunction() {
  showModal.value = true;
}

async function deleteData() {
  try {
    const token = window.localStorage.getItem("token");
    const res = await axios.delete(`/works/${props.id}`, {
      headers: {
        Authorization: `Barear ${token}`,
      },
    });
    if (res.status === 200) {
      toast.success(`Deleted: ${props.id}`);
      router.go(0);
      modalF(false);
    } else {
      console.log(res);
    }
  } catch (err) {
    if (err.response && err.response.status === 403) {
      toast.error("Token expired");
      window.localStorage.clear();
      router.push({ path: "/login" });
    } else {
      console.log(err);
    }
  }
}

const props = defineProps({
  num: Number,
  id: Number,
  title: String,
  link: String,
  pcImg: String,
  mobileImg: String,
  lang: String,
});
</script>

<template>
  <Modal :active="showModal" :func="modalF" :id="props.id" :delF="deleteData" />
  <tr>
    <td class="border border-slate-300 px-2 py-1 text-sm">{{ props.num }}</td>
    <td class="border border-slate-300 px-2 py-1 text-sm">{{ props.id }}</td>
    <td class="border border-slate-300 px-2 py-1 text-sm">{{ props.title }}</td>
    <td class="border border-slate-300 px-2 py-1 text-sm">{{ props.link }}</td>
    <td class="border border-slate-300 px-2 py-1 text-center">
      <img :src="pcImg" :alt="props.title" class="w-24 inline-block" />
    </td>
    <td class="border border-slate-300 px-2 py-1 text-center">
      <img :src="mobileImg" :alt="props.title" class="w-7 inline-block" />
    </td>
    <td class="border border-slate-300 px-2 py-1 text-center">
      <span
        class="inline-block py-1 px-3 text-sm rounded-xl bg-blue-500 text-white"
      >
        {{ props.lang }}
      </span>
    </td>
    <td class="border border-slate-300 px-2 py-1 text-center">
      <div class="flex">
        <router-link
          :to="`/admin/works/${props.id}/edit`"
          class="border border-blue-500 text-blue-500 px-2 mx-2 rounded-md duration-200 hover:bg-blue-500 hover:text-white"
        >
          <i class="bx bx-edit text-lg"></i>
        </router-link>
        <button
          @click="showModalFunction"
          class="border border-red-500 text-red-500 px-2 rounded-md duration-200 hover:bg-red-500 hover:text-white"
        >
          <i class="bx bx-trash text-lg"></i>
        </button>
      </div>
    </td>
  </tr>
</template>

<style scoped></style>
