<template>
    <div class="stack">
      <div class="stack__card" v-for="(card, index) in cards" :key="index">
        {{ card }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cards: ['🐶', '🐱', '😂', '👽', '👌'],
        cardsColors: ['#E3342F', '#38C172', '#3490DC', '#F66D9B', '#F6993F'],
      };
    },
  };
  </script>
  
  <style scoped>
  html {
    font-family: sans-serif;
    box-sizing: border-box;
  }
  
  *, *::before, *::after {
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
    background-color: #E3342F;
  }
  
  .stack__card:nth-child(2) {
    background-color: #38C172;
  }
  
  .stack__card:nth-child(3) {
    background-color: #3490DC;
  }
  
  .stack__card:nth-child(4) {
    background-color: #F66D9B;
  }
  
  .stack__card:nth-child(5) {
    background-color: #F6993F;
  }
  </style>
  