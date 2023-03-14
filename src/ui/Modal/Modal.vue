<script setup>
import { useStore } from "vuex";

const store = useStore();
const props = defineProps({
  id: Number,
  active: Boolean,
  func: Function,
  delF: Function,
  storeF: String,
});

// function reloadWindow() {
//   props.delF();
//   let str = props.storeF;
//   store.dispatch(`fetchMessages`);
// }
</script>

<template>
  <div
    v-if="props.active"
    class="p-4 w-[400px] bg-white shadow-md rounded-md absolute top-4 left-1/2 -translate-x-1/2"
  >
    <p>Are you sure delete {{ props.id }} item?</p>
    <div class="flex justify-end items-center">
      <button
        @click="props.delF"
        class="py-1 px-3 rounded-md bg-blue-400 text-white mr-1 text-sm active:bg-blue-500"
      >
        Yes
      </button>
      <button
        @click="(e) => props.func(false)"
        class="py-1 px-3 rounded-md bg-gray-200 text-sm active:bg-gray-300"
      >
        Cancel
      </button>
    </div>
  </div>
</template>

<style scoped></style>
