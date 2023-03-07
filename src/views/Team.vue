<script setup>
import teamImg from "@/assets/images/man.png";
import AdminTitle from "@/ui/AdminTitle/AdminTitle.vue";
import TeamRow from "@/ui/TeamRow/TeamRow.vue";
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
          :id="1"
          name="Axmat Kamolov"
          descr="lorem ipsul dolor set ..."
          :imgUrl="teamImg"
          job="Senior Dev"
          lang="uz"
        />
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
