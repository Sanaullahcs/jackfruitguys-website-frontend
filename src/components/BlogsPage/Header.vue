<template>
    <div class="main-header">
      <div class="wave-wrapper">
        <h1 class="mt-3 header-text">Blogs</h1>
      </div>
    </div>
  </template>
  <style scoped>
  .header-text {
    font-family: Poppins;
    font-size: 40px;
    font-weight: 800;
    line-height: 90px;
    letter-spacing: -0.03em;
    text-align: center;
  }
  .main-header {
    background-image: url(@/assets/images/blogHeader.png);
    height: 350px;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .wave-wrapper {
    background-image: url(@/assets/images/wave.png);
    background-size: contain;
    width: 42%;
    /* background: red; */
    height: 25%;
    display: flex;
    justify-content: center;
    align-items: start;
  }
  </style>
  