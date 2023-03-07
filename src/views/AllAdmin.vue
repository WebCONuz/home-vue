<script setup>
import AdminTitle from "@/ui/AdminTitle/AdminTitle.vue";
import AdminRow from "@/ui/AdminRow/AdminRow.vue";
</script>

<template>
  <div class="px-4">
    <AdminTitle link="/admin/add" title="All Admins" btnText="Add Admin" />
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
