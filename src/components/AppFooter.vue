<template>
  <div style="background-color: #13a34c; color: white">
    <v-row class="pt-16 mb-6 px-16">
      <v-col cols="12" lg="3" md="3" sm="12">
        <div class="d-flex justify-center position-relative">
          <v-img
            max-width="180px"
            class="mt-n10"
            src="../assets/images/logoFooterNew.svg"
          ></v-img>
          <!-- <v-img
            max-width="185px"
            class="bg-footer-img"
            src="../assets/images/footerimg.png"
          ></v-img> -->
        </div>
      </v-col>
      <v-col cols="12" lg="9" md="9" sm="12">
        <div class="footer-wrapper">
          <div>
            <router-link class="text-decoration-none" to="/about"
              ><p class="footerLink">About us</p></router-link
            >
          </div>
          <div>
            <router-link class="text-decoration-none" to="/sustainability"
              ><p class="footerLink">Sustainability</p></router-link
            >
          </div>

          <div>
            <router-link class="text-decoration-none" to="/benefits">
              <p class="footerLink">BENEFITS</p></router-link
            >
          </div>
          <div>
            <router-link class="text-decoration-none" to="/products"
              ><p class="footerLink">Products</p></router-link
            >
          </div>
          <div>
            <router-link class="text-decoration-none" to="/experience"
              ><p class="footerLink">EXPERIENCE</p></router-link
            >
          </div>

          <div>
            <router-link class="text-decoration-none" to="/presence">
              <p class="footerLink">PRESENCE</p></router-link
            >
          </div>
          <div>
            <router-link class="text-decoration-none" to="/partner"
              ><p class="footerLink">PARTNERS</p></router-link
            >
          </div>
          <div>
            <router-link class="text-decoration-none" to="/recipe"
              ><p class="footerLink">Recipes</p></router-link
            >
          </div>
          <div>
            <router-link class="text-decoration-none" to="/contact"
              ><p class="footerLink">CONTACT</p></router-link
            >
          </div>
          <div>
            <router-link class="text-decoration-none" to="/blog"
              ><p class="footerLink">Blogs</p></router-link
            >
          </div>

          <div>
            <router-link class="text-decoration-none" to="/join-us"
              ><p class="footerLink">Join us</p></router-link
            >
          </div>
        </div>
      </v-col>
    </v-row>
    <div style="background: #0e9242" class="px-16 d-flex justify-space-between">
      <p class="footerText">
        Copyright 2024, Jackfruit Guys | All rights reserved.
      </p>
      <div class="d-flex mt-4">
        <span
          ><v-img
            max-width="12px"
            min-width="12px"
            class="mx-3"
            src="../assets/images/fb.png"
          ></v-img
        ></span>
        <span
          ><v-img
            max-width="20px"
            class="mx-3"
            min-width="20px"
            src="../assets/images/insta.png"
          ></v-img
        ></span>
        <span
          ><v-img
            max-width="20px"
            class="mx-3"
            min-width="23px"
            src="../assets/images/x.png"
          ></v-img
        ></span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.text-decoration-none {
  text-decoration: none;
}
.footer-wrapper {
  display: flex;
  gap: 10px;
  margin: 35px 0px;
  flex-wrap: wrap;
}
.footerHead {
  font-family: "Playfair Display", serif;
  font-size: 25px;
  font-weight: 700;
}
.footerText {
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  line-height: 50px;
  font-weight: 400;
}
.footerLink {
  text-transform: uppercase !important;
  color: white;
  text-decoration: none;
  font-size: 14px !important;
  text-transform: none;
}
.font-weight-500 {
  font-weight: 500;
}
.bg-footer-img {
  position: absolute;
  left: 0px;
  top: 70px;
  min-height: 250px;
  min-width: 129px;
}
</style>
