<template>
    <v-container fluid class="poster-container">
      <v-row no-gutters fill-height>
        <v-col class="left-section">
          <v-row no-gutters class="we-care">
            <v-col class="text-center">
              <h1>We</h1>
              <h1>Care</h1>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="right-section">
          <v-row no-gutters class="nourishing">
            <v-col class="text-center">
              <h1>Nourishing.</h1>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <div class="center-logo">
        <v-img src="@/assets/logo.png" alt="logo" contain class="logo"/>  <!-- Replace with your logo path -->
      </div>
      <div class="bottom-text">
        <v-row no-gutters justify="center">
          <h1 class="text-center">Healthy</h1>
          <h1 class="text-center">Happy</h1>
          <h1 class="text-center">Living</h1>
        </v-row>
      </div>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'Poster'
  }
  </script>
  
  <style scoped>
  .poster-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  
  .left-section {
    background-color: #a6ce39; /* light green color */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .right-section {
    background-color: #f6ae42; /* light orange color */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .we-care, .nourishing {
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .center-logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.1;
  }
  
  .logo {
    max-width: 200px; /* Adjust size as needed */
  }
  
  .bottom-text {
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
  }
  
  h1 {
    margin: 0;
    color: white;
    font-weight: bold;
    font-size: 3rem; /* Adjust size as needed */
  }
  
  .text-center {
    text-align: center;
  }
  </style>
  