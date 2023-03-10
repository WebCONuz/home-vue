<script setup>
const props = defineProps({
  num: Number,
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
    <td class="border border-slate-300 px-2 py-1 text-sm">{{ props.num }}</td>
    <td class="border border-slate-300 px-2 py-1 text-sm">{{ props.id }}</td>
    <td class="border border-slate-300 px-2 py-1 text-sm">{{ props.title }}</td>
    <td class="border border-slate-300 px-2 py-1 text-sm">{{ props.link }}</td>
    <td class="border border-slate-300 px-2 py-1 text-center">
      <img :src="pcImg" :alt="props.title" class="w-24 inline-block" />
    </td>
    <td class="border border-slate-300 px-2 py-1 text-center">
      <img :src="mobileImg" :alt="props.title" class="w-7 inline-block" />
    </td>
    <td class="border border-slate-300 px-2 py-1 text-center">
      <span
        class="inline-block py-1 px-3 text-sm rounded-xl bg-blue-500 text-white"
      >
        {{ props.lang }}
      </span>
    </td>
    <td class="border border-slate-300 px-2 py-1 text-center">
      <div class="flex">
        <router-link
          :to="`/admin/works/${props.id}/edit`"
          class="border border-blue-500 text-blue-500 px-2 mx-2 rounded-md duration-200 hover:bg-blue-500 hover:text-white"
        >
          <i class="bx bx-edit text-lg"></i>
        </router-link>
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
