<template>
  <div class="text-black px-8">
    <div>
      <MotionGroup preset="slideVisibleBottom" :duration="1000">
        <h1 class="jackfruitsHeading mx-auto mt-8 max-700">
          {{ sectionOne.title }}
        </h1>
      </MotionGroup>
      <MotionGroup preset="slideVisibleBottom" :duration="1000">
        <p class="jackfruitsText mx-auto text-center mb-6 max-700">
          {{ sectionOne.subtitle }}
        </p>
      </MotionGroup>
    </div>
    <div>
      <v-row>
        <v-col cols="12" lg="6" xl="6">
          <div>
            <MotionGroup preset="slideVisibleLeft" :duration="1500">
              <ul class="jackfruitsText" v-html="sectionOne.description_1"></ul>
            </MotionGroup>
          </div>
        </v-col>
        <v-col cols="12" lg="6" xl="6">
          <div>
            <MotionGroup preset="slideVisibleRight" :duration="1500">
              <v-img
                class="joinusimgCss"
                max-height="80vh"
                :src="sectionOne.image_1"
              ></v-img>
            </MotionGroup>
            <p
              class="jackfruitsTextGreen my-3"
              v-html="sectionOne.description_2"
            ></p>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="mt-16 mb-8">
      <MotionGroup preset="slideVisibleBottom" :duration="1000">
        <h1 class="jackfruitsHeading mx-auto max-700 text-center">
          {{ sectionTwo.title }}
        </h1>
      </MotionGroup>
      <MotionGroup preset="slideVisibleBottom" :duration="1200">
        <p class="jackfruitsText mx-auto max-700 text-center">
          {{ sectionTwo.subtitle }}
        </p>
      </MotionGroup>
    </div>
    <div>
      <v-row>
        <v-col cols="12" lg="6" xl="6">
          <div class="mb-8">
            <MotionGroup preset="slideVisibleLeft" :duration="1000">
              <v-img
                class="joinusimgCss"
                max-height="80vh"
                :src="sectionTwo.image_1"
              ></v-img>
            </MotionGroup>
            <MotionGroup preset="slideVisibleLeft" :duration="1300">
              <p class="jackfruitsText mt-5" v-html="sectionTwo.description_2"></p>
            </MotionGroup>
            <!-- <p class="jackfruitsTextGreen">
              By opting for jackfruit, you're contributing to a more sustainable
              food system with a lower environmental impact.
            </p> -->
          </div>
        </v-col>
        <v-col cols="12" lg="6" xl="6">
          <div>
            <MotionGroup preset="slideVisibleRight" :duration="1000">
              <ul class="jackfruitsText" v-html="sectionTwo.description_1"></ul>
            </MotionGroup>
          </div>
        </v-col>
      </v-row>
    </div>
    <div>
      <div>
        <v-row
          v-if="isLargeScreen"
          v-for="(item, index) in sectionThree"
          :key="item.id"
        >
          <!-- If the index is even, show text first then image -->
          <template v-if="index % 2 === 0">
            <v-col cols="12" lg="6" xl="6">
              <div class="d-flex flex-column justify-center h-100 pl-3">
                <MotionGroup preset="slideVisibleRight" :duration="1000">
                  <h1 class="jackfruitsHeading text-left">
                    {{ item.title }}
                  </h1>
                </MotionGroup>
                <MotionGroup preset="slideVisibleRight" :duration="1000">
                  <p class="jackfruitsText">
                    {{ item.subtitle }}
                  </p>
                </MotionGroup>
              </div>
            </v-col>
            <v-col cols="12" lg="6" xl="6">
              <div>
                <MotionGroup preset="fadeVisible" :duration="1200">
                  <v-img
                    class="joinusimgCss"
                    max-height="70vh"
                    :src="item.media"
                  ></v-img>
                </MotionGroup>
              </div>
            </v-col>
          </template>

          <!-- If the index is odd, show image first then text -->
          <template v-else>
            <v-col cols="12" lg="6" xl="6">
              <div>
                <MotionGroup preset="fadeVisible" :duration="1200">
                  <v-img
                    class="joinusimgCss"
                    max-height="70vh"
                    :src="item.media"
                  ></v-img>
                </MotionGroup>
              </div>
            </v-col>
            <v-col cols="12" lg="6" xl="6">
              <div class="d-flex flex-column justify-center h-100 pl-3">
                <MotionGroup preset="slideVisibleLeft" :duration="1000">
                  <h1 class="jackfruitsHeading text-left">
                    {{ item.title }}
                  </h1>
                </MotionGroup>
                <MotionGroup preset="slideVisibleLeft" :duration="1200">
                  <p class="jackfruitsText">
                    {{ item.subtitle }}
                  </p>
                </MotionGroup>
              </div>
            </v-col>
          </template>
        </v-row>
        <div v-else>
          <v-row v-for="(item, index) in sectionThree" :key="item.id">
            <v-col cols="12" lg="6" xl="6">
              <div class="d-flex flex-column justify-center h-100 pl-3">
                <MotionGroup preset="slideVisibleRight" :duration="1000">
                  <h1 class="jackfruitsHeading text-left">
                    {{ item.title }}
                  </h1>
                </MotionGroup>
                <MotionGroup preset="slideVisibleRight" :duration="1000">
                  <p class="jackfruitsText">
                    {{ item.subtitle }}
                  </p>
                </MotionGroup>
              </div>
            </v-col>
            <v-col cols="12" lg="6" xl="6">
              <div>
                <MotionGroup preset="fadeVisible" :duration="1200">
                  <v-img
                    class="joinusimgCss"
                    max-height="70vh"
                    :src="item.media"
                  ></v-img>
                </MotionGroup>
              </div>
            </v-col>
          </v-row>
        </div>

        <!-- <v-row>
          <v-col cols="12" lg="6" xl="6">
            <div class="d-flex flex-column justify-center h-100 pl-3">
              <h1 class="jackfruitsHeading text-left">
                Eco-Friendly <br />
                Farming
              </h1>
              <p class="jackfruitsText">
                We believe in growing jackfruit the way nature intended—using
                organic methods that preserve soil health and biodiversity. By
                avoiding harmful pesticides and chemicals, we not only produce
                healthier fruits but also protect local ecosystems. Our water
                conservation techniques and renewable energy use on the farms
                further reduce our environmental footprint.
              </p>
            </div></v-col
          >
          <v-col cols="12" lg="6" xl="6">
            <div>
              <v-img
                class="joinusimgCss"
                max-height="80vh"
                src="../../assets/images/sus3.png"
              ></v-img></div
          ></v-col>
        </v-row>
        <v-row>
          <v-col cols="12" lg="6" xl="6">
            <div>
              <v-img
                class="joinusimgCss"
                max-height="80vh"
                src="../../assets/images/sus4.png"
              ></v-img></div
          ></v-col>
          <v-col cols="12" lg="6" xl="6">
            <div class="d-flex flex-column justify-center h-100 pl-3">
              <h1 class="jackfruitsHeading text-left">
                Sustainable <br />
                Packaging
              </h1>
              <p class="jackfruitsText">
                Our commitment to sustainability extends beyond the farm. We use
                eco-friendly packaging made from recyclable and biodegradable
                materials, minimizing waste and reducing our impact on
                landfills. Our packaging solutions are designed to keep our
                jackfruit fresh while protecting the planet.
              </p>
            </div></v-col
          >
        </v-row>
        <v-row>
          <v-col cols="12" lg="6" xl="6">
            <div class="d-flex flex-column justify-center h-100 pl-3">
              <h1 class="jackfruitsHeading text-left">
                Reducing <br />
                Food Waste
              </h1>
              <p class="jackfruitsText">
                Jackfruit is a versatile superfood, and at Jact Fruit Guys, we
                ensure that no part of the fruit goes to waste. We create
                delicious products from every part of the jackfruit, turning
                potential waste into value-added goods. Our efforts to reduce
                food waste are part of our larger mission to promote a more
                sustainable food system.
              </p>
            </div></v-col
          >
          <v-col cols="12" lg="6" xl="6">
            <div>
              <v-img
                class="joinusimgCss"
                max-height="80vh"
                src="../../assets/images/sus5.png"
              ></v-img></div
          ></v-col>
        </v-row>
        <v-row>
          <v-col cols="12" lg="6" xl="6">
            <div>
              <v-img
                class="joinusimgCss"
                max-height="80vh"
                src="../../assets/images/sus6.png"
              ></v-img></div
          ></v-col>
          <v-col cols="12" lg="6" xl="6">
            <div class="d-flex flex-column justify-center h-100 pl-3">
              <h1 class="jackfruitsHeading text-left">Our Goals</h1>
              <p class="jackfruitsText">
                We are always striving to do better. Our sustainability goals
                include reducing our carbon footprint by 50% by 2030, achieving
                zero waste in our production processes, and continuing to
                innovate in sustainable farming and packaging. We are committed
                to transparency and will regularly update our progress on these
                goals.
              </p>
            </div></v-col
          >
        </v-row> -->
      </div>
    </div>
  </div>
  <div class="background-green py-16 mt-6 text-center">
    <MotionGroup preset="slideVisibleBotttom" :duration="1000">
      <h3 class="lastHeading">{{ sectionFour.title }}</h3>
    </MotionGroup>
    <MotionGroup preset="slideVisibleBottom" :duration="1200">
      <p class="jackfruitsText max-700 px-5 mx-auto">
        {{ sectionFour.subtitle }}
      </p>
    </MotionGroup>
    <v-btn class="contactbtn my-5" elevation="0">
      <router-link class="text-decoration-none" to="/contact"
        ><p class="text-white">{{ translations.contactUs }}</p></router-link
      ></v-btn
    >
  </div>
</template>
<script>
import { HTTP } from "../../common/commom-http";
import { APP_URL } from "../../common/commom-http";

export default {
  data() {
    return {
      sectionOne: {},
      isLargeScreen: window.innerWidth >= 1280, // Initial check
      sectionTwo: {},
      sectionThree: [],
      sectionFour: {},
      languageId: 1, // Default language set to English
      translations: {
        contactUs: "",
      },
      translationData: {
        1: {
          // English
          contactUs: "Contact Us",
        },
        2: {
          // French
          contactUs: "Nous contacter",
        },
        3: {
          // German
          contactUs: "Kontaktieren Sie uns",
        },
        4: {
          // Spanish
          contactUs: "Contáctenos",
        },
      },
    };
  },
  mounted() {
    // Add event listener to watch for window resize
    window.addEventListener("resize", this.checkScreenSize);
    this.updateLanguageIdFromURL(); // Set the language ID from URL when the component is mounted
    this.getAboutData(); // Fetch the data for sections
  },
  beforeDestroy() {
    // Remove event listener when component is destroyed
    window.removeEventListener("resize", this.checkScreenSize);
  },
  watch: {
    // Watch for changes in the route's query parameter (language_id)
    "$route.query.language_id": {
      handler(newValue) {
        this.updateLanguageIdFromURL(); // Update language ID and translations when language_id changes
        this.getAboutData(); // Optionally, refetch data if it changes based on language
      },
      immediate: true, // Execute immediately when the component is loaded
    },
  },
  methods: {
    checkScreenSize() {
      this.isLargeScreen = window.innerWidth >= 1280;
    },
    updateLanguageIdFromURL() {
      const params = new URLSearchParams(window.location.search);
      const langId = parseInt(params.get("language_id")) || 1;
      this.languageId = langId; // Update languageId based on URL parameter
      this.updateTranslations(); // Update the translations according to languageId
    },
    updateTranslations() {
      this.translations = this.translationData[this.languageId]; // Apply the correct translations based on the languageId
    },
    async getAboutData() {
      const payload = {
        language_id: this.languageId, // Pass the correct languageId when fetching the data
      };
      try {
        const response = await HTTP.post("sustainability", payload);
        this.sectionOne = response.data.data.sustainabilitySection1;
        this.sectionTwo = response.data.data.SustainabilitySection2;
        this.sectionThree = response.data.data.SustainabilitySection3;
        this.sectionFour = response.data.data.SustainabilitySection4;

        // Update image URLs with base path
        this.sectionOne.image_1 = `${APP_URL}${this.sectionOne.image_1}`;
        this.sectionTwo.image_1 = `${APP_URL}${this.sectionTwo.image_1}`;
        this.sectionThree.forEach((section) => {
          section.media = `${APP_URL}${section.media}`;
        });
      } catch (error) {
        console.log("Error fetching about data", error);
      }
    },
  },
};
</script>

<style>
@import "../../assets/css/style.css";
</style>
<style>
.background-green {
  background-color: #9fc43d;
  background-image: url(../../assets/images/minFooter.png);
  background-position: top right;
  background-size: 12%;
}
.lastHeading {
  font-family: Poppins;
  font-size: 25px;
  font-weight: 700;
  /* line-height: 50px; */
  text-align: center;
}
.contactbtn {
  background-color: #13a34c;
  color: white;
  font-family: Poppins;
  font-size: 16px;
  border-radius: 0;
  font-weight: 600;
  /* line-height: 50px; */
  text-align: center;
}
</style>
