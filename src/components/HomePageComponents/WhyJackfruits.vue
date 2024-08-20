<template>
  <div class="text-black" style="background-color: #fef9eb">
    <v-row>
      <v-col>
        <div>
          <h2 class="about">Why Jackfruit?</h2>
          <p class="about-txt">
            Jackfruit is not just delicious, it's incredibly nutritious too.
            Learn about the numerous health benefits of jackfruit, including its
            high fiber content, vitamins, and antioxidants. Discover why
            jackfruit is the perfect addition to your diet.
          </p>
          <v-btn elevation="0" class="readmorebtn">Read More</v-btn>
        </div>
      </v-col>
      <v-col>
        <div>
          <v-img src="../../assets/images/whyjack.png"></v-img>
        </div>
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
  line-height: 81px;
  letter-spacing: -0.03em;
  text-align: left;
}
.about-txt {
  font-family: "Poppins";
  font-size: 18px;
  font-weight: 400;
  /* line-height: 36px; */
  text-align: left;
}
.readmorebtn {
  background-color: #9ec43b;
  text-transform: capitalize;
  width: 150px;
  border-radius: 0;
}
</style>
