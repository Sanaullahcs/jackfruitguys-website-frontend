<template>
  <div class="bg-main">
    <div class="py-16">
      <v-row>
        <v-col cols="12" lg="4" md="4" sm="12" xs="12">
          <div>
            <MotionGroup preset="slideVisibleBottom" :duration="1200">
              <v-img
                class="mx-auto mb-5"
                :src="sectionFive?.image1"
                max-width="95px"
              ></v-img>
            </MotionGroup>
            <MotionGroup preset="slideVisibleBottom" :duration="1400">
              <h1 class="header">{{ sectionFive?.title1 }}</h1>
            </MotionGroup>
            <MotionGroup preset="slideVisibleBottom" :duration="1600">
              <p class="header-text">
                {{ sectionFive?.description1 }}
              </p>
            </MotionGroup>
          </div>
        </v-col>
        <v-col cols="12" lg="4" md="4" sm="12" xs="12">
          <div>
            <MotionGroup preset="slideVisibleBottom" :duration="1200">
              <v-img
                class="mx-auto mb-5"
                :src="sectionFive?.image2"
                max-width="95px"
              ></v-img>
            </MotionGroup>
            <MotionGroup preset="slideVisibleBottom" :duration="1400">
              <h1 class="header">{{ sectionFive?.title2 }}</h1>
            </MotionGroup>
            <MotionGroup preset="slideVisibleBottom" :duration="1600">
              <p class="header-text">
                {{ sectionFive?.description2 }}
              </p>
            </MotionGroup>
          </div>
          <!-- <div>
            <v-img
              :src="sectionFive?.image2"
              class="mx-auto mb-5"
              max-width="95px"
            ></v-img>
            <h1 class="header">{{ sectionFive?.title2 }}</h1>
            <p class="header-text">
              {{ sectionFive?.description2 }}
            </p>
          </div> -->
        </v-col>
        <v-col cols="12" lg="4" md="4" sm="12" xs="12">
          <div>
            <MotionGroup preset="slideVisibleBottom" :duration="1200">
              <v-img
                class="mx-auto mb-5"
                :src="sectionFive?.image3"
                max-width="95px"
              ></v-img>
            </MotionGroup>
            <MotionGroup preset="slideVisibleBottom" :duration="1400">
            <h1 class="header">{{ sectionFive?.title3 }}</h1>
            </MotionGroup>
            <MotionGroup preset="slideVisibleBottom" :duration="1600">
            <p class="header-text">
              {{ sectionFive?.description3 }}
            </p>
            </MotionGroup>
          </div>
          <!-- <div>
            <v-img
              class="mx-auto mb-5"
              :src="sectionFive?.image3"
              max-width="95px"
            ></v-img>
            <h1 class="header">{{ sectionFive?.title3 }}</h1>
            <p class="header-text">{{ sectionFive?.description3 }}</p>
          </div> -->
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    sectionFive: {
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
.bg-main {
  background-image: url(../../assets/images/bg-sus.png);
  background-size: cover;
  /* background-color: black; */
}
.header {
  font-family: "Poppins";
  font-size: 30px;
  font-weight: 700;
  letter-spacing: -0.03em;
  text-align: center;
}
.header-text {
  font-family: Poppins;
  font-size: 13px;
  font-weight: 400;
  text-align: center;
}
</style>
