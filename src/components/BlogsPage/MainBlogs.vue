<template>
  <div class="text-black pa-16">
    <v-row>
      <v-col
        v-for="blog in blogs"
        :key="blog.id"
        cols="12"
        lg="6"
        xl="6"
        style="cursor: pointer"
      >
        <div @click="goToDetail(blog.id)">
          <v-img
            min-height="70vh"
            class="joinusimgCss"
            :src="blog.image_1"
          ></v-img>
          <h3 class="jackfruitsHeadingSmall pt-3">{{ blog.title }}</h3>
          <p class="jackfruitsText py-5">
            {{ blog.subtitle.slice(0, 150) }}...
          </p>

          <p class="jackfruitsTextGreen">Read More...</p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import blogs from "./Blogs.json";
import { useRouter } from "vue-router";
import { HTTP } from "../../common/commom-http";
import { APP_URL } from "../../common/commom-http";

export default {
  data() {
    return {
      blogs: [],
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
  methods: {
    async getAboutData(language_id = 1) {
      const payload = {
        language_id: language_id || this.$route.query.language_id || 1, // Default to 1 if no language_id in URL
      };
      try {
        const response = await HTTP.post("blogs", payload);
        console.log("response of the blog", response.data.data);
        this.blogs = response.data.data;
        this.blogs.forEach((section) => {
          section.image_1 = `${APP_URL}${section.image_1}`;
        });
        // this.sectionOne = response.data.data.AboutSection1;
        // this.sectionTwo = response.data.data.AboutSection2;
        // this.sectionThree = response.data.data.AboutSection3;
        // this.sectionFour = response.data.data.AboutSection4;
        // Updating the Image with the base url
        // this.sectionOne.image = `${APP_URL}${this.sectionOne.image}`;
        // this.sectionTwo.image = `${APP_URL}${this.sectionTwo.image}`;
        // this.sectionThree.image = `${APP_URL}${this.sectionThree.image}`;
        // this.sectionFour.image = `${APP_URL}${this.sectionFour.image}`;
      } catch (error) {
        console.log("error", error);
      }
    },
    getImageUrl(imagePath) {
      return new URL(`${imagePath}`, import.meta.url).href;
    },
    goToDetail(blogId) {
      this.$router.push({ name: "BlogDetail", params: { id: blogId } });
    },
  },
};
</script>
