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
        <button
          class="border border-blue-500 text-blue-500 px-2 mx-2 rounded-md duration-200 hover:bg-blue-500 hover:text-white"
        >
          <i class="bx bx-edit text-lg"></i>
        </button>
        <button
          class="border border-red-500 text-red-500 px-2 rounded-md duration-200 hover:bg-red-500 hover:text-white"
        >
          <i class="bx bx-trash text-lg"></i>
        </button>
      </div>
    </td>
  </tr>
</template>

<style scoped></style>
