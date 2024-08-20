<template>
  <div style="color: black; padding-top: 200px" class="mb-16 pb-16">
    <v-row class="ms-16">
      <v-col>
        <div style="width: 75%; margin-left: auto">
          <h2 class="about">About Us</h2>
          <p class="about-txt">
            At Jackfruit Guys, we are passionate about bringing the best quality
            jackfruit products to your table. Our journey began with a simple
            mission – to share the incredible taste and benefits of jackfruit
            with the world. Learn more about our story and our commitment to
            sustainability and quality.
          </p>
          <div class="position-relative mt-5">
            <v-img
              style="z-index: 2"
              src="../assets/images/about1.png"
              alt="logo"
            />
            <v-img
              class="shadow"
              src="../assets/images/image-shadow.png"
              alt="logo"
            />
          </div>
        </div>
      </v-col>
      <v-col>
        <div>
          <v-img src="../assets/images/about2.png" width="335px" alt="logo" />
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script></script>
<style scoped>
.shadow {
  position: absolute;
  top: 20px;
  min-width: 100%;
  left: -41px;
  z-index: 0;
}
.about {
  font-family: "Poppins";
  font-size: 34px;
  font-weight: 800;
  color: #865b20;
  line-height: 81px;
  letter-spacing: -0.03em;
  text-align: left;
}
.about-txt {
  font-family: "Poppins";
  font-size: 18px;
  font-weight: 400;
  /* line-height: 36px; */
  text-align: left;
}
</style>
