<script setup>
import AdminNav from "@/components/AdminNav/AdminNav.vue";
import Footer from "@/components/Footer/Footer.vue";
</script>

<template>
  <AdminNav />
  <main class="main">
    <div class="container min-h-[76vh]">
      <h2
        class="pt-8 pb-6 text-3xl font-bold text-center text-violet-600 uppercase"
      >
        Messages
      </h2>
      <table id="service" class="table-auto border border-slate-400 w-full">
        <thead>
          <tr>
            <th class="border border-slate-300 p-2">ID</th>
            <th class="border border-slate-300 p-2">Full name</th>
            <th class="border border-slate-300 p-2">Email</th>
            <th class="border border-slate-300 p-2">Phone</th>
            <th class="border border-slate-300 p-2">Message</th>
            <th class="border border-slate-300 p-2">Option</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-slate-300 p-2">1</td>
            <td class="border border-slate-300 p-2">Kamol Latipov</td>
            <td class="border border-slate-300 p-2">kamol@gmail.com</td>
            <td class="border border-slate-300 p-2">+998995463641</td>
            <td class="border border-slate-300 p-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
              omnis, debitis id eligendi recusandae vitae, temporibus, quo
              voluptate qui commodi repellendus? Repellat consectetur laudantium
              labore!
            </td>
            <td class="border border-slate-300 p-2 text-center">
              <button
                class="border border-red-500 text-red-500 py-1 px-2 text-sm rounded-md duration-200 hover:bg-red-500 hover:text-white"
              >
                <i class="bx bx-trash text-xl"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td class="border border-slate-300 p-2">2</td>
            <td class="border border-slate-300 p-2">Abdulla Egamov</td>
            <td class="border border-slate-300 p-2">abdulla@gmail.com</td>
            <td class="border border-slate-300 p-2">+998901002352</td>
            <td class="border border-slate-300 p-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
              omnis!
            </td>
            <td class="border border-slate-300 p-2 text-center">
              <button
                class="border border-red-500 text-red-500 py-1 px-2 text-sm rounded-md duration-200 hover:bg-red-500 hover:text-white"
              >
                <i class="bx bx-trash text-xl"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td class="border border-slate-300 p-2">1</td>
            <td class="border border-slate-300 p-2">Jahongirjon toshtemirov</td>
            <td class="border border-slate-300 p-2">joxa@gmail.com</td>
            <td class="border border-slate-300 p-2">+998955001010</td>
            <td class="border border-slate-300 p-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
              omnis, debitis id eligendi recusandae vitae, temporibus, quo
              voluptate qui commodi repellendus? Repellat consectetur laudantium
              labore!
            </td>
            <td class="border border-slate-300 p-2 text-center">
              <button
                class="border border-red-500 text-red-500 py-1 px-2 text-sm rounded-md duration-200 hover:bg-red-500 hover:text-white"
              >
                <i class="bx bx-trash text-xl"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
  <Footer />
</template>

<style scoped>
.main {
  min-height: calc(100vh - 77px - 91px);
}
</style>
