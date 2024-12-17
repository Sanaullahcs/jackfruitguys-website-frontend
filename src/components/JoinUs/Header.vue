<template>
    <div class="main-header">
      <div class="wave-wrapper">
        <h1 class="mt-3 header-text">Join Us</h1>
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
    background-image: url(@/assets/images/newHeaderAdd.png);
    height: 350px;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
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
  @media screen and (max-width: 480px) {
  .main-header {
  height: 150px;
}
.header-text {
  
  font-size: 20px;
 
  line-height: 17px;
  
}
}
  </style>
   <script>
   export default{
     mounted() {
     // Scroll to the top of the page
     console.log("scrolling to the top");
     window.scrollTo(0, 0);
   },
   }
 </script>