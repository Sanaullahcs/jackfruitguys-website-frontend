<template>
  <div class="text-black py-10">
    <div class="maxFooter">
      <MotionGroup preset="slideVisibleBottom" :duration="1000">
        <h1 class="jackfruitsHeading max-700 mx-auto">
          {{ sectionOne?.title }}
        </h1>
      </MotionGroup>
      <MotionGroup preset="slideVisibleBottom" :duration="1200">
        <p class="jackfruitsText max-700 mx-auto text-center pb-10">
          {{ sectionOne?.subtitle }}
        </p>
      </MotionGroup>
    </div>
    <div class="pink-bg px-16">
      <MotionGroup preset="slideVisibleBottom" :duration="1000">
        <h1 class="jackfruitsHeading max-700 mx-auto">
          {{ sectionTwo?.title }}
        </h1>
      </MotionGroup>
      <MotionGroup preset="slideVisibleBottom" :duration="1200">
        <p class="jackfruitsTextGreen max-700 mx-auto text-center">
          {{ sectionTwo?.subtitle }}
        </p>
      </MotionGroup>
      <MotionGroup preset="slideVisibleBottom" :duration="1400">
        <p class="jackfruitsText max-700 mx-auto text-center">
          {{ sectionTwo?.subtitle_2 }}
        </p>
      </MotionGroup>
    </div>
    <div class="px-16 pink-bg py-10">
      <v-row>
        <v-col cols="12" lg="6" xl="6">
          <div>
            <!-- <p class="jackfruitsText">
              Jackfruit isn't just a trendy ingredient; it's a game-changer for
              anyone seeking a plant-based protein option packed with flavor and
              benefits. Here's why ours is the perfect choice for you:
            </p> -->
            <MotionGroup preset="slideVisibleLeft" :duration="1000">
              <ul
                class="jackfruitsText ps-10"
                v-html="sectionTwo?.description"
              ></ul>
            </MotionGroup>
          </div>
        </v-col>
        <v-col cols="12" lg="6" xl="6">
          <div>
            <MotionGroup preset="slideVisibleRight" :duration="1000">
              <v-img
                max-height="100vh"
                class="joinusimgCss"
                :src="sectionTwo?.image"
              ></v-img>
            </MotionGroup>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="pa-16">
      <div>
        <MotionGroup preset="slideVisibleBottom" :duration="1000">
          <h1 class="jackfruitsHeading max-700 mx-auto">
            {{ sectionThree?.title }}
          </h1>
        </MotionGroup>
        <MotionGroup preset="slideVisibleBottom" :duration="1300">
          <p class="jackfruitsTextGreen max-700 mx-auto text-center py-3">
            {{ sectionThree?.subtitle }}
          </p>
        </MotionGroup>
        <!-- <p class="jackfruitsText max-900 mx-auto text-center py-3">
          As sustainable and health-conscious food enthusiasts, we highly
          recommend incorporating dehydrated jackfruit pulp into your diet.
          Dehydrated jackfruit pulp is an excellent source of vitamins minerals
          fiber and antioxidants making it a perfect addition to any healthy
          diet.
        </p>
        <p class="jackfruitsText max-900 mx-auto text-center py-3">
          Additionally dehydrated jackfruit pulp is incredibly versatile and can
          be used in a variety of dishes including smoothies, curries, stir
          fries and even baked goods. Dehydrated jackfruit pulp is an
          exceptionally Eco-Friendly ingredient since it requires less water and
          land to cultivate it, making it an ideal ingredient for anyone seeking
          to adopt a more sustainable nutritious and flavorful diet
        </p>
        <p class="jackfruitsText max-900 mx-auto text-center py-3">
          ​ By incorporating Dehydrated Jackfruit Pulp into your meals, you can
          enjoy a delicious and guilt free experience while supporting a greener
          planet.
        </p>
        <p class="jackfruitsText max-900 mx-auto text-center py-3">
          ​ Overall dehydrated jackfruit pulp is an excellent addition to any
          healthy and conscious lifestyle, and we wholeheartedly recommend
          trying it out.
        </p> -->
        <MotionGroup preset="slideVisibleBottom" :duration="1500">
          <p
            class="jackfruitsText max-900 mx-auto text-center py-3"
            v-html="sectionThree?.description"
          ></p>
        </MotionGroup>
      </div>
      <div>
        <MotionGroup preset="slideVisibleLeft" :duration="1000">
          <v-img
            max-height="80vh"
            max-width="800px"
            class="joinusimgCss mx-auto"
            :src="sectionThree?.image"
          ></v-img>
        </MotionGroup>
      </div>
    </div>
    <div class="pa-16 pink-bg">
      <div>
        <MotionGroup preset="slideVisibleBottom" :duration="1000">
          <h1 class="jackfruitsHeading max-700 mx-auto">
            {{ sectionFour?.title }}
          </h1>
        </MotionGroup>
        <MotionGroup preset="slideVisibleBottom" :duration="1200">
          <p class="jackfruitsTextGreen max-700 mx-auto text-center">
            {{ sectionFour?.subtitle }}
          </p>
        </MotionGroup>
        <!-- <p class="jackfruitsText max-900 mx-auto text-center py-3">
          This whole fresh fruit is a true conversation starter! The largest
          tree-borne fruit in the world, jackfruit boasts a spiky green exterior
          that hides a treasure trove of tropical delight. When ripe, its flesh
          bursts with a sweet and subtly fruity flavor, reminiscent of a blend
          of pineapple, mango, banana, and maybe even a hint of apple. Enjoy it
          cubed for a refreshing snack, or explore its unique texture by pulling
          it into tender strands. Jackfruit: A Versatile Treat Awaits!
        </p>
        <p class="jackfruitsText max-900 mx-auto text-center py-3">
          This whole jackfruit is a culinary adventure waiting to happen!
          Embrace its tropical essence in smoothies, salads, or even ice cream.
          For the adventurous eater, explore pickling or preserving the
          jackfruit for a longer-lasting taste sensation.
        </p> -->
        <MotionGroup preset="slideVisibleBottom" :duration="1500">
          <p
            class="jackfruitsText max-900 mx-auto text-center py-3"
            v-html="sectionFour?.description"
          ></p>
        </MotionGroup>
      </div>
      <div>
        <MotionGroup preset="slideVisibleRight" :duration="1000">
          <v-img
            max-height="80vh"
            max-width="800px"
            class="joinusimgCss mx-auto"
            :src="sectionFour?.image"
          ></v-img>
        </MotionGroup>
      </div>
    </div>
    <div class="pa-16">
      <div>
        <MotionGroup preset="slideVisibleBottom" :duration="1000">
          <h1 class="jackfruitsHeading max-700 mx-auto">
            {{ sectionFive?.title }}
          </h1>
          <p class="jackfruitsTextGreen max-700 mx-auto text-center">
            {{ sectionFive?.subtitle_1 }}
          </p>
          <p
            class="jackfruitsText max-900 mx-auto text-center py-3"
            v-html="sectionFive?.description_1"
          ></p>
          <p class="jackfruitsTextGreen max-700 mx-auto text-center">
            {{ sectionFive?.subtitle_2 }}
          </p>
          <p
            class="jackfruitsText max-900 mx-auto text-center py-3"
            v-html="sectionFive?.description_2"
          ></p>
        </MotionGroup>
      </div>
      <div>
        <MotionGroup preset="slideVisibleLeft" :duration="1000">
          <v-img
            max-height="80vh"
            max-width="800px"
            class="joinusimgCss mx-auto"
            :src="sectionFive?.image"
          ></v-img>
        </MotionGroup>
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
      sectionFive: {},
    };
  },
  mounted() {
    console.log("this is the http code ", HTTP);
    console.log("this is the http code ", APP_URL);
    // this.getProducts();
  },
  watch: {
    // Watch for changes in the route (URL)
    "$route.query.language_id": {
      handler(newValue) {
        this.getProducts(newValue);
      },
      immediate: true, // Call the handler right away
    },
  },
  methods: {
    async getProducts(language_id = 1) {
      const payload = {
        language_id: language_id || this.$route.query.language_id || 1, // Default to 1 if no language_id in URL
      };
      try {
        const response = await HTTP.post("product", payload);
        console.log("response of the about", response.data.data.AboutSection1);
        this.sectionOne = response.data.data.productSection1;
        this.sectionTwo = response.data.data.ProductSection2;
        this.sectionThree = response.data.data.ProductSection3;
        this.sectionFour = response.data.data.ProductSection4;
        this.sectionFive = response.data.data.ProductSection5;
        // Updating the Image with the base url
        // this.sectionOne.image = `${APP_URL}${this.sectionOne.image}`;
        this.sectionTwo.image = `${APP_URL}${this.sectionTwo.image}`;
        this.sectionThree.image = `${APP_URL}${this.sectionThree.image}`;
        this.sectionFour.image = `${APP_URL}${this.sectionFour.image}`;
        this.sectionFive.image = `${APP_URL}${this.sectionFive.image}`;
        // this.sectionFour.image = `${APP_URL}${this.sectionFour.image}`;
      } catch (error) {
        console.log("error", error);
      }
    },
  },
};
</script>
<style scoped>
.maxFooter {
  background-image: url(../../assets/images/maxFooter.png);
  background-position: bottom left;
  background-size: 12%;
}
</style>
