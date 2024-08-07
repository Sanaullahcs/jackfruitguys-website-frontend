<template>
  <div style="background-color: white; height: 100vh;">
    <!-- show-arrows="hover" -->
    <v-carousel hide-delimiters hide-delimiter-background>
      <v-carousel-item>
        <v-sheet height="100%" style="background-color: white">
          <div
            class="d-flex fill-height justify-center align-center text-black mt-16 pt-16"
          >
            <v-container>
              <v-row>
                <v-col cols="3"></v-col> 
                <v-col cols="6">
                  <v-row>
                    <v-col cols="5"
                      ><div>
                        <p class="sliderTxt">
                          Discover the Benifits of Jackfruite Guys
                        </p>
                        <v-img src="../../assets/slider2.png"></v-img>
                        <v-btn>GO</v-btn>
                      </div></v-col
                    >
                    <v-col cols="7"
                      ><div>
                        <v-img src="../../assets/slider1.png"></v-img></div
                    ></v-col>
                  </v-row>
                </v-col>
                <v-col cols="3"></v-col>
              </v-row>
            </v-container>
          </div>
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item>
        <v-sheet height="100%" style="background-color: white">
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">Slide 2</div>
          </div>
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item>
        <v-sheet height="100%" style="background-color: white">
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">Slide 3</div>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style>
.v-window__controls .v-window__left {
  margin-left: 10%;
}
.v-window__controls .v-window__right {
  margin-right: 10%;
}
</style>
<style scoped>
.sliderTxt {
  color: #8d580a;
  font-family: "Poppins", sans-serif;
  font-size: 32px;
  line-height: 28px;
  font-weight: 600;
}
</style>
