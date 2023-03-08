<script setup>
const props = defineProps({
  id: Number,
  name: String,
  descr: String,
  imgUrl: String,
  job: String,
  lang: String,
});
</script>

<template>
  <tr>
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
