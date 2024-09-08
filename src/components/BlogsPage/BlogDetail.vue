<template>
  <div class="pa-16">
    <div class="text-black" v-if="blog">
      <v-img :src="getImageUrl(blog.image)"></v-img>
      <h1 class="jackfruitsHeadingSmall">{{ blog.title }}</h1>
      <p class="jackfruitsText">{{ blog.description }}</p>
    </div>
  </div>
</template>

<script>
import blogs from "./Blogs.json";

export default {
  data() {
    return {
      blog: null,
    };
  },
  mounted() {
    const blogId = this.$route.params.id;
    this.blog = blogs.find((blog) => blog.id === parseInt(blogId));
  },
  methods: {
    getImageUrl(imagePath) {
      return new URL(`${imagePath}`, import.meta.url).href;
    },
  },
};
</script>
<style>
@import "../../assets/css/style.css";
</style>
