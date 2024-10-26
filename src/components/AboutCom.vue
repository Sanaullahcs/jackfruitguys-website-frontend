<template>
  <div style="color: black" class="mb-16 pb-16">
    <v-row class="mx-2 mx-md-16">
      <!-- Text Section -->
      <v-col cols="12" md="6" class="d-flex flex-column justify-center">
        <div class="about-content mx-auto">
          <MotionGroup preset="slideVisibleLeft" :duration="1200">
            <h2 class="jackfruitsHeading text-left fontSize50">
              {{ sectionThree.section_3_title }}
            </h2>
          </MotionGroup>
          <MotionGroup preset="slideVisibleLeft" :duration="1600">
            <p class="about-txt" v-html="sectionThree.text"></p>
          </MotionGroup>
          <MotionGroup preset="fadeVisible" :duration="1200">
            <router-link class="text-decoration-none" to="/about"
              ><v-btn elevation="0" class="AboutUsButton"
                >About Us</v-btn
              ></router-link
            >
          </MotionGroup>
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
        <MotionGroup preset="slideVisibleRight" :duration="1200">
          <v-img
            :src="sectionThree.image"
            class="about-side-img joinusimgCss"
            max-height="80vh"
            max-width="100%"
            alt="logo"
          />
        </MotionGroup>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  props: {
    sectionThree: {
      type: Object,
      required: true, // Set to true if the prop is required
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.AboutUsButton {
  background-color: #9ec43b;
  text-transform: capitalize;
  min-width: 180px;
  min-height: 40px;
  border-radius: 8px;
  font-size: 18px;
}
.fontSize50 {
  font-size: 50px !important;
  font-weight: 700;
}
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
  font-size: 18px;
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
