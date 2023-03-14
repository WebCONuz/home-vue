<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";

import MessageRow from "@/ui/MessageRow/MessageRow.vue";

const { state } = useStore();
const store = useStore();

onMounted(() => {
  store.dispatch("fetchMessages");
});
</script>

<template>
  <div class="px-4">
    <h2
      class="pt-6 pb-8 text-2xl font-bold text-center text-violet-600 capitelize"
    >
      Messages
    </h2>
    <table id="service" class="table-auto border border-slate-400 w-full">
      <thead>
        <tr>
          <th class="border border-slate-300 p-2">Num</th>
          <th class="border border-slate-300 p-2">ID</th>
          <th class="border border-slate-300 p-2">Full name</th>
          <th class="border border-slate-300 p-2">Email</th>
          <th class="border border-slate-300 p-2">Phone</th>
          <th class="border border-slate-300 p-2">Message</th>
          <th class="border border-slate-300 p-2">Date</th>
          <th class="border border-slate-300 p-2">Option</th>
        </tr>
      </thead>
      <tbody>
        <MessageRow
          v-for="(item, index) in state.getMessages.messages"
          :id="item.id"
          :num="index + 1"
          :name="item.full_name"
          :email="item.email"
          :phone="item.phone"
          :message="item.user_msg"
          :updatedAt="item.updatedAt"
        />
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
