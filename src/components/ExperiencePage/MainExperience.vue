<template>
  <div class="px-16">
    <div>
      <div class="py-5">
        <v-img
          :src="sectionOne?.footer_image"
          class="mx-auto"
          max-width="300px"
        ></v-img>
      </div>
    </div>
    <div>
      <div>
        <v-img :src="sectionOne?.banner_image"></v-img>
      </div>
    </div>
    <div>
      <Gallery />
    </div>
  </div>
</template>
<script>
import { HTTP } from "../../common/commom-http";
import { APP_URL } from "../../common/commom-http";
import Gallery from "../HomePageComponents/Gallery.vue";
export default {
  components: {
    Gallery,
  },
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
    this.getAboutData();
  },
  methods: {
    async getAboutData() {
      const payload = {
        language_id: 1,
      };
      try {
        const response = await HTTP.post("experience", payload);
        console.log("response of the about", response.data.data.AboutSection1);
        this.sectionOne = response.data.data.ExperienceSection1;
        // this.sectionTwo = response.data.data.AboutSection2;
        // this.sectionThree = response.data.data.AboutSection3;
        // this.sectionFour = response.data.data.AboutSection4;
        // Updating the Image with the base url
        this.sectionOne.banner_image = `${APP_URL}${this.sectionOne.banner_image}`;
        this.sectionOne.footer_image = `${APP_URL}${this.sectionOne.footer_image}`;
        // this.sectionTwo.image = `${APP_URL}${this.sectionTwo.image}`;
        // this.sectionThree.image = `${APP_URL}${this.sectionThree.image}`;
        // this.sectionFour.image = `${APP_URL}${this.sectionFour.image}`;
      } catch (error) {
        console.log("error", error);
      }
    },
  },
};
</script>
