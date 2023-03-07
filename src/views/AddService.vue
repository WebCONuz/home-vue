<script setup></script>

<template>
  <div class="container min-h-screen flex flex-col items-center justify-center">
    <div class="flex justify-between items-center w-[55%] mb-6">
      <h1 class="text-center text-2xl font-semibold text-violet-700">
        Add new Service
      </h1>
      <router-link
        to="/admin/service"
        class="block hover:bg-gray-600 py-2 px-5 rounded-[25px] duration-200 bg-gray-400 text-white"
      >
        All Services
      </router-link>
    </div>
    <form action="" class="block sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[55%]">
      <div class="w-full p-4 bg-gray-200 rounded-lg">
        <label for="title" class="block w-full mb-4">
          <p class="text-gray-600 mb-1">Service title:</p>
          <input
            id="title"
            type="text"
            class="w-full border border-gray-200 rounded-md py-2 px-4 focus:outline-none text-[#333333d8] focus:ring-4 focus:ring-violet-400"
            placeholder="Service name"
            name="title"
          />
        </label>
        <label for="description" class="block w-full mb-4">
          <p class="text-gray-600 mb-1">Service description:</p>
          <input
            id="description"
            type="text"
            class="w-full border border-gray-200 rounded-md py-2 px-4 focus:outline-none text-[#333333d8] focus:ring-4 focus:ring-violet-400"
            placeholder="Description"
            name="description"
          />
        </label>
        <label for="serviceImg" class="block w-full mb-4">
          <p class="text-gray-600 mb-1">Service image:</p>
          <input
            id="serviceImg"
            type="file"
            class="w-full block bg-white border border-gray-200 rounded-md py-2 px-4 focus:outline-none text-[#333333d8] focus:ring-4 focus:ring-violet-400"
            placeholder="Select file"
            name="serviceImg"
          />
        </label>
        <label for="lang" class="block w-full">
          <p class="text-gray-600 mb-1">Service language:</p>
        </label>
        <select
          name="lang"
          id="lang"
          class="w-full border border-gray-200 rounded-md py-2 px-4 focus:outline-none mb-4 text-[#333333d8] focus:ring-4 focus:ring-violet-400"
        >
          <option value="uz" selected>uz</option>
          <option value="en">en</option>
          <option value="ru">ru</option>
        </select>
        <input
          type="submit"
          class="py-2 px-8 rounded-md bg-green-500 text-white"
          value="Add"
        />
        <input
          type="reset"
          class="py-2 px-8 rounded-md bg-orange-500 text-white ml-2"
          value="Reset"
        />
      </div>
    </form>
  </div>
</template>

<style scoped></style>
