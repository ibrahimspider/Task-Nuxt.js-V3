<template>
  <section class="bg-black relative pt-8 top-footer overflow-hidden">
    <img class="absolute top-0 right-0 w-24" src="/images/sale.png" alt="" />
    <div class="z-10 w-full h-full sm:pt-2.5 relative">
      <div
        class="row w-full h-full relative felx flex-col justify-center items-center"
      >
        <span class="prick z-0 absolute rounded-full"></span>
        <div class="flex justify-center items-end">
          <div
            class="my-12 text-white relative text-center"
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
          >
            <p class="uppercase text-xl font-light">CURLING IRONS</p>
            <p
              class="font-semibold max-w-2xl text-center leading-normal size-1 px-2"
            >
              Super Straight In A Single Stroke
            </p>
          </div>
        </div>
        <div class="z-10 w-full my-12 relative">
          <div class="flex items-center justify-center">
            <div
              class="img-box"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <NuxtLink to="/"
                ><img class="w-full img-2" src="/images/home-section-1-1.png"
              /></NuxtLink>
            </div>
            <div
              class="img-box"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <NuxtLink to="/"
                ><img class="w-full img-1" src="/images/home-section-1-2.png"
              /></NuxtLink>
            </div>
          </div>
        </div>
        <div
          class="text text-center flex justify-center items-center flex-col z-10"
        >
          <p class="mb-4 sm:mt-8 size-2 font-medium px-8">
            The perfect combination of a flat iron with the precision of a
            paddle brush for sleek, healthy-looking hair.
          </p>
          <NuxtLink
            to="/"
            class="btn trans mb-10 hover:text-white text-black border-2 my-4 border-white rounded-full bg-white hover:bg-black leading-9"
          >
            Shop Now
          </NuxtLink>
        </div>
        <!-- tetx name -->
        <p class="text-name absolute z-0">S3 Lite</p>
      </div>
    </div>
  </section>
</template>
  
  <script setup>
</script>
  
  <style scoped>
.top-footer {
  width: 100%;
  min-height: 100vh;
}
.row {
  z-index: 1;
  display: grid;
  grid-template-rows: 1fr 0.5fr 0.5fr 1fr;
}
.img-box {
  width: 50vw;
}
.img-box .img-1 {
  width: 100%;
  transform: scale(1.47) translateX(-2%);
}
.img-box .img-2 {
  width: 100%;
  transform: scale(1.47) translateX(2%);
}
.prick {
  content: "";
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%);
  border-radius: 200px 200px 0 0;
  width: 350px;
  height: 80%;
  max-width: 400px;
  z-index: 0;
  grid-row: 1/3;
  background-color: rgb(156, 40, 40);
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
  position: absolute;
  bottom: -6%;
  left: 0;
  font-size: clamp(10rem, 30vw, 60rem);
  font-weight: 700;
  white-space: nowrap;
  line-height: 100%;
  z-index: 0;
  color: rgba(255, 255, 255, 0.1);
}
.size-1 {
  font-size: clamp(2.1rem, 2.5vw, 7rem) !important;
}
.size-2 {
  font-size: clamp(1.5rem, 1.8vw, 1.5rem) !important;
}
.trans {
  transition: all 300ms ease-in-out;
}
@media screen and (max-width: 1000px) {
  .img-box .img-2 {
    transform: scale(3.8) translateX(-19%);
  }
  .img-box .img-1 {
    transform: scale(3.8) translateX(19%);
  }
  .img-box {
    margin-top: 30px;
    margin-bottom: 50px;
  }
  .size-2 {
    font-size: 22px !important;
  }
}
</style>