<template>
  <footer class="bg-black py-12 px-4 md:px-12">
    <div class="grid grid-cols-12 gap-4 md:px-4 py-10">
      <div class="col-span-12 lg:col-span-4 mb-8">
        <div class="mb-4 pr-8">
          <span class="uppercase text-2xl font-bold text-white"
            ><LogoSvg
          /></span>
          <p class="info-text inline">
            ,INC. Registered in The United States of America, The United
            Kingdom, The United Arab Emirates, The European Union, Saudi Arabia,
            Kuwait, Qatar, Bahrain, South Africa, Egypt and Oman.
          </p>
        </div>
        <div class="footer-social">
          <p class="mb-3 info-text">
            HotLine
            <span class="text-white">(+202)19698</span>
          </p>
          <p class="info-text">support@rushbrush.com</p>
          <div class="social">
            <ul class="text-white flex">
              <li class="mr-3" v-for="icon in socialIcons" :key="icon">
                <a href="" class="icon"
                  ><font-awesome-icon :icon="`fa-brands ${icon}`" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="company flex flex-row flex-wrap w-full lg:justify-end col-span-12 lg:col-span-8"
      >
        <div class="mx-4">
          <h4 class="text-white mb-3">Company</h4>
          <a href="" v-for="company in companyList" :key="company">{{
            company
          }}</a>
        </div>
        <div class="mx-4">
          <h4 class="text-white mb-3">Shop</h4>
          <a href="" v-for="shop in shopList" :key="shop">{{ shop }}</a>
        </div>
        <div class="mx-4">
          <h4 class="text-white mb-3">Payment</h4>
          <a href="" v-for="payment in paymentList" :key="payment">{{
            payment
          }}</a>
        </div>
        <div class="mx-4">
          <h4 class="text-white mb-3">Support</h4>
          <a href="" v-for="support in supportList" :key="support">{{
            support
          }}</a>
        </div>
        <div class="mx-4">
          <h4 class="text-white mb-3">Opening Time</h4>
          <a href="" v-for="opening in openingList" :key="opening">{{
            opening
          }}</a>
        </div>
      </div>
    </div>
    <!-- Footer Bottom -->
    <FooterBottom />
  </footer>
</template>

<script setup >
const socialIcons = [
  "fa-facebook-square",
  "fa-twitter-square",
  "fa-instagram-square",
  "fa-youtube-square",
  "fa-tiktok",
  "fa-linkedin",
  "fa-whatsapp",
  "fa-pinterest",
];
const companyList = [
  "About Us",
  "ISO",
  "Terms",
  "Store Locator",
  "Privacy Policy",
];
const shopList = ["Curling Irons", "Air Stylers", "Hot Brushes"];
const paymentList = [
  "Installment",
  "Cash On Delivery",
  "Track Your Order",
  "Refund & Returns",
  "Vodafone Cash",
  "Redeem Points",
];
const supportList = ["Contact us", "Warranty", "Quality Policy", "Careers"];
const openingList = ["Sun-Thu: 10AM - 10PM", "Sat: 11AM - 9PM"];
</script>

<style scoped>
.info-text {
  color: #737373;
  font-size: 16px;
}
.company {
  position: relative;
  width: 100%;
  flex-grow: 1;
}
.company a {
  color: #737373;
  font-size: 14px;
  transition: all 200ms ease-in-out;
  display: block;
  margin-bottom: 3px;
}
.company a:hover {
  color: #fff;
}
</style>