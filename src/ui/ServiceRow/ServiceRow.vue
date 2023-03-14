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

const props = defineProps({
  num: Number,
  id: Number,
  title: String,
  text: String,
  imgUrl: String,
  lang: String,
  updatedAt: String,
});

async function deleteData() {
  try {
    const token = window.localStorage.getItem("token");
    const res = await axios.delete(`/services/${props.id}`, {
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
</script>

<template>
  <Modal :active="showModal" :func="modalF" :id="props.id" :delF="deleteData" />
  <tr>
    <td class="border border-slate-300 px-2 py-1 text-sm">{{ props.num }}</td>
    <td class="border border-slate-300 px-2 py-1 text-sm">{{ props.id }}</td>
    <td class="border border-slate-300 px-2 py-1 text-sm">{{ props.title }}</td>
    <td class="border border-slate-300 px-2 py-1 text-sm">{{ props.text }}</td>
    <td class="border border-slate-300 px-2 py-1 text-sm text-center">
      <img :src="props.imgUrl" :alt="props.title" class="w-10 inline-block" />
    </td>
    <td class="border border-slate-300 px-2 py-1 text-center">
      <span
        class="inline-block py-1 px-3 text-sm rounded-xl bg-blue-100 text-blue-700"
      >
        {{ props.lang }}
      </span>
    </td>
    <td class="border border-slate-300 px-2 py-1 text-sm">
      {{ props.updatedAt.slice(0, 10) }}, {{ props.updatedAt.slice(12, 16) }}
    </td>
    <td class="border border-slate-300 px-2 py-1 text-center">
      <div class="flex">
        <router-link
          :to="`/admin/service/${props.id}/edit`"
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
