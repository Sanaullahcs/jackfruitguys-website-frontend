<template>
  <div class="maxFooter py-10 text-black">
    <MotionGroup preset="slideVisibleBottom" :duration="1000">
      <h1 class="jackfruitsHeading max-700 mx-auto">
        The Benefits of Jackfruit!
      </h1>
    </MotionGroup>
    <MotionGroup preset="slideVisibleBottom" :duration="1300">
      <p class="jackfruitsText max-700 mx-auto text-center">
        Jackfruit Guys offers delicious, nutrient-rich jackfruit products that
        boost health with essential vitamins, minerals, and fiber. Perfect for
        versatile cooking, our jackfruit serves as a tasty plant-based meat
        alternative. We prioritize sustainability and fair trade, supporting
        eco-friendly farming and local communities.
      </p>
    </MotionGroup>
  </div>
  <div class="text-black pink-bg px-16">
    <div class="py-10">
      <MotionGroup preset="slideVisibleBottom" :duration="1400">
        <h1 class="jackfruitsHeading max-700 mx-auto">
          {{ sectionOne?.title }}
        </h1>
      </MotionGroup>
      <MotionGroup preset="slideVisibleBottom" :duration="1200">
        <p class="jackfruitsText max-700 mx-auto text-center">
          {{ sectionOne?.subtitle }}
        </p>
      </MotionGroup>
    </div>
    <div>
      <v-row no-gutters>
        <v-col cols="12" lg="6" xl="6">
          <div class="pr-3">
            <MotionGroup preset="slideVisibleLeft" :duration="1000">
              <ul
                class="jackfruitsText"
                v-html="sectionOne?.description_1"
              ></ul>
            </MotionGroup>
          </div>
        </v-col>
        <v-col cols="12" lg="6" xl="6">
          <div>
            <MotionGroup preset="slideVisibleRight" :duration="1000">
              <v-img
                class="joinusimgCss"
                max-height="70vh"
                :src="sectionOne?.image_1"
              ></v-img>
            </MotionGroup>
          </div>
        </v-col>
      </v-row>
    </div>
    <div>
      <v-row>
        <v-col cols="12" lg="6" xl="6">
          <div>
            <MotionGroup preset="slideVisibleLeft" :duration="1000">
              <v-img
                class="joinusimgCss"
                max-height="70vh"
                :src="sectionOne?.image_2"
              ></v-img>
            </MotionGroup>
            <!-- <p class="jackfruitsText mt-5">
              Incorporating jackfruit into your diet is a delicious way to boost
              your fiber intake, support healthy digestion, and explore a world
              of culinary possibilities. While some health benefits show
              promise, further research is ongoing
            </p>
            <p class="jackfruitsTextGreen">
              Jackfruit is a fantastic addition to a balanced and wholesome
              diet.
            </p> -->
          </div>
        </v-col>
        <v-col cols="12" lg="6" xl="6">
          <div class="pr-3">
            <MotionGroup preset="slideVisibleRight" :duration="1000">
              <ul
                class="jackfruitsText"
                v-html="sectionOne?.description_2"
              ></ul>
            </MotionGroup>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
  <div class="bg-white px-16">
    <div class="py-10">
      <MotionGroup preset="slideVisibleBottom" :duration="1000">
        <h1 class="jackfruitsHeading max-700 mx-auto">
          {{ sectionTwo?.title }}
        </h1>
      </MotionGroup>
      <MotionGroup preset="slideVisibleBottom" :duration="1200">
        <p class="jackfruitsText max-700 mx-auto text-center">
          {{ sectionTwo?.subtitle }}
        </p>
      </MotionGroup>
    </div>
    <div>
      <v-row>
        <v-col cols="12" lg="6" xl="6">
          <div>
            <MotionGroup preset="slideVisibleLeft" :duration="1000">
              <ul
                class="jackfruitsText"
                v-html="sectionTwo?.description_1"
              ></ul>
            </MotionGroup>
          </div>
        </v-col>
        <v-col cols="12" lg="6" xl="6">
          <div>
            <MotionGroup preset="slideVisibleRight" :duration="1000">
              <v-img
                class="joinusimgCss"
                max-height="80vh"
                :src="sectionTwo?.image_1"
              ></v-img>
            </MotionGroup>
            <MotionGroup preset="slideVisibleRight" :duration="1300">
              <p
                class="jackfruitsText mb-16 mt-16"
                v-html="sectionTwo?.description_2"
              ></p>
            </MotionGroup>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
import { HTTP } from "../../common/commom-http";
import { APP_URL } from "../../common/commom-http";
export default {
  data() {
    return {
      sectionOne: {},
      sectionTwo: {},
      sectionThree: {},
      sectionFour: {},
    };
  },
  mounted() {
    console.log("this is the http code ", HTTP);
    console.log("this is the http code ", APP_URL);
    // this.getBenefits();
  },
  watch: {
    // Watch for changes in the route (URL)
    "$route.query.language_id": {
      handler(newValue) {
        this.getBenefits(newValue);
      },
      immediate: true, // Call the handler right away
    },
  },
  methods: {
    async getBenefits() {
      const payload = {
        language_id:  this.$route.query.language_id || 1, // Default to 1 if no language_id in URL
      };
      try {
        const response = await HTTP.post("benefits", payload);
        console.log(
          "response of the about",
          response.data.data.BenefitsSection1
        );
        this.sectionOne = response.data.data.BenefitsSection1;
        this.sectionTwo = response.data.data.BenefitsSection2;
        // this.sectionThree = response.data.data.AboutSection3;
        // this.sectionFour = response.data.data.AboutSection4;
        // Updating the Image with the base url
        this.sectionOne.image_1 = `${APP_URL}${this.sectionOne.image_1}`;
        this.sectionOne.image_2 = `${APP_URL}${this.sectionOne.image_2}`;
        this.sectionTwo.image_1 = `${APP_URL}${this.sectionTwo.image_1}`;
        // this.sectionThree.image = `${APP_URL}${this.sectionThree.image}`;
        // this.sectionFour.image = `${APP_URL}${this.sectionFour.image}`;
      } catch (error) {
        console.log("error", error);
      }
    },
  },
};
</script>
<style>
.maxFooter {
  background-image: url(../../assets/images/maxFooter.png);
  background-position: bottom left;
  background-size: 12%;
}
.pink-bg {
  background-color: #fef9eb;
}
</style>
