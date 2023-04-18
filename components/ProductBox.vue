<template>
  <div
    class="rounded-3xl relative bg-white overflow-hidden"
    v-for="product in products"
    :key="product"
  >
    <img class="absolute top-0 right-0 w-24" src="/images/sale.png" alt="" />
    <div class="grid grid-cols-2 gap-2 z-10 relative">
      <div class="z-2 relative p-6">
        <div
          class="tabs cursor-pointer relative z-10 flex py-6"
          data-aos="fade-down"
          data-aos-duration="700"
          data-aos-anchor-placement="bottom-bottom"
        >
          <img class="ml-2" src="/images/Ionic.png" />
          <img class="ml-2" src="/images/Ionic.png" />
        </div>
        <div class="my-3">
          <p class="color-1 font-medium uppercase my-2">CURLING IRONS</p>
          <p class="color-2 font-bold my-2">
            Super Straight In A Single Stroke
          </p>
          <p class="color-3 font-bold my-2">S3 Lite</p>
          <p class="color-4 my-4 font-medium">
            The perfect combination of a flat iron with the precision of a
            paddle brush for sleek, healthy-looking hair.
          </p>
          <NuxtLink class="btn my-14 hover:bg-black hover:text-white" to="/"
            >Shop Now</NuxtLink
          >
        </div>
      </div>
      <div class="flex justify-center items-end">
        <NuxtLink
          class="h-full flex items-end"
          to="/"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-anchor-placement="bottom-bottom"
          ><img class="w-full img" :src="`/images/${product}`"
        /></NuxtLink>
      </div>
    </div>
    <span class="text-background absolute font-bold"> S3 Lite</span>
  </div>
</template>

<script setup>
const products = ["home-section-2-6.png", "5in1-spin-1.jpg"];
</script>

<style scoped>
.text-background {
  color: rgb(244, 244, 244);
  font-size: clamp(10rem, 12vw, 30rem);
  bottom: -4%;
  line-height: 100%;
  bottom: -4%;
  z-index: 0;
  text-align: center;
}
.img {
  height: 90%;
  object-fit: cover;
  max-height: 700px;
}
.tabs img {
  max-width: 50px;
}
.color-1 {
  color: rgb(154, 119, 86);
  font-size: clamp(1rem, 1.5vw, 1.3rem);
  letter-spacing: 5px;
}
.color-2 {
  color: rgb(89, 89, 89);
  font-size: clamp(1.3rem, 2.2vw, 1.2rem);
}
.color-3 {
  color: rgb(33, 33, 33);
  font-size: clamp(2.3rem, 2.8vw, 6rem);
  line-height: 159%;
}
.color-4 {
  color: rgb(112, 112, 112);
  font-size: clamp(1.1rem, 2.7vw, 1rem);
}
.btn {
  display: inline-block;
  border: 1px solid #000;
  padding: 2px 50px;
  transition: 0.2s ease-in-out;
  line-height: 35px;
  font-size: clamp(1rem, 1.7vw, 1.5rem);
  white-space: nowrap;
  text-align: center;
}
@media screen and (max-width: 500px) {
  .img {
    max-height: 500px;
  }
  .btn {
    padding: 2px 30px;
  }
}
</style>