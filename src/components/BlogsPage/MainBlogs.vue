<template>
    <div class="text-black">
      <v-row>
        <v-col v-for="blog in blogs" :key="blog.id" cols="6">
          <div @click="goToDetail(blog.id)">
            <v-img :src="getImageUrl(blog.image)"></v-img>
            <h3 class="jackfruitsHeadingSmall">{{ blog.title }}</h3>
            <p class="jackfruitsText">{{ blog.description }}</p>
            <p class="jackfruitsTextGreen">Read More...</p>
          </div>
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script>
  import blogs from "./Blogs.json";
  import { useRouter } from 'vue-router';
  
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
        this.$router.push({ name: 'BlogDetail', params: { id: blogId } });
      },
    },
  };
  </script>
  