<template>
  <div style="background-color: #13a34c; color: white">
    <v-row class="pt-16 mb-16 px-16">
      <v-col cols="12" lg="3" md="3" sm="12">
        <div class="d-flex justify-center position-relative">
          <v-img
            max-width="285px"
            src="../assets/images/footerLogo.png"
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
            <p class="footerLink">ABOUT</p>
          </div>
          <div>
            <p class="footerLink">Sustainability</p>
          </div>
          <div>
            <p class="footerLink">BENEFITS</p>
          </div>
          <div>
            <p class="footerLink">Products</p>
          </div>
          <div>
            <p class="footerLink">Recipes</p>
          </div>
          <div>
            <p class="footerLink">EXPERIENCE</p>
          </div>
          <div>
            <p class="footerLink">PRESENCE</p>
          </div>
          <div>
            <p class="footerLink">PARTNERS</p>
          </div>
          <div>
            <p class="footerLink">CONTACT</p>
          </div>
        </div>
      </v-col>
    </v-row>
    <div style="background: #0e9242" class="px-16">
      <p class="footerText">
        Copyright 2024, Jackfruite Guys | All rights reserved.
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.footer-wrapper {
  display: flex;
  gap: 10px;
  margin: 30px 0px;
  flex-wrap: wrap;
}
.footerHead {
  font-family: "Playfair Display", serif;
  font-size: 25px;
  font-weight: 700;
}
.footerText {
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  line-height: 50px;
  font-weight: 400;
}
.footerLink {
  text-transform: uppercase;
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
