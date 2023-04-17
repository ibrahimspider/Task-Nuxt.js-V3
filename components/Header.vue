<template>
  <header class="bg-black relative pt-8">
    <img class="absolute top-0 right-0 w-24" src="/images/sale.png" alt="" />
    <div
      class="z-10 w-full h-full pt-2.5 relative flex flex-col justify-center items-center"
    >
      <div class="">
        <span class="prick z-0 absolute rounded-full"></span>
        <div
          class="mt-12 text-white relative text-center"
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <p class="uppercase text-xl font-light">CURLING IRONS</p>
          <p class="font-semibold max-w-2xl text-center leading-normal size-1">
            Super Straight In A Single Stroke
          </p>
        </div>
      </div>
      <div class="img-section flex items-center z-10 h-full">
        <div>
          <NuxtLink to="/"
            ><img
              class="w-full img-1"
              src="/images/home-section-6-3.png"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
          /></NuxtLink>
        </div>
        <div>
          <NuxtLink to="/"
            ><img
              class="w-full img-2"
              src="/images/home-section-6-4.png"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
          /></NuxtLink>
        </div>
      </div>
      <div class="text text-center flex justify-center items-center flex-col">
        <p class="mb-4 size-2 font-medium px-2 z-10">
          The perfect combination of a flat iron with the precision of a paddle
          brush for sleek, healthy-looking hair.
        </p>
        <NuxtLink
          to="/"
          class="btn trans mb-10 hover:text-white text-black border-2 my-4 border-white rounded-full bg-white hover:bg-black leading-9"
        >
          Shop Now
        </NuxtLink>
      </div>
      <!-- tetx name -->
      <p class="text-name absolute z-0">S3</p>
    </div>
  </header>
</template>

<script setup>
</script>

<style scoped>
header {
  width: 100%;
  height: calc(100vh - 76px);
}
.prick {
  content: "";
  width: 30rem;
  height: 30rem;
  left: 50%;
  top: 0;
  transform: translate(-50%);
  background-color: #6b6b6b;
}
.text p {
  font-weight: 500;
  font-size: 30px;
  text-align: center;
  max-width: 900px;
  color: rgb(176, 176, 176);
}
.btn {
  font-weight: 700;
  font-size: 25px;
  padding: 3px 50px;
}
.text-name {
  bottom: -10%;
  left: 0;
  font-size: clamp(30rem, 43vw, 80rem);
  font-weight: bolder;
  white-space: nowrap;
  line-height: 100%;
  z-index: -1;
  color: rgba(255, 255, 255, 0.1);
}
.size-1 {
  font-size: clamp(2.1rem, 3.2vw, 9rem);
}
.size-2 {
  margin-top: 20px;
  font-size: clamp(1.5rem, 1.8vw, 1.5rem) !important;
}
.trans {
  transition: all 300ms ease-in-out;
}
@media screen and (max-width: 500px) {
  .img-1 {
    transform: scale(1.4) translateX(-25px);
  }
  .img-2 {
    transform: scale(1.4) translateX(25px);
  }
  .prick {
    width: 20rem;
    height: 20rem;
  }
  .img-section {
    height: 20%;
  }
}
</style>