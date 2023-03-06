<script setup>
import teamImg from "@/assets/images/man.png";
import TeamRouter from "@/ui/TeamRow/TeamRow.vue";
</script>

<template>
  <div class="px-4">
    <h2
      class="pt-8 pb-6 text-3xl font-bold text-center text-violet-600 uppercase"
    >
      Our Team
    </h2>
    <table id="Portfolio" class="table-auto border border-slate-400 w-full">
      <thead>
        <tr>
          <th class="border border-slate-300 p-2">ID</th>
          <th class="border border-slate-300 p-2">Full name</th>
          <th class="border border-slate-300 p-2">description</th>
          <th class="border border-slate-300 p-2">Avatar image</th>
          <th class="border border-slate-300 p-2">Phone</th>
          <th class="border border-slate-300 p-2">Email</th>
          <th class="border border-slate-300 p-2">Lang</th>
          <th class="border border-slate-300 p-2">Option</th>
        </tr>
      </thead>
      <tbody>
        <TeamRouter
          :id="1"
          name="Axmat Kamolov"
          descr="lorem ipsul dolor set ..."
          :imgUrl="teamImg"
          phone="+998995456312"
          email="jamol@gmail.com"
          lang="uz"
        />
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
