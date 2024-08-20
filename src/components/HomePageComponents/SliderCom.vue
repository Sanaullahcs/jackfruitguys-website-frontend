<template>
  <div style="background-color: white;">
    <!-- show-arrows="hover" -->
    <v-carousel height="650px" hide-delimiters hide-delimiter-background>
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
                    <v-col cols="6" lg="6" md="6" sm="6"
                      ><div class="d-flex flex-column">
                        <p class="sliderTxt">
                          Discover the Benifits of Jackfruite Guys
                        </p>
                        <img src="../../assets/images/slider2.png" style="height: 50vh;object-fit: contain;"></img>
                        <v-btn color="#9EC43B" class="GoBtn">GO</v-btn>
                      </div></v-col
                    >
                    <v-col cols="6" lg="6" md="6" sm="6"
                      ><div>
                        <v-img src="../../assets/images/slider1.png"></v-img></div
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
          <div
            class="d-flex fill-height justify-center align-center text-black mt-16 pt-16"
          >
            <v-container>
              <v-row>
                <v-col cols="3"></v-col>
                <v-col cols="6">
                  <v-row> 
                    <v-col cols="6" lg="6" md="6" sm="6"
                      ><div class="d-flex flex-column">
                        <p class="sliderTxt">
                          Discover the Benifits of Jackfruite Guys
                        </p>
                        <img src="../../assets/images/slider2.png" style="height: 50vh;object-fit: contain;"></img>
                        <v-btn color="#9EC43B" class="GoBtn">GO</v-btn>
                      </div></v-col
                    >
                    <v-col cols="6" lg="6" md="6" sm="6"
                      ><div>
                        <v-img src="../../assets/images/slider1.png"></v-img></div
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
          <div
            class="d-flex fill-height justify-center align-center text-black mt-16 pt-16"
          >
            <v-container>
              <v-row>
                <v-col cols="3"></v-col>
                <v-col cols="6">
                  <v-row> 
                    <v-col cols="6" lg="6" md="6" sm="6"
                      ><div class="d-flex flex-column">
                        <p class="sliderTxt">
                          Discover the Benifits of Jackfruite Guys
                        </p>
                        <img src="../../assets/images/slider2.png" style="height: 50vh;object-fit: contain;"></img>
                        <v-btn color="#9EC43B" class="GoBtn">GO</v-btn>
                      </div></v-col
                    >
                    <v-col cols="6" lg="6" md="6" sm="6"
                      ><div>
                        <v-img src="../../assets/images/slider1.png"></v-img></div
                    ></v-col>
                  </v-row>
                </v-col>
                <v-col cols="3"></v-col>
              </v-row>
            </v-container>
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
.GoBtn {
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  line-height: 36px;
  font-weight: 600;
  width: 100%;
  background-color: #9ec43b;
  box-shadow: none;
  margin-top: 15px;
  color: white !important;
}
.sliderTxt {
  color: #8d580a;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  line-height: 24px;
  /* margin-top: -20px; */
  margin-bottom: 20px;
  font-weight: 700;
}
</style>
