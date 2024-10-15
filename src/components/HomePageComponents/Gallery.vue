<template>
  <div class="stack text-black">
    <!-- {{ sectionTwo }} -->
    <div class="stack__card" v-for="(card, index) in sectionTwo" :key="index">
      <img :src="card.media" alt="card image" class="card-img" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sectionTwo: {
      type: Array,
      required: true, // Set to true if the prop is required
    },
  },
  data() {
    return {
      cards: [
        "../../assets/images/gal1.png",
        "../../assets/images/gal2.png",
        "../../assets/images/gal3.png",
        "../../assets/images/gal4.png",
        "../../assets/images/gal1.png",
      ],
      cardsColors: ["#E3342F", "#38C172", "#3490DC", "#F66D9B", "#F6993F"],
    };
  },
};
</script>

<style scoped>
.card-img {
  width: 100%;
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

.stack {
  display: flex;
  flex-direction: column;
}

.stack__card {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: sticky;
  top: 0;
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.1), 0 -1px 2px rgba(0, 0, 0, 0.25);
  font-size: 10rem;
}

/* .stack__card:nth-child(1) {
  background-color: #e3342f;
}

.stack__card:nth-child(2) {
  background-color: #38c172;
}

.stack__card:nth-child(3) {
  background-color: #3490dc;
}

.stack__card:nth-child(4) {
  background-color: #f66d9b;
}

.stack__card:nth-child(5) {
  background-color: #f6993f;
} */
</style>
