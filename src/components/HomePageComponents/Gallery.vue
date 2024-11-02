<template>
  <div class="stack">
    <div class="stack__card" v-for="(card, index) in cards" :key="index">
      <img :src="card" alt="card image" class="card-img" />
    </div>
  </div>
</template>

<script>
import gal1 from "@/assets/images/gal1.png";
import gal2 from "@/assets/images/gal2.png";
import gal3 from "@/assets/images/gal3.png";
import gal4 from "@/assets/images/gal4.png";
export default {
  data() {
    return {
      cards: [gal1, gal2, gal3, gal4, gal1],
      cardsColors: ["#E3342F", "#38C172", "#3490DC", "#F66D9B", "#F6993F"],
    };
  },
};
</script>

<style scoped>
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

.stack__card:nth-child(1) {
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
}
</style>
