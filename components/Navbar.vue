<template>
  <!-- navbar goes here -->
  <nav class="bg-black text-white">
    <div class="mx-auto px-12">
      <div class="flex justify-between">
        <div class="flex space-x-4">
          <!-- logo -->
          <div class="py-6">
            <NuxtLink class="uppercase pr-3 text-xl font-bold" to="/"
              >rushbrush</NuxtLink
            >
          </div>

          <!-- primary nav -->
          <div class="hidden md:flex items-center space-x-1 py-6 text-gray-400">
            <NuxtLink to="/" class="pr-2 hover:text-white"
              >Curling Irons</NuxtLink
            >
            <NuxtLink to="/" class="pr-2 hover:text-white"
              >Air Stylers</NuxtLink
            >
            <NuxtLink to="/" class="pr-2 hover:text-white"
              >Hot Brushes</NuxtLink
            >
          </div>
        </div>

        <!-- secondary nav -->
        <div class="flex items-center justify-center space-x-2">
          <NuxtLink to="/">
            <font-awesome-icon icon="fa-brands fa-twitter-square" />
          </NuxtLink>
          <NuxtLink to="/">
            <font-awesome-icon icon="fa-brands fa-twitter-square" />
          </NuxtLink>
          <NuxtLink to="/">
            <font-awesome-icon icon="fa-brands fa-twitter-square" />
          </NuxtLink>
          <button
            class="border-2 my-4 border-white h-5 overflow-hidden felx flex-col justify-center items-center rounded-sm"
          >
            <img class="w-6" src="/images/eg.png" alt="" />
          </button>
          <!-- mobile button goes here -->
          <div class="md:hidden flex items-center">
            <button class="mobile-menu-button">
              <svg
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- mobile menu -->
    <div class="mobile-menu hidden md:hidden">
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Features</a>
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</a>
    </div>
  </nav>
</template>

<script>
</script>

<style scoped>
</style>