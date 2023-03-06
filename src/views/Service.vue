<script setup>
import serviceImg from "../assets/images/service/crm.png";
</script>

<template>
  <div class="px-4">
    <h2
      class="pt-8 pb-6 text-3xl font-bold text-center text-violet-600 capitalize"
    >
      Services
    </h2>
    <table id="service" class="table-auto border border-slate-400 w-full">
      <thead>
        <tr>
          <th class="border border-slate-300 p-2">ID</th>
          <th class="border border-slate-300 p-2">Service name</th>
          <th class="border border-slate-300 p-2">Description</th>
          <th class="border border-slate-300 p-2">Image</th>
          <th class="border border-slate-300 p-2">Lang</th>
          <th class="border border-slate-300 p-2">Active</th>
          <th class="border border-slate-300 p-2">Option</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-slate-300 p-2">1</td>
          <td class="border border-slate-300 p-2">CRM</td>
          <td class="border border-slate-300 p-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed omnis,
            debitis id eligendi recusandae vitae, temporibus, quo voluptate qui
            commodi repellendus? Repellat consectetur laudantium labore!
          </td>
          <td class="border border-slate-300 p-2 text-center">
            <img :src="serviceImg" alt="crm" class="w-10 inline-block" />
          </td>
          <td class="border border-slate-300 p-2 text-center">
            <span
              class="inline-block py-1 px-3 text-sm rounded-xl bg-blue-500 text-white"
              >uz</span
            >
          </td>
          <td class="border border-slate-300 p-2 text-center">
            <i class="bx bxs-check-square text-3xl text-green-700"></i>
          </td>
          <td class="border border-slate-300 p-2 text-center">
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
          <td class="border border-slate-300 p-2">Mobile Dev</td>
          <td class="border border-slate-300 p-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed omnis,
            debitis id eligendi recusandae vitae, temporibus, quo voluptate.
          </td>
          <td class="border border-slate-300 p-2 text-center">
            <img :src="serviceImg" alt="responsive" class="w-10 inline-block" />
          </td>
          <td class="border border-slate-300 p-2 text-center">
            <span
              class="inline-block py-1 px-3 text-sm rounded-xl bg-violet-500 text-white"
              >en</span
            >
          </td>
          <td class="border border-slate-300 p-2 text-center">
            <i class="bx bxs-check-square text-3xl text-green-700"></i>
          </td>
          <td class="border border-slate-300 p-2 text-center">
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
          <td class="border border-slate-300 p-2">3</td>
          <td class="border border-slate-300 p-2">Responsive Design</td>
          <td class="border border-slate-300 p-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed omnis,
            debitis id eligendi recusandae vitae, temporibus, quo voluptate qui
            commodi repellendus? Repellat consectetur laudantium labore! qui
            commodi repellendus? Repellat consectetur laudantium labore.
          </td>
          <td class="border border-slate-300 p-2 text-center">
            <img :src="serviceImg" alt="responsive" class="w-10 inline-block" />
          </td>
          <td class="border border-slate-300 p-2 text-center">
            <span
              class="inline-block py-1 px-3 text-sm rounded-xl bg-red-500 text-white"
              >ru</span
            >
          </td>
          <td class="border border-slate-300 p-2 text-center">
            <i class="bx bxs-square text-3xl text-red-700"></i>
          </td>
          <td class="border border-slate-300 p-2 text-center">
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
