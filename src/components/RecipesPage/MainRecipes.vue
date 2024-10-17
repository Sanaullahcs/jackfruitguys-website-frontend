<template>
  <div class="text-black pt-10">
    <div class="maxFooter">
      <MotionGroup preset="slideVisibleBottom" :duration="1000">
        <h1 class="jackfruitsHeading max-700 mx-auto">
          {{ sectionOne.title }}
        </h1>
      </MotionGroup>
      <MotionGroup preset="slideVisibleBottom" :duration="1200">
        <p class="jackfruitsText max-700 mx-auto text-center pb-10">
          {{ sectionOne.subtitle }}
        </p>
      </MotionGroup>
    </div>
    <div class="pink-bg pa-16">
      <div v-for="(section, index) in sectionTwo" :key="index">
        <div>
          <MotionGroup preset="slideVisibleBottom" :duration="1000">
            <h3 class="jackfruitsHeadingSmall">{{ section.title }}</h3>
          </MotionGroup>
          <MotionGroup preset="slideVisibleBottom" :duration="1200">
            <p class="jackfruitsText">Instructions:</p>
            <ol class="jackfruitsText px-4">
              <li v-html="section.subtitle"></li>
            </ol>
          </MotionGroup>
        </div>
        <div class="my-3">
          <v-img
            max-height="80vh"
            max-width="800px"
            class="joinusimgCss mx-auto"
            :src="section.media"
          ></v-img>
        </div>
      </div>
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
    // this.getResData();
  },
  watch: {
    // Watch for changes in the route (URL)
    "$route.query.language_id": {
      handler(newValue) {
        this.getResData(newValue);
      },
      immediate: true, // Call the handler right away
    },
  },
  methods: {
    async getResData(language_id = 1) {
      const payload = {
        language_id: language_id || this.$route.query.language_id || 1, // Default to 1 if no language_id in URL
      };
      try {
        const response = await HTTP.post("recipes", payload);
        // console.log("response of the about", response.data.data.AboutSection1);
        this.sectionOne = response.data.data.presenceSection1;
        this.sectionTwo = response.data.data.recipies;
        // this.sectionThree = response.data.data.AboutSection3;
        // this.sectionFour = response.data.data.AboutSection4;
        // Updating the Image with the base url
        // this.sectionOne.image = `${APP_URL}${this.sectionOne.image}`;
        this.sectionTwo.forEach((section) => {
          section.media = `${APP_URL}${section.media}`;
        });
        // this.sectionThree.image = `${APP_URL}${this.sectionThree.image}`;
        // this.sectionFour.image = `${APP_URL}${this.sectionFour.image}`;
      } catch (error) {
        console.log("error", error);
      }
    },
  },
};
</script>
