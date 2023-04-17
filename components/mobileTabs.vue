<template>
  <div class="mobile-tabs fixed bg-black w-full z-50 bottom-0 lg:hidden block">
    <div class="tabs flex justify-between items-end px-12 py-4">
      <a href=""><font-awesome-icon :icon="['fas', 'house']" /></a>
      <a class="relative" href="">
        <span class="cart absolute">0</span>
        <CartIcon />
      </a>
      <a href=""><font-awesome-icon :icon="['fas', 'heart']" /></a>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.tabs {
  background-color: #181818;
  width: 80%;
  border-radius: 50px;
  color: white;
  margin: auto;
  margin-bottom: 10px;
  margin-top: 10px;
  font-size: 20px;
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