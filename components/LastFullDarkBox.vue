<template>
  <div class="box dark rounded-3xl overflow-hidden relative w-full">
    <div class="grid grid-cols-12 gap-4 z-10">
      <img class="absolute top-0 right-0 w-24" src="/images/sale.png" alt="" />

      <div class="info col-span-12 sm:col-span-5 p-12 h-full relative">
        <div class="flex flex-col justify-center h-full">
          <div
            class="tabs cursor-pointer relative z-10 flex py-6"
            data-aos="fade-down"
            data-aos-duration="700"
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
      </div>
      <div class="col-span-12 sm:col-span-7 z-10">
        <div class="h-full flex flex-col justify-center items-center w-full">
          <div
            class="mb-6"
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-duration="800"
          >
            <NuxtLink class="img" to="/">
              <img
                :class="switchState ? 'switch' : ''"
                :src="`/images/${currentSrc}.png`"
              />
            </NuxtLink>
          </div>
          <div class="img-slider mb-8">
            <ul class="w-full flex justify-center items-center pt-12">
              <li
                data-aos="zoom-in"
                data-aos-duration="800"
                class="mr-2 relative rounded-full flex justify-center items-center overflow-hidden"
                v-for="src in imagesSrc"
                :key="src"
                @click="switchImg(src)"
              >
                <img class="" :src="`/images/${src}.png`" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <span class="text-background absolute z-0"> S3 Lite</span>
  </div>
</template>
    
  <script>
export default {
  data() {
    return {
      imagesSrc: ["slide-1", "slide-2", "slide-3", "slide-4"],
      switchState: false,
      currentSrc: "home-section-4-1",
    };
  },
  methods: {
    switchImg(newSrc) {
      this.switchState = true;
      setTimeout(() => {
        this.currentSrc = newSrc + "-slide";
        this.switchState = false;
      }, "500");
    },
  },
};
</script>
<style scoped>
.dark {
  background-color: rgb(30, 30, 30);
}
.img img {
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  transform: scale(1.3) translateX(23%);
  transition: 0.4s;
  transition: all 300ms ease-in-out;
}
.img .switch {
  transform: scale(1.3) translateX(200%) !important;
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
  color: rgb(158, 158, 158);
  font-size: clamp(2rem, 2vw, 2rem);
}
.color-3 {
  color: rgb(212, 212, 212);
  font-size: clamp(3rem, 2.8vw, 6rem);
  line-height: 159%;
}
.color-4 {
  color: rgb(130, 130, 130);
  font-size: clamp(1.3rem, 2vw, 1rem);
}
.btn {
  display: inline-block;
  border: 1px solid #fff;
  padding: 7px 50px;
  transition: 0.2s ease-in-out;
  line-height: 35px;
  font-size: clamp(1rem, 1.7vw, 1.5rem);
  white-space: nowrap;
  text-align: center;
}
.text-background {
  font-size: clamp(25rem, 30vw, 60rem);
  bottom: -13%;
  line-height: 100%;
  font-weight: 700;
  text-align: start;
  width: 100%;
  color: rgb(35, 35, 35);
  text-align: center;
}
.img-slider li {
  display: block;
  cursor: pointer;
  height: 4rem;
  width: 4rem;
  background-color: #c7c7c7;
}
.img-slider li img {
  height: 4rem;
  margin: auto;
}
</style>