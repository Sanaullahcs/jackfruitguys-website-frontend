<template>
  <div class="text-black" style="background-color: #fef9eb">
    <v-row class="py-8" align="center">
      <!-- Text Section -->
      <v-col cols="12" md="6" class="d-flex flex-column justify-center">
        <div class="ms-md-16 px-4">
          <h2 class="about my-5">Why Jackfruit?</h2>
          <p class="about-txt">
            Jackfruit is not just delicious, it's incredibly nutritious too.
            Learn about the numerous health benefits of jackfruit, including its
            high fiber content, vitamins, and antioxidants. Discover why
            jackfruit is the perfect addition to your diet.
          </p>
          <v-btn elevation="0" class="readmorebtn my-5">Read More</v-btn>
        </div>
      </v-col>
      
      <!-- Image Section -->
      <v-col cols="12" md="6" class="d-flex justify-center">
        <v-img
          src="../../assets/images/whyjack.png"
          class="img-responsive"
          max-width="100%"
        ></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.about {
  font-family: "Poppins";
  font-size: 34px;
  font-weight: 800;
  color: #865b20;
  line-height: 1.2; /* Adjusted for better responsiveness */
  letter-spacing: -0.03em;
  text-align: left;
}

.about-txt {
  font-family: "Poppins";
  font-size: 18px;
  font-weight: 400;
  text-align: left;
}

.readmorebtn {
  background-color: #9ec43b;
  text-transform: capitalize;
  max-width: 150px;
  border-radius: 0;
}

/* Responsive Styling */
@media (max-width: 600px) {
  .about {
    font-size: 28px;
    line-height: 1.2;
  }
  
  .about-txt {
    font-size: 16px;
  }
  
  .ms-md-16 {
    margin-left: 0 !important;
  }
  
  .readmorebtn {
    width: 100%;
    text-align: center;
  }
}
</style>
