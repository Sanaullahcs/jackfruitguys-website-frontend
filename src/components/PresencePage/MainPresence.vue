<template>
  <div class="text-black py-10">
    <div class="maxFooter">
      <h1 class="jackfruitsHeading max-700 mx-auto">{{ sectionOne.title }}</h1>
      <p class="jackfruitsText max-700 mx-auto text-center pb-10">
        {{ sectionOne.subtitle }}
      </p>
    </div>
    <div class="pink-bg pa-16">
      <div>
        <v-row v-for="(section, index) in sectionTwo" :key="index">
          <!-- For even indices (0, 2, 4...), show text first, then image -->
          <template v-if="index % 2 === 0">
            <v-col cols="12" lg="6" xl="6">
              <div class="d-flex flex-column justify-center h-100 pl-3">
                <h1 class="jackfruitsHeading text-left">{{ section.title }}</h1>
                <p class="jackfruitsText">
                  {{ section.subtitle }}
                </p>
              </div>
            </v-col>
            <v-col cols="12" lg="6" xl="6">
              <div>
                <v-img
                  class="joinusimgCss"
                  max-height="70vh"
                  :src="section.media"
                ></v-img>
              </div>
            </v-col>
          </template>

          <!-- For odd indices (1, 3, 5...), show image first, then text -->
          <template v-else>
            <v-col cols="12" lg="6" xl="6">
              <div>
                <v-img
                  class="joinusimgCss"
                  max-height="70vh"
                  :src="section.media"
                ></v-img>
              </div>
            </v-col>
            <v-col cols="12" lg="6" xl="6">
              <div class="d-flex flex-column justify-center h-100 pl-3">
                <h1 class="jackfruitsHeading text-left">{{ section.title }}</h1>
                <p class="jackfruitsText">
                  {{ section.subtitle }}
                </p>
              </div>
            </v-col>
          </template>
        </v-row>

        <!-- <v-row>
          <v-col cols="12" lg="6" xl="6"
            ><div class="d-flex flex-column justify-center h-100 pl-3">
              <h1 class="jackfruitsHeading text-left">Our Roots in Mexico</h1>
              <p class="jackfruitsText">
                Mexico is where our journey began. The fertile lands here
                produce the highest quality jackfruit, harvested at peak
                ripeness by local farmers. Our deep connection to Mexico allows
                us to deliver fresh, authentic jackfruit products that reflect
                the richness of this beautiful country.
              </p>
            </div></v-col
          >
          <v-col cols="12" lg="6" xl="6"
            ><div>
              <v-img
                class="joinusimgCss"
                max-height="70vh"
                src="../../assets/images/pre1.png"
              ></v-img></div
          ></v-col>
        </v-row> -->
      </div>
      <!-- === -->
      <!-- <div>
        <v-row>
          <v-col cols="12" lg="6" xl="6"
            ><div>
              <v-img
                class="joinusimgCss"
                max-height="70vh"
                src="../../assets/images/pre2.png"
              ></v-img></div
          ></v-col>
          <v-col cols="12" lg="6" xl="6"
            ><div class="d-flex flex-column justify-center h-100 pl-3">
              <h1 class="jackfruitsHeading text-left">Growing in the USA</h1>
              <p class="jackfruitsText">
                Jackfruit Guys bring the tropical taste of jackfruit to the USA,
                offering fresh, high-quality products that meet American
                standards. We provide a delicious, nutritious option that's easy
                to enjoy, resonating with health-conscious consumers nationwide.
              </p>
            </div></v-col
          >
        </v-row>
      </div> -->
      <!-- === -->
      <!-- <div>
        <v-row>
          <v-col cols="12" lg="6" xl="6"
            ><div class="d-flex flex-column justify-center h-100 pl-3">
              <h1 class="jackfruitsHeading text-left">Expanding in Germany</h1>
              <p class="jackfruitsText">
                Jackfruit Guys bring the versatility of jackfruit to Germany,
                meeting the demand for plant-based, sustainable options. Our
                high-quality products offer a tropical taste that aligns with
                Germany’s focus on health and environmental responsibility.
              </p>
            </div></v-col
          >
          <v-col cols="12" lg="6" xl="6"
            ><div>
              <v-img
                class="joinusimgCss"
                max-height="70vh"
                src="../../assets/images/pre3.png"
              ></v-img></div
          ></v-col>
        </v-row>
      </div> -->
      <!-- == -->
      <!-- <div>
        <v-row>
          <v-col cols="12" lg="6" xl="6"
            ><div>
              <v-img
                class="joinusimgCss"
                max-height="70vh"
                src="../../assets/images/pre4.png"
              ></v-img></div
          ></v-col>
          <v-col cols="12" lg="6" xl="6"
            ><div class="d-flex flex-column justify-center h-100 pl-3">
              <h1 class="jackfruitsHeading text-left">Our Presence in Spain</h1>
              <p class="jackfruitsText">
                Jackfruit Guys bring the vibrant flavors of jackfruit to Spain,
                where our products are embraced for their quality and taste. We
                offer a healthy, plant-based option that complements Spain’s
                rich culinary traditions, making jackfruit a delicious and
                versatile addition to Spanish kitchens.
              </p>
            </div></v-col
          >
        </v-row>
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
        const response = await HTTP.post("persence", payload);
        console.log("response of the about", response.data.data.AboutSection1);
        this.sectionOne = response.data.data.presenceSection1;
        this.sectionTwo = response.data.data.presenceSection2;
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
