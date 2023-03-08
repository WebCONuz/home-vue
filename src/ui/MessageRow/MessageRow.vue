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
    <td class="border border-slate-300 px-2 py-1 text-sm">{{ props.id }}</td>
    <td class="border border-slate-300 px-2 py-1 text-sm">{{ props.name }}</td>
    <td class="border border-slate-300 px-2 py-1 text-sm">{{ props.email }}</td>
    <td class="border border-slate-300 px-2 py-1 text-sm">{{ props.phone }}</td>
    <td class="border border-slate-300 px-2 py-1 text-sm">
      {{ props.message }}
    </td>
    <td class="border border-slate-300 px-2 py-1 text-center">
      <button
        class="border border-red-500 text-red-500 px-2 rounded-md duration-200 hover:bg-red-500 hover:text-white"
      >
        <i class="bx bx-trash text-lg"></i>
      </button>
    </td>
  </tr>
</template>

<style scoped></style>
