<template>
  <div class="px-16">
    <div>
      <div class="py-5">
        
        <v-img
          src="../../assets/images/ex1.png"
          class="mx-auto"
          max-width="300px"
        ></v-img>
      </div>
    </div>
    <div>
      <div>
        <v-img src="../../assets/images/ex1.png"></v-img>
      </div>
    </div>
    <div>
      <Gallery />
    </div>
  </div>
</template>
<script>
import Gallery from "../HomePageComponents/Gallery.vue";
export default {
  components: {
    Gallery,
  },
};
</script>
