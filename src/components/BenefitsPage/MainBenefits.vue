<template>
  <div class="maxFooter py-10 text-black">
    <h1 class="jackfruitsHeading max-700 mx-auto">
      The Benefits of Jackfruit Guys!
    </h1>
    <p class="jackfruitsText max-700 mx-auto text-center">
      Jackfruit Guys offers delicious, nutrient-rich jackfruit products that
      boost health with essential vitamins, minerals, and fiber. Perfect for
      versatile cooking, our jackfruit serves as a tasty plant-based meat
      alternative. We prioritize sustainability and fair trade, supporting
      eco-friendly farming and local communities.
    </p>
  </div>
  <div class="text-black pink-bg px-16">
    <div class="py-10">
      <h1 class="jackfruitsHeading max-700 mx-auto">
        {{ sectionOne.title }}
      </h1>
      <p class="jackfruitsText max-700 mx-auto text-center">
        {{ sectionOne.subtitle }}
      </p>
    </div>
    <div>
      <v-row no-gutters>
        <v-col cols="12" lg="6" xl="6">
          <div class="pr-3">
            <ul class="jackfruitsText" v-html="sectionOne.description_1"></ul>
          </div>
        </v-col>
        <v-col cols="12" lg="6" xl="6">
          <div>
            <v-img
              class="joinusimgCss"
              max-height="70vh"
              :src="sectionOne.image_1"
            ></v-img>
          </div>
        </v-col>
      </v-row>
    </div>
    <div>
      <v-row>
        <v-col cols="12" lg="6" xl="6">
          <div>
            <v-img
              class="joinusimgCss"
              max-height="70vh"
              :src="sectionOne.image_2"
            ></v-img>
            <!-- <p class="jackfruitsText mt-5">
              Incorporating jackfruit into your diet is a delicious way to boost
              your fiber intake, support healthy digestion, and explore a world
              of culinary possibilities. While some health benefits show
              promise, further research is ongoing
            </p>
            <p class="jackfruitsTextGreen">
              Jackfruit is a fantastic addition to a balanced and wholesome
              diet.
            </p> -->
          </div>
        </v-col>
        <v-col cols="12" lg="6" xl="6">
          <div class="pr-3">
            <ul class="jackfruitsText" v-html="sectionOne.description_2"></ul>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
  <div class="bg-white px-16">
    <div class="py-10">
      <h1 class="jackfruitsHeading max-700 mx-auto">
        Social Benefits of our mexican Jackfruit.
      </h1>
      <p class="jackfruitsText max-700 mx-auto text-center">
        Jackfruit boasts a range of social benefits that make it a responsible
        and impactful food choice. Here's how including jackfruit in your diet
        contributes to a better world:
      </p>
    </div>
    <div>
      <v-row>
        <v-col cols="12" lg="6" xl="6">
          <div>
            <ul class="jackfruitsText">
              <li class="my-5">
                <b>Supports Sustainable Farming:</b> Jackfruit trees are
                incredibly productive, yielding high quantities of fruit with
                minimal land use compared to traditional meat production. This
                translates to less deforestation, soil erosion, and resource
                depletion.
              </li>
              <li class="my-5">
                <b>Empowers Local Communities:</b> Jackfruit cultivation is a
                significant source of income for local Mexican farmers. Choosing
                jackfruit supports these communities and encourages sustainable
                agricultural practices.
              </li>
              <li class="my-5">
                <b>Promotes Food Security:</b> Jackfruit's versatility and long
                shelf life make it a valuable food source in regions facing food
                insecurity. Its drought tolerance further strengthens its role
                in ensuring consistent food availability.
              </li>
              <li class="my-5">
                <b>Reduces Reliance on Factory Farming:</b> The rise of
                jackfruit consumption lessens the demand for factory-farmed
                meats, which are often associated with unethical animal
                treatment and environmental pollution.
              </li>
              <li class="my-5">
                <b>Creates Job Opportunities:</b> The growing popularity of
                jackfruit creates new job opportunities throughout the supply
                chain, from harvesting and processing to distribution and
                preparation. This fosters economic development in areas where
                jackfruit is cultivated.
              </li>
            </ul>
          </div>
        </v-col>
        <v-col cols="12" lg="6" xl="6">
          <div>
            <v-img
              class="joinusimgCss"
              max-height="80vh"
              src="../../assets/images/ben3.png"
            ></v-img>
            <p class="jackfruitsText mb-16 mt-16">
              By incorporating jackfruit into your diet, you're not just making
              a delicious choice, you're contributing to a more <span
                class="jackfruitsTextGreen"
                >sustainable, equitable, and food-secure future!</span
              >
            </p>
          </div>
        </v-col>
      </v-row>
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
    this.getBenefits();
  },
  methods: {
    async getBenefits() {
      const payload = {
        language_id: 1,
      };
      try {
        const response = await HTTP.post("benefits", payload);
        console.log("response of the about", response.data.data.AboutSection1);
        this.sectionOne = response.data.data.BenefitsSection1;
        // this.sectionTwo = response.data.data.AboutSection2;
        // this.sectionThree = response.data.data.AboutSection3;
        // this.sectionFour = response.data.data.AboutSection4;
        // Updating the Image with the base url
        this.sectionOne.image_1 = `${APP_URL}${this.sectionOne.image_1}`;
        this.sectionOne.image_2 = `${APP_URL}${this.sectionOne.image_2}`;
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
<style>
.maxFooter {
  background-image: url(../../assets/images/maxFooter.png);
  background-position: bottom left;
  background-size: 12%;
}
.pink-bg {
  background-color: #fef9eb;
}
</style>
