<template>
  <div class="text-black px-16">
    <div>
      <MotionGroup preset="slideVisibleBottom" :duration="1000">
        <h2 class="jackfruitsHeading mx-auto max-700 mt-8">
          {{ sectionOne?.title }}
        </h2>
      </MotionGroup>

      <MotionGroup preset="slideVisibleBottom" :duration="1200">
        <p
          class="jackfruitsText mx-auto text-center mb-6 max-900"
          v-html="sectionOne?.description"
        ></p>
      </MotionGroup>
    </div>

    <div>
      <MotionGroup preset="slideVisibleBottom" :duration="1000">
        <v-img
          :src="sectionOne?.image"
          class="joinusimgCss max-height-image"
          style="max-height: 80vh; height: auto; object-fit: contain"
        ></v-img>
      </MotionGroup>
    </div>

    <div class="mt-10">
      <v-row>
        <v-col cols="12" lg="6" xl="6">
          <div>
            <MotionGroup preset="slideVisibleLeft" :duration="1000">
              <h2 class="jackfruitsHeading text-left max-700">
                {{ sectionTwo?.title }}
              </h2>
            </MotionGroup>
            <MotionGroup preset="slideVisibleLeft" :duration="1300">
              <p
                class="jackfruitsText text-left max-900"
                v-html="sectionTwo?.description"
              ></p>
            </MotionGroup>
            <p
              class="jackfruitsText text-left max-900 mb-5"
              v-html="sectionTwo?.subtitle"
            ></p>
          </div>
        </v-col>

        <v-col cols="12" lg="6" xl="6">
          <div>
            <v-img
              :src="sectionTwo?.image"
              class="max-height-image mb-3"
              style="object-fit: cover"
            ></v-img>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>

  <div>
    <div
      class="background-green py-16 text-center d-flex justify-space-between px-16 makingFlexOnSmall"
    >
      <h3 class="lastHeading mt-4">
        {{ sectionThree.title }}
      </h3>
      <router-link class="text-decoration-none" to="/contact">
      <v-btn class="contactbtn my-5" elevation="0">
        {{ translations.contactUs }}
      </v-btn>
      </router-link>
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
      languageId: 1, // Default language ID
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
  watch: {
    "$route.query.language_id": {
      handler(newValue) {
        this.updateLanguageIdFromURL();
        this.getAboutData();
      },
      immediate: true,
    },
  },
  mounted() {
    this.updateLanguageIdFromURL();
    this.getAboutData();
  },
  methods: {
    updateLanguageIdFromURL() {
      const params = new URLSearchParams(window.location.search);
      const langId = parseInt(params.get("language_id")) || 1;
      this.languageId = langId;
      this.updateTranslations();
    },
    updateTranslations() {
      this.translations = this.translationData[this.languageId];
    },
    async getAboutData() {
      const payload = {
        language_id: this.languageId,
      };
      try {
        const response = await HTTP.post("join-us", payload);
        this.sectionOne = response.data.data.JoinUsSection1;
        this.sectionTwo = response.data.data.JoinUsSection2;
        this.sectionThree = response.data.data.JoinUsSection3;
        this.sectionOne.image = `${APP_URL}${this.sectionOne.image}`;
        this.sectionTwo.image = `${APP_URL}${this.sectionTwo.image}`;
      } catch (error) {
        console.log("error", error);
      }
    },
  },
};
</script>

<style>
.joinusimgCss img {
  object-fit: cover !important;
}
.max-height-image {
  max-height: 80vh; /* Set to desired max height */
  width: 100%; /* Ensure full width */
  object-fit: cover; /* Maintain aspect ratio */
}
.background-green {
  background-color: #9fc43d;
}
.contactbtn {
  background-color: #13a34c;
  color: white;
  font-family: Poppins;
  font-size: 16px;
  border-radius: 0;
  font-weight: 600;
  text-align: center;
}
@media screen and (max-width: 680px) {
  .makingFlexOnSmall {
    display: flex !important;
    flex-direction: column;
  }
}
</style>
