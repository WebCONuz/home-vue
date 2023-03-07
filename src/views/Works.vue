<script setup>
import WorksRow from "../ui/WorksRow/WorksRow.vue";
import AdminTitle from "@/ui/AdminTitle/AdminTitle.vue";
import pcWork from "@/assets/images/portfolio/pc_work1.jpg";
import mobileWork from "../assets/images/portfolio/mobile_work1.jpg";
</script>

<template>
  <div class="px-4">
    <AdminTitle
      link="/admin/works/add"
      title="Portfolio"
      btnText="Add new work"
    />
    <table id="Portfolio" class="table-auto border border-slate-400 w-full">
      <thead>
        <tr>
          <th class="border border-slate-300 p-2">ID</th>
          <th class="border border-slate-300 p-2">Portfolio name</th>
          <th class="border border-slate-300 p-2">Link</th>
          <th class="border border-slate-300 p-2">PC image</th>
          <th class="border border-slate-300 p-2">Phone image</th>
          <th class="border border-slate-300 p-2">Lang</th>
          <th class="border border-slate-300 p-2">Option</th>
        </tr>
      </thead>
      <tbody>
        <WorksRow
          :id="1"
          title="Online Ta'lim tizimi web ilovasi."
          link="http://localhost:5500"
          :pcImg="pcWork"
          :mobileImg="mobileWork"
          lang="uz"
        />
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
