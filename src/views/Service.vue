<script setup>
import serviceImg from "../assets/images/service/crm.png";
import AdminTitle from "@/ui/AdminTitle/AdminTitle.vue";
import ServiceRow from "../ui/ServiceRow/ServiceRow.vue";
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
          <th class="border border-slate-300 p-2">ID</th>
          <th class="border border-slate-300 p-2">Service name</th>
          <th class="border border-slate-300 p-2">Description</th>
          <th class="border border-slate-300 p-2">Image</th>
          <th class="border border-slate-300 p-2">Lang</th>
          <th class="border border-slate-300 p-2">Active</th>
          <th class="border border-slate-300 p-2">Option</th>
        </tr>
      </thead>
      <tbody>
        <ServiceRow
          id="1"
          title="CRM"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed omnis, debitis id eligendi recusandae vitae, temporibus, quo voluptate qui commodi repellendus? Repellat consectetur laudantium labore!"
          :imgUrl="serviceImg"
          lang="uz"
          :active="true"
        />
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
