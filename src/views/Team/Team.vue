<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";

import AdminTitle from "@/ui/AdminTitle/AdminTitle.vue";
import TeamRow from "@/ui/TeamRow/TeamRow.vue";

const { state } = useStore();
const store = useStore();

onMounted(() => {
  store.dispatch("fetchTeam");
});
</script>

<template>
  <div class="px-4">
    <AdminTitle
      link="/admin/team/add"
      title="Our Team"
      btnText="Add Team member"
    />
    <table id="Portfolio" class="table-auto border border-slate-400 w-full">
      <thead>
        <tr>
          <th class="border border-slate-300 p-2">ID</th>
          <th class="border border-slate-300 p-2">Full name</th>
          <th class="border border-slate-300 p-2">description</th>
          <th class="border border-slate-300 p-2">Avatar image</th>
          <th class="border border-slate-300 p-2">Job</th>
          <th class="border border-slate-300 p-2">Lang</th>
          <th class="border border-slate-300 p-2">Option</th>
        </tr>
      </thead>
      <tbody>
        <TeamRow
          v-for="(item, index) in state.getTeam.team"
          :id="index + 1"
          :name="item.full_name"
          :descr="item.description"
          :imgUrl="'http://localhost:5000/' + item.avatar_img"
          :job="item.job"
          :lang="item.lang"
        />
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
