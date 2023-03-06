<script setup>
const props = defineProps({
  id: Number,
  name: String,
  email: String,
  phone: String,
  message: String,
});
</script>

<template>
  <tr>
    <td class="border border-slate-300 p-2">{{ props.id }}</td>
    <td class="border border-slate-300 p-2">{{ props.name }}</td>
    <td class="border border-slate-300 p-2">{{ props.email }}</td>
    <td class="border border-slate-300 p-2">{{ props.phone }}</td>
    <td class="border border-slate-300 p-2">{{ props.message }}</td>
    <td class="border border-slate-300 p-2 text-center">
      <button
        class="border border-red-500 text-red-500 py-1 px-2 text-sm rounded-md duration-200 hover:bg-red-500 hover:text-white"
      >
        <i class="bx bx-trash text-xl"></i>
      </button>
    </td>
  </tr>
</template>

<style scoped></style>
