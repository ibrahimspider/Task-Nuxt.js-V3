<template>
  <!-- navbar goes here -->
  <nav class="bg-black text-white">
    <div class="mx-auto px-12">
      <div class="flex justify-between">
        <div class="flex space-x-4">
          <!-- logo -->
          <div class="py-6 flex justify-center items-center">
            <NuxtLink class="uppercase pr-3 text-2xl font-bold" to="/"
              ><LogoSvg
            /></NuxtLink>
          </div>

          <!-- primary nav -->
          <div
            class="links hidden md:flex items-center space-x-1 py-6 text-gray-400"
          >
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
        <div class="flex items-center justify-center space-x-3">
          <NuxtLink to="/" class="text-2xl">
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
          </NuxtLink>
          <NuxtLink to="/" class="text-2xl hidden lg:inline">
            <font-awesome-icon :icon="['fas', 'circle-user']" />
          </NuxtLink>
          <NuxtLink to="/" class="text-2xl relative">
            <span class="cart absolute">0</span>
            <CartIcon />
          </NuxtLink>
          <button
            class="border-2 my-4 border-white h-5 overflow-hidden felx flex-col justify-center items-center rounded-sm"
          >
            <img class="w-6" src="/images/eg.png" alt="" />
          </button>
          <!-- mobile button goes here -->
          <div class="md:hidden flex items-center">
            <button class="mobile-menu-button" @click="open">
              <NavIcon />
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- mobile menu -->
    <div class="mobile-menu block">
      <div class="side-full md:hidden" :class="isToglle ? 'toogle' : ''" @click="close">
        <div :class="isToglle ? 'sidebar-body' : 'hidden'"></div>
        <SideBar />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isToglle: false,
    };
  },
  methods: {
    close() {
      this.isToglle = false;
    },
    open() {
      this.isToglle = true;
    },
  },
};
</script>

<style scoped>
.side-full {
  position: fixed;
  width: 100vh;
  height: 100vh;
  top: 0;
  left: -350px;
  z-index: 99999;
  transition: all 250ms ease-in-out;
}
.toogle {
  left: 0;
}
.sidebar-body {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  opacity: 0.6;
  background-color: #343a40 !important;
  z-index: 99996;
  transition: all 250ms ease-in-out;
}
.links a {
  position: relative;
}
.links a::after {
  content: "";
  position: absolute;
  bottom: 0.8px;
  left: 0;
  width: 0%;
  height: 1px;
  background-color: white;
  transition: 0.3s;
}
.links a:hover::after {
  width: 100%;
}

.cart {
  top: -8px;
  right: -3px;
  background-color: rgb(5, 149, 0);
  width: 18px;
  height: 18px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 12px;
}
</style>