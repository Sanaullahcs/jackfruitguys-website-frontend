<template>
  <div
    style="
      background-color: #13a34c;
      margin-top: 20%;
      color: white;
    "
  >
    <v-row class="pt-16 mb-16">
      <v-col cols="6">
        <div class="d-flex justify-center position-relative">
          <v-img max-width="285px" src="../assets/images/footerLogo.png"></v-img>
          <v-img
            max-width="185px"
            class="bg-footer-img"
            src="../assets/images/footerimg.png"
          ></v-img>
        </div>
      </v-col>
      <v-col cols="3">
        <div class="mt-10">
          <p class="footerHead">Get in Touch</p>
          <p class="footerText">
            <bold class="font-weight-500">Email:</bold> info@jackfruitguys.com
          </p>
          <p class="footerText">
            <bold class="font-weight-500">Phone:</bold> +52 1 644 246 6071
          </p>
          <p class="footerText">
            <bold class="font-weight-500">Email:</bold> info@jackfruitguys.com
          </p>
          <p class="footerText">
            <bold class="font-weight-500">Phone:</bold> +52 1 644 246 6071
          </p>
        </div>
      </v-col>
      <v-col cols="3">
        <div class="mt-10">
          <p class="footerHead">Follow Us</p>
          <p class="footerText">Twitter</p>
          <p class="footerText">Instagram</p>
          <p class="footerText">LinkedIn</p>
        </div>
      </v-col>
    </v-row>
    <div style="background: #0e9242">
      <v-container>
        <p class="footerText">
          Copyright 2024, Jackfruite Guys | All rights reserved.
        </p>
      </v-container>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
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
