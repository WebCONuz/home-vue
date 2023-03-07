<script setup></script>

<template>
  <div class="container min-h-screen flex flex-col items-center justify-center">
    <div class="flex justify-between items-center w-[55%] mb-6">
      <h1 class="text-center text-2xl font-semibold text-violet-700">
        Add new Admin
      </h1>
      <router-link
        to="/admin/all"
        class="block hover:bg-gray-600 py-2 px-5 rounded-[25px] duration-200 bg-gray-400 text-white"
      >
        All Admins
      </router-link>
    </div>
    <form action="" class="block sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[55%]">
      <div class="w-full p-4 bg-gray-200 rounded-lg">
        <label for="full_name" class="block w-full mb-4">
          <p class="text-gray-600 mb-1">Full name:</p>
          <input
            id="full_name"
            type="text"
            class="w-full border border-gray-200 rounded-md py-2 px-4 focus:outline-none text-[#333333d8] focus:ring-4 focus:ring-violet-400"
            placeholder="Admin fullname"
            name="full_name"
          />
        </label>
        <label for="email" class="block w-full mb-4">
          <p class="text-gray-600 mb-1">Email:</p>
          <input
            id="email"
            type="text"
            class="w-full border border-gray-200 rounded-md py-2 px-4 focus:outline-none text-[#333333d8] focus:ring-4 focus:ring-violet-400"
            placeholder="Email"
            name="email"
          />
        </label>
        <label for="password" class="block w-full mb-4">
          <p class="text-gray-600 mb-1">Password:</p>
          <input
            id="password"
            type="password"
            class="w-full border border-gray-200 rounded-md py-2 px-4 focus:outline-none text-[#333333d8] focus:ring-4 focus:ring-violet-400"
            placeholder="Password"
            name="password"
          />
        </label>

        <label for="is_creator" class="block w-full">
          <p class="text-gray-600 mb-1">Is creator:</p>
        </label>
        <select
          name="is_creator"
          id="is_creator"
          class="w-full border border-gray-200 rounded-md py-2 px-4 focus:outline-none mb-4 text-[#333333d8] focus:ring-4 focus:ring-violet-400"
        >
          <option value="false" selected>false</option>
          <option value="true">true</option>
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
