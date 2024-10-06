<template>
  <div style="color: black;" class="mb-16 pb-16">
    <v-row class="mx-2 mx-md-16">
      <!-- Text Section -->
      <v-col cols="12" md="6" class="d-flex flex-column justify-center">
        <div class="about-content mx-auto">
          <h2 class="jackfruitsHeading text-left">About Us</h2>
          <p class="about-txt">
            At Jackfruit Guys, we are passionate about bringing the best quality
            jackfruit products to your table. Our journey began with a simple
            mission – to share the incredible taste and benefits of jackfruit
            with the world. Learn more about our story and our commitment to
            sustainability and quality.
          </p>
          <!-- <div class="position-relative mt-5 image-section">
            <v-img
              style="z-index: 2"
              src="../assets/images/about1.png"
              alt="logo"
              class="about-img"
            />
            <v-img
              class="shadow"
              src="../assets/images/image-shadow.png"
              alt="logo"
            />
            <v-btn elevation="0" class="readmorebtn">Read More</v-btn>
          </div> -->
        </div>
      </v-col>

      <!-- Image Section -->
      <v-col
        cols="12"
        md="6"
        class="d-flex justify-md-start justify-center align-center"
      >
        <v-img
          src="../assets/images/about2.jpg"
          class="about-side-img"
          max-width="100%"
          alt="logo"
        />
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.readmorebtn {
  background-color: #9ec43b;
  text-transform: capitalize;
  width: 150px !important;
  border-radius: 0;
  position: absolute !important;
  top: -25px;
  z-index: 2;
  right: 20px;
}

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
  line-height: 1.2; /* Adjusted for better responsiveness */
  letter-spacing: -0.03em;
  text-align: left;
}

.about-txt {
  font-family: "Poppins";
  font-size: 15px;
  margin-bottom: 30px;
  font-weight: 400;
  text-align: left;
}

/* Responsive Styling */
.about-content {
  width: 75%;
  margin-left: auto;
}

@media (max-width: 600px) {
  .about {
    font-size: 28px;
    line-height: 1.2;
  }

  .about-txt {
    font-size: 14px;
  }

  .about-content {
    width: 100%;
    margin-left: 0;
  }

  .image-section {
    text-align: center;
    height: 100%;
  }

  .about-img {
    width: 100%;
  }

  .readmorebtn {
    width: 100%;
    position: static;
    margin-top: 15px;
  }

  .shadow {
    left: 0;
    min-width: 100%;
  }
}
</style>
