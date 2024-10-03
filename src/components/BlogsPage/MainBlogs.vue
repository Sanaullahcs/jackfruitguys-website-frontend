<template>
  <div class="text-black pa-16">
    <v-row>
      <v-col
        v-for="blog in blogs"
        :key="blog.id"
        cols="12" lg="6" xl="6"
        style="cursor: pointer"
      >
        <div @click="goToDetail(blog.id)">
          <v-img :src="getImageUrl(blog.image)"></v-img>
          <h3 class="jackfruitsHeadingSmall pt-3">{{ blog.title }}</h3>
          <p class="jackfruitsText py-5">
            {{ blog.description.slice(0, 150) }}...
          </p>

          <p class="jackfruitsTextGreen">Read More...</p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import blogs from "./Blogs.json";
import { useRouter } from "vue-router";

export default {
  data() {
    return {
      blogs,
    };
  },
  methods: {
    getImageUrl(imagePath) {
      return new URL(`${imagePath}`, import.meta.url).href;
    },
    goToDetail(blogId) {
      this.$router.push({ name: "BlogDetail", params: { id: blogId } });
    },
  },
};
</script>
