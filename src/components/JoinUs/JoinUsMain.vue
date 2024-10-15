<template>
  <div class="text-black px-16">
    <div>
      <MotionGroup preset="slideVisibleBottom" :duration="1000">
        <h2 class="jackfruitsHeading mx-auto max-700 mt-8">
          {{ sectionOne?.title }}
        </h2>
      </MotionGroup>
      <!-- <p class="jackfruitsText mx-auto text-center mb-6 max-900">
        At Jackfruit Guys, we’re not just building a brand; we’re cultivating a
        movement centered around innovation, sustainability, and growth. Our
        vision is to bring the incredible potential of jackfruit to the
        forefront of the food industry, tapping into its versatility and health
        benefits to create products that are good for people and the planet.
      </p>
      <p class="jackfruitsText mx-auto text-center mb-6 max-900">
        As we expand our offerings and reach new markets, we recognize the power
        of collaboration. This is why we’re extending a unique opportunity for
        investors who share our passion and commitment to sustainable business
        practices. By joining us, you’ll be part of a fast-growing brand that’s
        disrupting the plant-based food industry and driving positive change.
      </p>
      <p class="jackfruitsText mx-auto text-center mb-6 max-900">
        We are seeking investors who believe in the potential of our products
        and want to be part of our journey towards becoming a household name.
        Your investment will help us scale operations, enhance our product line,
        and broaden our distribution, enabling us to reach more customers and
        make a larger impact.
      </p>
      <p class="jackfruitsText mx-auto text-center mb-6 max-900">
        Together, we can elevate Jackfruit Guys to new heights—creating a
        lasting legacy in the plant-based food sector. Let’s grow this exciting
        future, one opportunity at a time!
      </p> -->
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
          max-height="80vh"
          class="joinusimgCss"
          style="object-fit: cover"
          :src="sectionOne?.image"
        ></v-img>
      </MotionGroup>
    </div>
    <div class="mt-10">
      <v-row>
        <v-col cols="12" lg="6" xl="6"
          ><div>
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
            <!-- <p class="jackfruitsText text-left ml-5 max-900">
              Partnering with Jackfruit Guys means joining a unique bridge
              between farmers and consumers. We’re dedicated to transforming
              jackfruit into healthy, delicious products while ensuring that
              farmers receive fair support and recognition. By investing with
              us, you’ll help us connect high-quality, sustainable produce
              directly to people who care about their health and the
              environment. Your support will empower us to expand our reach,
              enhance our offerings, and make a meaningful difference in the
              food industry. Join us and be part of a team that’s making a real
              impact from farm to table.
            </p>
            <p class="jackfruitsText text-left max-900 mt-5 mb-5">
              If you’re interested in learning more about how you can partner
              with us, please don’t hesitate to reach out. We’d love to discuss
              potential opportunities.
            </p> -->

            <p
              class="jackfruitsText text-left max-900 mb-5"
              v-html="sectionTwo?.subtitle"
            ></p></div
        ></v-col>
        <v-col cols="12" lg="6" xl="6"
          ><div>
            <v-img :src="sectionTwo?.image"></v-img>
          </div>
          <!-- <div>
            <p class="jackfruitsText text-left max-900">
              <b>Contact us at: </b>
            </p>
            <p class="jackfruitsText text-left max-900">
              sales@jackfruitguys.com
            </p>
            <p class="jackfruitsText text-left max-900 mb-5">
              +52 644 246 6071
            </p>
            <p class="jackfruitsText text-left max-900">
              info@jackfruitguys.com
            </p>
            <p class="jackfruitsText text-left max-900 mb-5">+1 818 423 3779</p>
          </div> -->
        </v-col>
      </v-row>
    </div>
  </div>
  <div>
    <div
      class="background-green py-16 text-center d-flex justify-space-between px-16"
    >
      <h3 class="lastHeading mt-4">
        {{ sectionThree.title }}
      </h3>
      <v-btn class="contactbtn my-5" elevation="0">Contact Us</v-btn>
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
  watch: {
    // Watch for changes in the route (URL)
    "$route.query.language_id": {
      handler(newValue) {
        this.getAboutData(newValue);
      },
      immediate: true, // Call the handler right away
    },
  },
  mounted() {
    console.log("this is the http code ", HTTP);
    console.log("this is the http code ", APP_URL);
    // this.getAboutData();
  },
  methods: {
    async getAboutData(language_id = 1) {
      const payload = {
        language_id: language_id || this.$route.query.language_id || 1, // Default to 1 if no language_id in URL
      };
      try {
        const response = await HTTP.post("join-us", payload);
        console.log("response of the about", response.data.data.JoinUsSection1);
        this.sectionOne = response.data.data.JoinUsSection1;
        this.sectionTwo = response.data.data.JoinUsSection2;
        this.sectionThree = response.data.data.JoinUsSection3;
        // this.sectionFour = response.data.data.AboutSection4;
        // Updating the Image with the base url
        this.sectionOne.image = `${APP_URL}${this.sectionOne.image}`;
        this.sectionTwo.image = `${APP_URL}${this.sectionTwo.image}`;
        // this.sectionThree.image = `${APP_URL}${this.sectionThree.image}`;
        // this.sectionFour.image = `${APP_URL}${this.sectionFour.image}`;
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
</style>
