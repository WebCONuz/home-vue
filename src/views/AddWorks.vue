<script setup></script>

<template>
  <div class="container min-h-screen flex flex-col items-center justify-center">
    <h1 class="text-center mb-2 text-3xl font-semibold text-violet-700">
      Add new Work
    </h1>
    <router-link
      to="/admin/works"
      class="block text-center text-gray-400 hover:text-gray-800 duration-200 mb-4"
    >
      All Works
    </router-link>
    <form action="" class="block sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[55%]">
      <div class="w-full p-4 bg-gray-200 rounded-lg">
        <label for="title" class="block w-full mb-4">
          <p class="text-gray-600 mb-1">Work name:</p>
          <input
            id="title"
            type="text"
            class="w-full border border-gray-200 rounded-md py-2 px-4 focus:outline-none text-[#333333d8] focus:ring-4 focus:ring-violet-400"
            placeholder="Work name"
            name="title"
          />
        </label>
        <label for="work_link" class="block w-full mb-4">
          <p class="text-gray-600 mb-1">Work link:</p>
          <input
            id="work_link"
            type="text"
            class="w-full border border-gray-200 rounded-md py-2 px-4 focus:outline-none text-[#333333d8] focus:ring-4 focus:ring-violet-400"
            placeholder="Description"
            name="work_link"
          />
        </label>
        <label for="work_pc" class="block w-full mb-4">
          <p class="text-gray-600 mb-1">Work image file for PC:</p>
          <input
            id="work_pc"
            type="file"
            class="w-full block bg-white border border-gray-200 rounded-md py-2 px-4 focus:outline-none text-[#333333d8] focus:ring-4 focus:ring-violet-400"
            placeholder="Select file"
            name="work_pc"
          />
        </label>
        <label for="work_phone" class="block w-full mb-4">
          <p class="text-gray-600 mb-1">Work image file for phone:</p>
          <input
            id="work_phone"
            type="file"
            class="w-full block bg-white border border-gray-200 rounded-md py-2 px-4 focus:outline-none text-[#333333d8] focus:ring-4 focus:ring-violet-400"
            placeholder="Select file"
            name="work_phone"
          />
        </label>
        <label for="lang" class="block w-full">
          <p class="text-gray-600 mb-1">Language:</p>
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
