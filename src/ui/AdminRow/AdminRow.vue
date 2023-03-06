<script setup>
const props = defineProps({
  id: Number,
  name: String,
  email: String,
  isCreator: Boolean,
});
</script>

<template>
  <tr>
    <td class="border border-slate-300 p-2">{{ props.id }}</td>
    <td class="border border-slate-300 p-2">{{ props.name }}</td>
    <td class="border border-slate-300 p-2">{{ props.email }}</td>
    <td class="border border-slate-300 p-2 text-center">
      <i
        class="bx bxs-check-square text-3xl text-green-700"
        v-if="props.isCreator"
      ></i>
      <i
        class="bx bxs-square text-3xl text-red-700"
        v-else="props.isCreator"
      ></i>
    </td>
    <td class="border border-slate-300 p-2 text-center">
      <div class="flex">
        <router-link
          to="/admin/add"
          class="border border-green-500 text-green-500 py-1 px-2 text-sm rounded-md duration-200 hover:bg-green-500 hover:text-white"
        >
          <i class="bx bx-message-square-add text-xl"></i>
        </router-link>
        <button
          class="border border-blue-500 text-blue-500 py-1 px-2 text-sm mx-2 rounded-md duration-200 hover:bg-blue-500 hover:text-white"
        >
          <i class="bx bx-edit text-xl"></i>
        </button>
        <button
          class="border border-red-500 text-red-500 py-1 px-2 text-sm rounded-md duration-200 hover:bg-red-500 hover:text-white"
        >
          <i class="bx bx-trash text-xl"></i>
        </button>
      </div>
    </td>
  </tr>
</template>

<style scoped></style>
