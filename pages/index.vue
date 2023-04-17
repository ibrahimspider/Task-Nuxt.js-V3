<template>
  <div class="overflow-hidden w-full">
    <!-- start header -->
    <Header />
    <!-- end header -->
    <!-- start first-section -->
    <section class="bg-gray-200 p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <ProductBox />
    </section>
    <!-- end first-section -->
    <!-- start Dark-section -->
    <section class="bg-black p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <DarkBox />
    </section>
    <!-- end Dark-section -->
    <!-- start Full-section -->
    <section class="bg-gray-200 p-8">
      <FullBox />
    </section>
    <!-- end Full-section -->
    <!-- start Full-Dark-section -->
    <section class="bg-black p-8">
      <FullDark />
    </section>
    <!-- end Full-Dark-sectisection -->
    <section class="bg-gray-200 p-8">
      <LastFullBox />
    </section>
    <!-- end Last-Full-box-section -->
    <!-- start Last-Full-box-section -->
    <section class="bg-black p-8">
      <LastFullDarkBox />
    </section>
    <!-- end Last-Full-box-section -->
    <!-- start Top-Footer -->
    <TopFooter />
    <!-- end Top-Footer -->
  </div>
</template>
<script setup>
</script>
<style scoped>
</style>