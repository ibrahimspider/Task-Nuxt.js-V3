<template>
  <aside class="sidebar bg-white fixed flex flex-col text-black">
    <div>
      <div
        class="brand bg-black px-6 text-white flex justify-start items-center"
      >
        <NuxtLink class="text-2xl pl-2" to="/"><LogoSvg /></NuxtLink>
        <button class="colse absolute right-10 text-2xl">
          <font-awesome-icon :icon="['fas', 'xmark']" />
        </button>
      </div>
    </div>
    <div class="p-4">
      <div class="box flex flex-col p-4">
        <p class="mb-2">Categories</p>
        <NuxtLink
          class="pl-3"
          to="/"
          v-for="categorie in categoriesList"
          :key="categorie"
          >{{ categorie }}</NuxtLink
        >
      </div>
      <div class="box flex flex-col p-4">
        <p class="mb-2">My Account</p>
        <NuxtLink
          class="pl-3"
          to="/"
          v-for="account in accountList"
          :key="account"
          >{{ account }}</NuxtLink
        >
      </div>
      <div class="box flex flex-col p-4">
        <p class="mb-2">Support</p>
        <NuxtLink
          class="pl-3"
          to="/"
          v-for="support in supportList"
          :key="support"
          >{{ support }}</NuxtLink
        >
      </div>
      <div class="box mb-4">
        <p class="mb-2 text-center">Contact Us</p>
        <div class="flex">
          <p class="contact flex flex-col justify-center items-center w-full">
            <NuxtLink to="/" class="icone-link">
              <font-awesome-icon :icon="['fas', 'envelope']" />
            </NuxtLink>
            <span>Email </span>
          </p>
          <p class="contact flex flex-col justify-center items-center w-full">
            <NuxtLink to="/" class="icone-link">
              <font-awesome-icon :icon="['fas', 'mobile']" />
            </NuxtLink>
            <span>Email </span>
          </p>
        </div>
      </div>
      <p class="text-center available-text">
        Available Sundays to Thursday, 10:00 AM - 10:00 PM, On Saturday we're
        available 11:00 AM - 09:00 PM
      </p>
    </div>
  </aside>
</template>

<script setup>
const categoriesList = ["Curling Irons", "Air Stylers", "Hot Brushes"];
const accountList = [" My Cart", "My WishList", "Settings"];
const supportList = [
  "About Us",
  "Privacy Policy",
  "Terms & Conditions",
  "Refund & Returns",
];
</script>

<style scoped>
.sidebar {
  top: 0;
  width: 320px;
  max-width: 100%;
  height: 100vh;
  max-height: 100%;
  margin: 0;
  outline: 0;
  -webkit-transform: translateX(0);
  transform: translateX(0);
  z-index: 99999;
  overflow-y: auto;
}
.contact {
  border-block: 1px solid #dadada;
}
.brand {
  height: 72.3px;
}
.brand a {
  line-height: 72.3px;
  font-weight: bold;
}
.colse {
  line-height: 72.3px;
}
.box p {
  font-size: 20px;
  font-weight: 500;
}
.box a {
  color: #808080;
}
.box .icone-link {
  color: #000;
}
.available-text {
  color: #808080;
}
</style>