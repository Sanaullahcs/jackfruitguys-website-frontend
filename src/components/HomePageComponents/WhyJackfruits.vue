<template>
  <div class="text-black" style="background-color: #fef9eb">
    <v-row class="py-8" align="center">
      <!-- Text Section -->
      <v-col cols="12" md="6" class="d-flex flex-column justify-center">
        <div class="ms-md-16 px-4">
          <h2 class="jackfruitsHeading text-left my-5 fontSize50">
            {{ sectionFour?.section_4_title }}
          </h2>
          <p class="about-txt" v-html="sectionFour?.text"></p>
          <v-btn elevation="0" class="readmorebtn my-5">Read More</v-btn>
        </div>
      </v-col>

      <!-- Image Section -->
      <v-col cols="12" md="6" class="d-flex justify-center">
        <v-img
          :src="sectionFour?.image"
          class="img-responsive ml-auto mb-n8"
          max-width="70%"
        ></v-img>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  props: {
    sectionFour: {
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
.fontSize50 {
  font-size: 50px !important;
  font-weight: 700;
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
  font-weight: 400;
  text-align: left;
}

.readmorebtn {
  background-color: #9ec43b;
  text-transform: capitalize;
  min-width: 180px;
  min-height: 40px;
  border-radius: 8;
  font-size: 18px;
}

/* Responsive Styling */
@media (max-width: 600px) {
  .about {
    font-size: 28px;
    line-height: 1.2;
  }

  .about-txt {
    font-size: 16px;
  }

  .ms-md-16 {
    margin-left: 0 !important;
  }

  .readmorebtn {
    width: 100%;
    text-align: center;
  }
}
</style>
