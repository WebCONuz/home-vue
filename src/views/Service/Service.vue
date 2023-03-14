<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";

import AdminTitle from "@/ui/AdminTitle/AdminTitle.vue";
import ServiceRow from "../../ui/ServiceRow/ServiceRow.vue";

const { state } = useStore();
const store = useStore();

onMounted(() => {
  store.dispatch("fetchServices");
});
</script>

<template>
  <div class="px-4">
    <AdminTitle
      link="/admin/service/add"
      title="Services"
      btnText="Add Service"
    />
    <table id="service" class="table-auto border border-slate-400 w-full">
      <thead>
        <tr>
          <th class="border border-slate-300 p-2">No</th>
          <th class="border border-slate-300 p-2">ID</th>
          <th class="border border-slate-300 p-2">Service name</th>
          <th class="border border-slate-300 p-2">Description</th>
          <th class="border border-slate-300 p-2">Image</th>
          <th class="border border-slate-300 p-2">Lang</th>
          <th class="border border-slate-300 p-2">Date</th>
          <th class="border border-slate-300 p-2">Option</th>
        </tr>
      </thead>
      <tbody>
        <ServiceRow
          v-for="(item, index) in state.getServices.services"
          :num="index + 1"
          :id="item.id"
          :title="item.title"
          :text="item.description"
          :imgUrl="'http://localhost:5000/' + item.img_url"
          :lang="item.lang"
          :updatedAt="item.updatedAt"
        />
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
