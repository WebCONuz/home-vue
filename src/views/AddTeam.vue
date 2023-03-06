<script setup></script>

<template>
  <div class="container min-h-screen flex flex-col items-center justify-center">
    <h1 class="text-center mb-2 text-3xl font-semibold text-violet-700">
      Add new Team member
    </h1>
    <router-link
      to="/admin/team"
      class="block text-center text-gray-400 hover:text-gray-800 duration-200 mb-4"
    >
      All Team Members
    </router-link>
    <form action="" class="block sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[55%]">
      <div class="w-full p-4 bg-gray-200 rounded-lg">
        <label for="full_name" class="block w-full mb-4">
          <p class="text-gray-600 mb-1">Full name:</p>
          <input
            id="full_name"
            type="text"
            class="w-full border border-gray-200 rounded-md py-2 px-4 focus:outline-none text-[#333333d8] focus:ring-4 focus:ring-violet-400"
            placeholder="Member fullname"
            name="full_name"
          />
        </label>
        <label for="description" class="block w-full mb-4">
          <p class="text-gray-600 mb-1">Description about new member:</p>
          <input
            id="description"
            type="text"
            class="w-full border border-gray-200 rounded-md py-2 px-4 focus:outline-none text-[#333333d8] focus:ring-4 focus:ring-violet-400"
            placeholder="Description"
            name="description"
          />
        </label>
        <label for="teamImg" class="block w-full mb-4">
          <p class="text-gray-600 mb-1">New member avatar:</p>
          <input
            id="teamImg"
            type="file"
            class="w-full block bg-white border border-gray-200 rounded-md py-2 px-4 focus:outline-none text-[#333333d8] focus:ring-4 focus:ring-violet-400"
            placeholder="Select file"
            name="teamImg"
          />
        </label>
        <label for="phone" class="block w-full mb-4">
          <p class="text-gray-600 mb-1">Phone number:</p>
          <input
            id="phone"
            type="text"
            class="w-full border border-gray-200 rounded-md py-2 px-4 focus:outline-none text-[#333333d8] focus:ring-4 focus:ring-violet-400"
            placeholder="Phone number"
            name="phone"
          />
        </label>
        <label for="email" class="block w-full mb-4">
          <p class="text-gray-600 mb-1">Email address:</p>
          <input
            id="email"
            type="text"
            class="w-full border border-gray-200 rounded-md py-2 px-4 focus:outline-none text-[#333333d8] focus:ring-4 focus:ring-violet-400"
            placeholder="Email"
            name="email"
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
