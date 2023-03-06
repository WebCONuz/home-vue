<script setup></script>

<template>
  <div class="px-4">
    <h2
      class="pt-8 pb-6 text-3xl font-bold text-center text-violet-600 capitalize"
    >
      All Admins
    </h2>
    <table id="service" class="table-auto border border-slate-400 w-full">
      <thead>
        <tr>
          <th class="border border-slate-300 p-2">ID</th>
          <th class="border border-slate-300 p-2">Full_name</th>
          <th class="border border-slate-300 p-2">email</th>
          <th class="border border-slate-300 p-2">is_creator</th>
          <th class="border border-slate-300 p-2">Option</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-slate-300 p-2">1</td>
          <td class="border border-slate-300 p-2">Axmat axadov</td>
          <td class="border border-slate-300 p-2">axadov@gmail.com</td>
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
          <td class="border border-slate-300 p-2">Samandar Qayumov</td>
          <td class="border border-slate-300 p-2">saman@gmail.com</td>
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
        <tr>
          <td class="border border-slate-300 p-2">3</td>
          <td class="border border-slate-300 p-2">
            Jamoliddinxojabek Qurbonov
          </td>
          <td class="border border-slate-300 p-2">qurbonov@gmail.com</td>
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
