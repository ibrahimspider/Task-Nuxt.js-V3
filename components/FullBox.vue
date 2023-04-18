<template>
  <div class="box bg-white rounded-3xl overflow-hidden relative w-full">
    <div class="grid grid-cols-12 gap-4 z-10">
      <img
        class="absolute top-0 right-0 w-24 z-50"
        src="/images/sale.png"
        alt=""
      />

      <div
        class="img col-span-12 sm:col-span-7"
        data-aos="fade-right"
        data-aos-offset="500"
        data-aos-duration="800"
      >
        <NuxtLink to="/">
          <img class="w-full h-auto lg:h-full" src="/images/m2-plus-5.png" />
        </NuxtLink>
      </div>
      <div
        class="info col-span-12 sm:col-span-5 p-12 h-full relative"
        data-aos="fade-left"
        data-aos-offset="500"
        data-aos-duration="800"
      >
        <div class="flex flex-col justify-center h-full relative z-10">
          <div
            class="tabs cursor-pointer relative z-10 flex py-6"
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-anchor-placement="bottom-bottom"
          >
            <img class="ml-2" src="/images/Ionic.png" />
            <img class="ml-2" src="/images/Ionic.png" />
          </div>
          <div class="my-3 z-10">
            <p class="color-1 font-medium uppercase my-2">CURLING IRONS</p>
            <p class="color-2 font-bold my-2">
              Super Straight In A Single Stroke
            </p>
            <p class="color-3 font-bold my-2">S3 Lite</p>
            <p class="color-4 my-4 font-medium">
              The perfect combination of a flat iron with the precision of a
              paddle brush for sleek, healthy-looking hair.
            </p>
            <NuxtLink
              class="btn my-14 bg-white hover:bg-black hover:text-white"
              to="/"
              >Shop Now</NuxtLink
            >
          </div>
        </div>
        <span class="text-background absolute font-bold"> S3 Lite</span>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.img img {
  object-fit: cover;
}
.tabs img {
  width: 50px;
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
.text-background {
  color: rgb(244, 244, 244);
  font-size: clamp(15rem, 20vw, 30rem);
  bottom: -8%;
  line-height: 100%;
  width: 100%;
  z-index: 0;
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