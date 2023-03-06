<script setup>
const props = defineProps({
  id: Number,
  title: String,
  link: String,
  pcImg: String,
  mobileImg: String,
  lang: String,
});
</script>

<template>
  <tr>
    <td class="border border-slate-300 p-2">{{ props.id }}</td>
    <td class="border border-slate-300 p-2">{{ props.title }}</td>
    <td class="border border-slate-300 p-2">{{ props.link }}</td>
    <td class="border border-slate-300 p-2 text-center">
      <img :src="pcImg" :alt="props.title" class="w-24 inline-block" />
    </td>
    <td class="border border-slate-300 p-2 text-center">
      <img :src="mobileImg" :alt="props.title" class="w-7 inline-block" />
    </td>
    <td class="border border-slate-300 p-2 text-center">
      <span
        class="inline-block py-1 px-3 text-sm rounded-xl bg-blue-500 text-white"
      >
        {{ props.lang }}
      </span>
    </td>
    <td class="border border-slate-300 p-2 text-center">
      <div class="flex">
        <router-link
          to="/admin/works/add"
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
