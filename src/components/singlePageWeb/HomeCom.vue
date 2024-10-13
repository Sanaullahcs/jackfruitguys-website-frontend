<template>
  <div class="mt-75" style="background-color: white">
    <!-- <NavbarCom /> -->
    <MainComponent :section-one="sectionOne" :section-two="sectionTwo" />
    <!-- <GalleryCom/> -->
    <SliderCom />
    <AboutCom :sectionThree="sectionThree" />
    <WhyJackfruits :sectionFour="sectionFour" />
    <HealthOptions :sectionFive="sectionFive" />
    <Contact />
    <ChatBot />
    <FooterCom />
  </div>
</template>
<script>
import { HTTP } from "../../common/commom-http";
import { APP_URL } from "../../common/commom-http";
// import NavbarCom from "../NavbarCom.vue";
import FooterCom from "../AppFooter.vue";
import MainComponent from "../HomePageComponents/MainHomePage.vue";
import AboutCom from "../AboutCom.vue";
import HealthOptions from "../HomePageComponents/HealthOptions.vue";
import ChatBot from "../ChatBot/ChatBot.vue";
import WhyJackfruits from "../HomePageComponents/WhyJackfruits.vue";
import Contact from "../HomePageComponents/Contact.vue";
// import GalleryCom from "./HomePageComponents/Gallery.vue"
import SliderCom from "../HomePageComponents/SliderCom.vue";
export default {
  components: {
    // NavbarCom,
    Contact,
    MainComponent,
    FooterCom,
    AboutCom,
    HealthOptions,
    WhyJackfruits,
    ChatBot,
    // GalleryCom,
    SliderCom,
  },
  data() {
    return {
      sectionOne: {},
      sectionTwo: [],
      sectionThree: {},
      sectionFour: {},
      sectionFive: {},
    };
  },
  mounted() {
    console.log("this is the http code ", HTTP);
    console.log("this is the http code ", APP_URL);
    this.getAboutData();
  },
  watch: {
    // Watch for changes in the route (URL)
    "$route.query.language_id": {
      handler(newValue) {
        this.getAboutData(newValue);
      },
      immediate: true, // Call the handler right away
    },
  },
  methods: {
    async getAboutData(language_id = 1) {
      const payload = {
        language_id: language_id || this.$route.query.language_id || 1, // Default to 1 if no language_id in URL
      };
      try {
        const response = await HTTP.post("homes", payload);
        console.log("response of the about", response.data.data.homeSection1);
        this.sectionOne = response.data.data.homeSection1;
        this.sectionTwo = response.data.data.homeSectionArray1;
        this.sectionThree = response.data.data.homeSection3;
        this.sectionFour = response.data.data.homeSections4;
        this.sectionFive = response.data.data.homeSections5;
        // Updating the Image with the base url
        this.sectionOne.image = `${APP_URL}${this.sectionOne.image}`;
        // this.sectionTwo.image = `${APP_URL}${this.sectionTwo.image}`;
        this.sectionThree.image = `${APP_URL}${this.sectionThree.image}`;
        this.sectionFour.image = `${APP_URL}${this.sectionFour.image}`;
        this.sectionFive.image1 = `${APP_URL}${this.sectionFive.image1}`;
        this.sectionFive.image2 = `${APP_URL}${this.sectionFive.image2}`;
        this.sectionFive.image3 = `${APP_URL}${this.sectionFive.image3}`;
      } catch (error) {
        console.log("error", error);
      }
    },
  },
};
</script>
<style>
@import "@/assets/css/style.css";
</style>
