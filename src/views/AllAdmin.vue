<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";

import AdminTitle from "@/ui/AdminTitle/AdminTitle.vue";
import AdminRow from "@/ui/AdminRow/AdminRow.vue";

const { state } = useStore();
const store = useStore();

onMounted(() => {
  store.dispatch("fetchAdmins");
});
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
          v-for="(item, index) in state.getAdmin.admins"
          :id="index + 1"
          :name="item.full_name"
          :email="item.email"
          :isCreator="item.is_creator"
        />
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
