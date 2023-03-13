<script setup></script>

<template>
  <section>
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center">
        <h1
          class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-color"
        >
          404
        </h1>
        <p
          class="mb-4 text-3xl tracking-tight font-bold text-color md:text-4xl"
        >
          Something's missing.
        </p>
        <p class="mb-8 text-lg font-light text-color">
          Sorry, we can't find that page. You'll find lots to explore on the
          home page.
        </p>
        <router-link to="/" class="py-3 px-8 bg-color text-white rounded-md"
          >Back to Homepage</router-link
        >
      </div>
    </div>
  </section>
</template>

<style scoped></style>
