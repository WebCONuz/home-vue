<script setup>
import teamImg from "@/assets/images/man.png";
</script>

<template>
  <div class="px-4">
    <h2
      class="pt-8 pb-6 text-3xl font-bold text-center text-violet-600 uppercase"
    >
      Our Team
    </h2>
    <table id="Portfolio" class="table-auto border border-slate-400 w-full">
      <thead>
        <tr>
          <th class="border border-slate-300 p-2">ID</th>
          <th class="border border-slate-300 p-2">Full name</th>
          <th class="border border-slate-300 p-2">description</th>
          <th class="border border-slate-300 p-2">Avatar image</th>
          <th class="border border-slate-300 p-2">Phone</th>
          <th class="border border-slate-300 p-2">Email</th>
          <th class="border border-slate-300 p-2">Lang</th>
          <th class="border border-slate-300 p-2">Option</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-slate-300 p-2">1</td>
          <td class="border border-slate-300 p-2">Jamol Saidov.</td>
          <td class="border border-slate-300 p-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed fuga
            repellat magnam omnis iste blanditiis repellendus voluptate, dolorum
            culpa nostrum!
          </td>
          <td class="border border-slate-300 p-2 text-center">
            <img :src="teamImg" alt="avatar" class="w-10 inline-block" />
          </td>
          <td class="border border-slate-300 p-2 text-center">+998995456312</td>
          <td class="border border-slate-300 p-2 text-center">
            jamol@gmail.com
          </td>
          <td class="border border-slate-300 p-2 text-center">
            <span
              class="inline-block py-1 px-3 text-sm rounded-xl bg-blue-500 text-white"
              >uz</span
            >
          </td>
          <td class="border border-slate-300 p-2">
            <div class="flex">
              <button
                class="border border-green-500 text-green-500 py-1 px-2 text-sm rounded-md duration-200 hover:bg-green-500 hover:text-white"
              >
                <i class="bx bx-message-square-add text-xl"></i></button
              ><br />
              <button
                class="border border-blue-500 text-blue-500 py-1 px-2 text-sm mx-2 rounded-md duration-200 hover:bg-blue-500 hover:text-white"
              >
                <i class="bx bx-edit text-xl"></i></button
              ><br />
              <button
                class="border border-red-500 text-red-500 py-1 px-2 text-sm rounded-md duration-200 hover:bg-red-500 hover:text-white"
              >
                <i class="bx bx-trash text-xl"></i>
              </button>
            </div>
          </td>
        </tr>
        <tr>
          <td class="border border-slate-300 p-2">2</td>
          <td class="border border-slate-300 p-2">Jamol Saidov.</td>
          <td class="border border-slate-300 p-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed fuga
            repellat magnam omnis iste blanditiis repellendus voluptate, dolorum
            culpa nostrum!
          </td>
          <td class="border border-slate-300 p-2 text-center">
            <img :src="teamImg" alt="avatar" class="w-10 inline-block" />
          </td>
          <td class="border border-slate-300 p-2 text-center">+998995456312</td>
          <td class="border border-slate-300 p-2 text-center">
            jamol@gmail.com
          </td>
          <td class="border border-slate-300 p-2 text-center">
            <span
              class="inline-block py-1 px-3 text-sm rounded-xl bg-blue-500 text-white"
              >uz</span
            >
          </td>
          <td class="border border-slate-300 p-2">
            <div class="flex">
              <button
                class="border border-green-500 text-green-500 py-1 px-2 text-sm rounded-md duration-200 hover:bg-green-500 hover:text-white"
              >
                <i class="bx bx-message-square-add text-xl"></i></button
              ><br />
              <button
                class="border border-blue-500 text-blue-500 py-1 px-2 text-sm mx-2 rounded-md duration-200 hover:bg-blue-500 hover:text-white"
              >
                <i class="bx bx-edit text-xl"></i></button
              ><br />
              <button
                class="border border-red-500 text-red-500 py-1 px-2 text-sm rounded-md duration-200 hover:bg-red-500 hover:text-white"
              >
                <i class="bx bx-trash text-xl"></i>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
