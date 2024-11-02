<template>
  <div class="stack text-black">
    <v-row>
      <v-col
        v-for="(card, index) in sectionTwo"
        :key="index"
        cols="12"
        md="3"
        sm="12"
      >
        <div class="stack__card" @click="openLightbox(index)">
          <img
            :src="card.media"
            style="height: 190px"
            alt="card image"
            class="card-img joinusimgCss"
          />
        </div>
      </v-col>
    </v-row>

    <!-- Lightbox Modal -->
    <v-dialog height="600" v-model="lightboxOpen" max-width="80%">
      <v-card>
        <v-card-text class="lightbox-content">
          <v-btn class="left" icon @click="previousImage">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <img
            :src="sectionTwo[currentImageIndex].media"
            alt="current image"
            class="lightbox-img"
          />
          <v-btn class="right" icon @click="nextImage">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    sectionTwo: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      lightboxOpen: false,
      currentImageIndex: 0,
    };
  },
  methods: {
    openLightbox(index) {
      this.currentImageIndex = index;
      this.lightboxOpen = true;
    },
    nextImage() {
      if (this.currentImageIndex < this.sectionTwo.length - 1) {
        this.currentImageIndex++;
      } else {
        this.currentImageIndex = 0; // Loop back to the first image
      }
    },
    previousImage() {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex--;
      } else {
        this.currentImageIndex = this.sectionTwo.length - 1; // Loop to the last image
      }
    },
  },
};
</script>

<style scoped>
.card-img {
  width: 100%;
  cursor: pointer;
  object-fit: cover;
}
.stack__card {
  display: flex;
  justify-content: center;
}

.lightbox-content {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 !important;
}
.left {
  position: absolute;
  left: 10px;
}
.right {
  position: absolute;
  right: 10px;
}

.lightbox-img {
  max-width: 100%;
  max-height: 80vh;
}

@media screen and (max-width: 480px) {
  .lightbox-content .mdi-chevron-left {
    margin-left: 20px;
  }
  .lightbox-content .mdi-chevron-right {
    margin-right: 20px;
  }
}
</style>
