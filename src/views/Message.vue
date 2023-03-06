<script setup>
import MessageRow from "@/ui/MessageRow/MessageRow.vue";
</script>

<template>
  <div class="px-4">
    <h2
      class="pt-8 pb-6 text-3xl font-bold text-center text-violet-600 capitelize"
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
        <MessageRow
          :id="1"
          name="Kamol Latipov"
          email="kamol@gmail.com"
          phone="+998995463641"
          message="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        />
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
