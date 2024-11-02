<template>
  <div class="stack text-black">
    <div
      class="stack__card"
      v-for="(card, index) in sectionTwo"
      :key="index"
      ref="cards"
    >
      <img
        :src="card.media"
        alt="card image"
        max-height="80vh"
        class="card-img joinusimgCss fade-in"
      />
    </div>
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
  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      {
        threshold: 0.1, // Trigger animation when 10% of the image is in view
      }
    );

    // Observe each card image
    this.$refs.cards.forEach((card) => {
      observer.observe(card.querySelector("img"));
    });
  },
};
</script>

<style scoped>
.card-img {
  width: 100%;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.card-img.animate {
  opacity: 1;
  transform: translateY(0);
}

html {
  font-family: sans-serif;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
</style>
