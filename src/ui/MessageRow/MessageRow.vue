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
    const res = await axios.delete(`/message/${props.id}`, {
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
  name: String,
  email: String,
  phone: String,
  message: String,
  updatedAt: String,
});
</script>

<template>
  <Modal
    :active="showModal"
    :func="modalF"
    :id="props.id"
    :delF="deleteData"
    storeF="fetchMessages"
  />
  <tr>
    <td class="border border-slate-300 px-2 py-1 text-sm">{{ props.num }}</td>
    <td class="border border-slate-300 px-2 py-1 text-sm">{{ props.id }}</td>
    <td class="border border-slate-300 px-2 py-1 text-sm">{{ props.name }}</td>
    <td class="border border-slate-300 px-2 py-1 text-sm">{{ props.email }}</td>
    <td class="border border-slate-300 px-2 py-1 text-sm">{{ props.phone }}</td>
    <td class="border border-slate-300 px-2 py-1 text-sm">
      {{ props.message }}
    </td>
    <td class="border border-slate-300 px-2 py-1 text-sm">
      {{ props.updatedAt.slice(0, 10) }}, {{ props.updatedAt.slice(12, 16) }}
    </td>
    <td class="border border-slate-300 px-2 py-1 text-center">
      <button
        @click="showModalFunction"
        class="border border-red-500 text-red-500 px-2 rounded-md duration-200 hover:bg-red-500 hover:text-white"
      >
        <i class="bx bx-trash text-lg"></i>
      </button>
    </td>
  </tr>
</template>

<style scoped></style>
