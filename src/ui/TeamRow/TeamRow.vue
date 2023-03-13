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
  name: String,
  descr: String,
  imgUrl: String,
  job: String,
  lang: String,
});

async function deleteData() {
  try {
    const token = window.localStorage.getItem("token");
    const res = await axios.delete(`/team/${props.id}`, {
      headers: {
        Authorization: `Barear ${token}`,
      },
    });
    if (res.status === 200) {
      toast.success(`Deleted: ${props.id}`);
      // window.location.reload();
      // router.go(router.currentRoute);
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
    <td class="border border-slate-300 px-2 py-1 text-sm">{{ props.name }}</td>
    <td class="border border-slate-300 px-2 py-1 text-sm">{{ props.descr }}</td>
    <td class="border border-slate-300 px-2 py-1 text-center">
      <img :src="props.imgUrl" alt="avatar" class="w-10 inline-block" />
    </td>
    <td class="border border-slate-300 px-2 py-1 text-sm text-center">
      {{ props.job }}
    </td>
    <td class="border border-slate-300 px-2 py-1 text-center">
      <span
        class="inline-block py-1 px-3 text-sm rounded-xl bg-blue-500 text-white"
      >
        {{ props.lang }}
      </span>
    </td>
    <td class="border border-slate-300 px-2 py-1">
      <div class="flex">
        <router-link
          :to="`/admin/team/${props.id}/edit`"
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
