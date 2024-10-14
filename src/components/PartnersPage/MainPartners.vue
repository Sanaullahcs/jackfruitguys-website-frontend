<template>
  <div class="text-black px-16 pink-bg">
    <div>
      <v-img
        :src="sectionOne.image"
        class="text-center mx-auto"
        max-width="300px"
      ></v-img>
      <h1 class="jackfruitsHeading">{{ sectionOne.title }}</h1>
      <p class="jackfruitsText max-700 mx-auto text-center pb-10">
        {{ sectionOne.subtitle }}
      </p>
    </div>
    <div>
      <!-- <v-img src="../../assets/images/par2.png"></v-img> -->
      <v-responsive aspect-ratio="16/9">
        <video
          v-if="sectionOne.video"
          class="d-flex justify-center mx-auto"
          style="max-height: 80vh;width: 100%;"
          autoplay
          muted
          loop
        >
          <source :src="sectionOne.video" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </v-responsive>

      <div>
        <p class="jackfruitsText pb-10" v-html="sectionOne.description"></p>
      </div>
      <!-- <div>
        <p class="jackfruitsText my-10">
          Jackfruit Guys, representing over 2000 producer families in Mexico,
          has joined forces with IELSM, a company providing essential corporate
          strategies for the success of the Jackfruit Guys project. This
          collaboration aims to revolutionize the way we perceive healthy eating
          and sustainable living.
        </p>
        <p class="jackfruitsHeadingSmallGreen">
          Jackfruit Guys and IELSM Partnership
        </p>
        <p class="jackfruitsText pb-10">
          The partnership with ielsm.com has propelled Jackfruit Guys into a
          realm of innovation and growth. With technological tools,
          collaborative opportunities, and expert guidance, this collaboration
          is not just about business but about creating a positive impact on
          society through sustainable initiatives.
        </p>
        <p class="jackfruitsHeadingSmallGreen">Sustainable Agriculture</p>
        <p class="jackfruitsText pb-10">
          Sustainable agriculture is not merely a buzzword but a crucial concept
          that addresses environmental challenges while ensuring the well-being
          of future generations. Jackfruit farms exemplify sustainability
          through their eco-friendly practices and commitment to preserving the
          environment.
        </p>
        <p class="jackfruitsHeadingSmallGreen">Sustainable Practices</p>
        <p class="jackfruitsText pb-10">
          Jackfruit Guys goes beyond farming by actively engaging in community
          support programs, promoting organic farming methods, and conserving
          water resources. Their efforts extend to providing educational
          opportunities, empowering local communities, and safeguarding
          biodiversity.
        </p>
        <p class="jackfruitsHeadingSmallGreen">Impact on the Planet</p>
        <p class="jackfruitsText pb-10">
          The sustainable practices of Jackfruit Guys have a profound impact on
          the planet. From reducing carbon footprint to promoting biodiversity,
          their initiatives play a vital role in combating climate change and
          fostering a harmonious relationship with nature.
        </p>
        <p class="jackfruitsText pb-10">
          Supporting sustainable agriculture, embracing healthy eating habits,
          and practicing social responsibility are not just choices but
          responsibilities we owe to ourselves and the planet. The collaboration
          between Jackfruit Guys and ielsm.com sets a remarkable example of how
          partnerships can drive positive change.
        </p>
      </div> -->
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
    // this.getAboutData();
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
        const response = await HTTP.post("partner", payload);
        console.log(
          "response of the about",
          response.data.data.PartnerSection1
        );
        this.sectionOne = response.data.data.PartnerSection1;
        // this.sectionTwo = response.data.data.AboutSection2;
        // this.sectionThree = response.data.data.AboutSection3;
        // this.sectionFour = response.data.data.AboutSection4;
        // Updating the Image with the base url
        this.sectionOne.image = `${APP_URL}${this.sectionOne.image}`;
        this.sectionOne.video = `${APP_URL}${this.sectionOne.video}`;
        console.log("this.sectionOne.video", this.sectionOne.video);
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
