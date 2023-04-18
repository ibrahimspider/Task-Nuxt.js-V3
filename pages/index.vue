<template>
  <div class="overflow-hidden w-full">
    <Loader v-if="loading" />
    <!-- start header -->
    <Header />
    <!-- end header -->
    <!-- start first-section -->
    <section
      class="bg-gray-200 md:p-8 p-2 grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      <ProductBox />
    </section>
    <!-- end first-section -->
    <!-- start Dark-section -->
    <section class="bg-black md:p-8 p-2 grid grid-cols-1 md:grid-cols-2 gap-8">
      <DarkBox />
    </section>
    <!-- end Dark-section -->
    <!-- start Full-section -->
    <section class="bg-gray-200 md:p-8 p-2">
      <FullBox />
    </section>
    <!-- end Full-section -->
    <!-- start Full-Dark-section -->
    <section class="bg-black md:p-8 p-2">
      <FullDark />
    </section>
    <!-- end Full-Dark-sectisection -->
    <section class="bg-gray-200 md:p-8 p-2">
      <LastFullBox />
    </section>
    <!-- end Last-Full-box-section -->
    <!-- start Last-Full-box-section -->
    <section class="bg-black md:p-8 p-2">
      <LastFullDarkBox />
    </section>
    <!-- end Last-Full-box-section -->
    <!-- start Top-Footer -->
    <TopFooter />
    <!-- end Top-Footer -->

    <!-- mobile tabs -->
    <MobileTabs />
  </div>
</template>
<script setup lang="ts">
const nuxtApp = useNuxtApp();
const loading = ref(false);
nuxtApp.hook("page:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  loading.value = false;
});
</script>
<style scoped>
</style>