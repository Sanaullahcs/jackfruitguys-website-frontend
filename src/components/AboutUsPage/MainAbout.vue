<template>
  <div class="text-black px-16">
    <div class="py-5">
      <h1 class="jackfruitsHeading max-700 mx-auto">
        {{ sectionOne.title }}
      </h1>
      <p class="jackfruitsText max-700 mx-auto text-center">
        {{ sectionOne.description }}
      </p>
      <div class="my-6">
        <v-img
          class="joinusimgCss"
          alt="images about"
          max-height="80vh"
          :src="sectionOne.image"
        ></v-img>
      </div>
    </div>
    <div class="my-5">
      <h1 class="jackfruitsHeading max-700 mx-auto">{{ sectionTwo.title }}</h1>
      <p
        class="jackfruitsText max-700 mx-auto text-center"
        v-html="sectionTwo.description"
      ></p>
      <v-img
        class="joinusimgCss my-6"
        max-height="80vh"
        :src="sectionTwo.image"
      ></v-img>
    </div>
    <div>
      <h1 class="jackfruitsHeading max-700 mx-auto">
        {{ sectionThree.title }}
      </h1>
      <p class="jackfruitsText max-700 mx-auto text-center">
        {{ sectionThree.subtitle }}
      </p>
      <div class="mt-10">
        <v-row>
          <v-col cols="12" lg="6" xl="6"
            ><div>
              <!-- <p class="jackfruitsText">
                <b>Sustainability:</b> We believe in the power of plant-based
                foods to create a more sustainable world. By promoting
                jackfruit, we aim to reduce environmental impact and support
                eco-friendly practices.
              </p>

              <p class="jackfruitsText">
                <b>Health & Wellness:</b> We are passionate about providing
                nutritious, wholesome products that contribute to a balanced
                diet and a healthier lifestyle.
              </p>

              <p class="jackfruitsText">
                <b>Innovation:</b> We strive to bring creative and versatile
                jackfruit products to the market, inspiring new culinary
                possibilities.
              </p>

              <p class="jackfruitsText">
                <b>Community & Global Reach:</b> We are dedicated to expanding
                the reach of jackfruit across the globe, with a particular focus
                on markets in Germany and Mexico. Our mission is to build
                strong, lasting relationships with communities and consumers in
                these regions.
              </p>

              <p class="jackfruitsText">
                <b>Quality & Integrity:</b> We maintain the highest standards of
                quality in our products, ensuring that every item we offer is
                crafted with care and integrity. We believe in transparency and
                honesty in all our operations.
              </p> -->
              <p
                class="jackfruitsText"
                v-html="sectionThree.description"
              ></p></div
          ></v-col>
          <v-col cols="12" lg="6" xl="6"
            ><div>
              <v-img
                class="joinusimgCss"
                max-height="80vh"
                :src="sectionThree.image"
              ></v-img></div
          ></v-col>
        </v-row>
      </div>
    </div>
    <div class="my-6">
      <h1 class="jackfruitsHeading max-700 mx-auto">{{ sectionFour.title }}</h1>
      <p
        class="jackfruitsText max-700 mx-auto text-center"
        v-html="sectionFour.description"
      ></p>
      <div class="my-6">
        <v-img
          class="joinusimgCss"
          max-height="80vh"
          :src="sectionFour.image"
        ></v-img>
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
    this.getAboutData();
  },
  methods: {
    async getAboutData() {
      const payload = {
        language_id: 1,
      };
      try {
        const response = await HTTP.post("about-us", payload);
        console.log("response of the about", response.data.data.AboutSection1);
        this.sectionOne = response.data.data.AboutSection1;
        this.sectionTwo = response.data.data.AboutSection2;
        this.sectionThree = response.data.data.AboutSection3;
        this.sectionFour = response.data.data.AboutSection4;
        // Updating the Image with the base url
        this.sectionOne.image = `${APP_URL}${this.sectionOne.image}`;
        this.sectionTwo.image = `${APP_URL}${this.sectionTwo.image}`;
        this.sectionThree.image = `${APP_URL}${this.sectionThree.image}`;
        this.sectionFour.image = `${APP_URL}${this.sectionFour.image}`;
      } catch (error) {
        console.log("error", error);
      }
    },
  },
};
</script>
