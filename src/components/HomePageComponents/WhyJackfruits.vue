<template>
  <div class="text-black" style="background-color: #fef9eb">
    <v-row class="py-8" align="center">
      <!-- Text Section -->
      <v-col cols="12" md="6" class="d-flex flex-column justify-center">
        <div class="ms-md-16 px-4">
          <MotionGroup preset="slideVisibleLeft" :duration="1200">
            <h2 class="jackfruitsHeading text-left my-5 fontSize50">
              {{ sectionFour?.section_4_title }}
            </h2>
          </MotionGroup>
          <MotionGroup preset="slideVisibleLeft" :duration="1600">
            <p class="about-txt" v-html="sectionFour?.text"></p>
          </MotionGroup>
          <MotionGroup preset="fadeVisible" :duration="1200">
            <router-link class="text-decoration-none" to="/about"
              ><v-btn elevation="0" class="readmorebtn my-5">{{
                translations.readMore
              }}</v-btn></router-link
            >
          </MotionGroup>
        </div>
      </v-col>

      <!-- Image Section -->
      <v-col cols="12" md="6" class="d-flex justify-center">
        <!-- <MotionGroup preset="slideVisibleBottom" :duration="1200"> -->
        <v-img
          :src="sectionFour?.image"
          class="img-responsive ml-auto mb-n8"
          max-width="70%"
        ></v-img>
        <!-- </MotionGroup> -->
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  props: {
    sectionFour: {
      type: Object,
      required: true, // Set to true if the prop is required
    },
  },
  data() {
    return {
      languageId: 1, // Default language
      translations: {
        readMore: "",
      },
      translationData: {
        1: {
          // English
          readMore: "Read More",
        },
        2: {
          // French
          readMore: "Lire la suite",
        },
        3: {
          // German
          readMore: "Weiterlesen",
        },
        4: {
          // Spanish
          readMore: "Leer más",
        },
      },
    };
  },
  mounted() {
    this.updateLanguageIdFromURL();
  },
  watch: {
    $route: "updateLanguageIdFromURL",
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
  },
};
</script>
<style scoped>
.fontSize50 {
  font-size: 50px !important;
  font-weight: 700;
}
.about {
  font-family: "Poppins";
  font-size: 34px;
  font-weight: 800;
  color: #865b20;
  line-height: 1.2; /* Adjusted for better responsiveness */
  letter-spacing: -0.03em;
  text-align: left;
}

.about-txt {
  font-family: "Poppins";
  font-size: 18px;
  font-weight: 400;
  text-align: left;
}

.readmorebtn {
  background-color: #9ec43b;
  text-transform: capitalize;
  min-width: 180px;
  min-height: 40px;
  border-radius: 8;
  font-size: 18px;
}

/* Responsive Styling */
@media (max-width: 600px) {
  .about {
    font-size: 28px;
    line-height: 1.2;
  }

  .about-txt {
    font-size: 16px;
  }

  .ms-md-16 {
    margin-left: 0 !important;
  }

  .readmorebtn {
    width: 100%;
    text-align: center;
  }
}
</style>
