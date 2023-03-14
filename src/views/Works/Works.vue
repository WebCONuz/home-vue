<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";

import WorksRow from "../../ui/WorksRow/WorksRow.vue";
import AdminTitle from "@/ui/AdminTitle/AdminTitle.vue";

const { state } = useStore();
const store = useStore();

onMounted(() => {
  store.dispatch("fetchWorks");
});
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
          <th class="border border-slate-300 p-2">Num</th>
          <th class="border border-slate-300 p-2">ID</th>
          <th class="border border-slate-300 p-2">Portfolio name</th>
          <th class="border border-slate-300 p-2">Link</th>
          <th class="border border-slate-300 p-2">PC image</th>
          <th class="border border-slate-300 p-2">Phone image</th>
          <th class="border border-slate-300 p-2">Lang</th>
          <th class="border border-slate-300 p-2">Date</th>
          <th class="border border-slate-300 p-2">Option</th>
        </tr>
      </thead>
      <tbody>
        <WorksRow
          v-for="(item, index) in state.getWorks.works"
          :num="index + 1"
          :id="item.id"
          :title="item.title"
          :link="item.work_link"
          :pcImg="'http://localhost:5000/' + item.pc_img_url"
          :mobileImg="'http://localhost:5000/' + item.phone_img_url"
          :lang="item.lang"
          :updatedAt="item.updatedAt"
        />
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
