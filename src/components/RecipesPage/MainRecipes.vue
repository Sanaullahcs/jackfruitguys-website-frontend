<template>
  <div class="text-black pt-10">
    <div class="maxFooter">
      <h1 class="jackfruitsHeading max-700 mx-auto">{{ sectionOne.title }}</h1>
      <p class="jackfruitsText max-700 mx-auto text-center pb-10">
        {{ sectionOne.subtitle }}
      </p>
    </div>
    <div class="pink-bg pa-16">
      <div v-for="(section, index) in sectionTwo" :key="index">
        <div class="my-3">
          <v-img
            max-height="80vh"
            class="joinusimgCss"
            :src="section.media"
          ></v-img>
        </div>
        <div>
          <h3 class="jackfruitsHeadingSmall">{{ section.title }}</h3>
          <p class="jackfruitsText">Intructions:</p>
          <ol class="jackfruitsText px-4">
            <li v-html="section.subtitle"></li>
          </ol>
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
    this.getResData();
  },
  methods: {
    async getResData() {
      const payload = {
        language_id: 1,
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
