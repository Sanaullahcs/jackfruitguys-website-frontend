<template>
  <div class="pa-16 text-black">
    <div class="text-black" v-if="blog">
      <v-img
        max-height="80vh"
        max-width="800px"
        class="joinusimgCss mx-auto"
        :src="blog.image_1"
      ></v-img>
      <h1 class="jackfruitsHeadingSmall">{{ blog.title }}</h1>
      <p class="jackfruitsText" v-html="blog.description_2"></p>
    </div>
  </div>
</template>

<script>
import { HTTP } from "../../common/commom-http";
import { APP_URL } from "../../common/commom-http";

export default {
  data() {
    return {
      blog: null,
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
  mounted() {
    // this.blog = blogs.find((blog) => blog.id === parseInt(blogId));
  },
  methods: {
    async getAboutData() {
      const payload = {
        language_id:  this.$route.query.language_id || 1, // Default to 1 if no language_id in URL
      };
      try {
        const response = await HTTP.post("blogs", payload);
        console.log("response of the blog", response.data.data);
        this.blogs = response.data.data;
        this.blogs.forEach((section) => {
          section.image_1 = `${APP_URL}${section.image_1}`;
        });
        // Find the blog that matches the ID from the route
        const blogId = this.$route.params.id;
        this.blog = this.blogs.find((blog) => blog.id === parseInt(blogId));

        if (!this.blog) {
          console.error(`Blog with id ${blogId} not found`);
        }
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
  },
};
</script>
<style>
@import "../../assets/css/style.css";
</style>
