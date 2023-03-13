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
    const res = await axios.delete(`/admin/${props.id}`, {
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
      toast.error(err.response.data.message);
      modalF(false);
      // window.localStorage.clear();
      // router.push({ path: "/login" });
    }
  }
}

const props = defineProps({
  num: Number,
  id: Number,
  name: String,
  email: String,
  isCreator: Boolean,
});
</script>

<template>
  <Modal :active="showModal" :func="modalF" :id="props.id" :delF="deleteData" />
  <tr>
    <td class="border border-slate-300 px-2 py-1 text-sm">{{ props.num }}</td>
    <td class="border border-slate-300 px-2 py-1 text-sm">{{ props.id }}</td>
    <td class="border border-slate-300 px-2 py-1 text-sm">{{ props.name }}</td>
    <td class="border border-slate-300 px-2 py-1 text-sm">{{ props.email }}</td>
    <td class="border border-slate-300 px-2 py-1 text-center">
      <i
        class="bx bxs-check-square text-2xl text-green-700"
        v-if="props.isCreator"
      ></i>
      <i
        class="bx bxs-square text-2xl text-red-700"
        v-else="props.isCreator"
      ></i>
    </td>
    <td class="border border-slate-300 px-2 py-1 text-center">
      <div class="flex">
        <router-link
          :to="`/admin/edit/${props.id}`"
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
