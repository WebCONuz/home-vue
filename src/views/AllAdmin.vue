<script setup>
import AdminRow from "@/ui/AdminRow/AdminRow.vue";
</script>

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
        <AdminRow
          :id="1"
          name="Axmat axadov"
          email="axadov@gmail.com"
          :isCreator="true"
        />
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
