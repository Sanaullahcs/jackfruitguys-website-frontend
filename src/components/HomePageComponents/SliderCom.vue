<template>
  <div style="background-color: #FFFFFF;">
    <!-- show-arrows="hover" -->
    <v-carousel height="650px" hide-delimiters hide-delimiter-background>
      <v-carousel-item>
        <v-sheet height="100%" style="background-color: white">
          <div
            class="d-flex fill-height justify-center align-center text-black mt-n2"
          >
            <v-container style="margin-top: -125px;">
              <v-row no-gutters>
                <v-col cols="2" md="0" sm="0" xs="0"></v-col>
                <v-col cols="8"> 
                  <v-row> 
                    <v-col cols="12" lg="6" md="12" sm="12" xs="12"
                      ><div class="d-flex flex-column">
                        <p class="sliderTxt  mt-8">
                          Discover the Benifits of Jackfruite Guys
                        </p>
                        <img src="../../assets/images/image.png" style="height: 50%;object-fit: contain;"></img>
                        <v-btn color="#9EC43B" class="GoBtn">GO</v-btn>
                      </div></v-col
                    >
                    <v-col class="disappearing" cols="12" lg="6" md="0" sm="0" xs="0"
                      ><div class="d-sm-none d-lg-block">
                        <v-img src="../../assets/images/slider1.png"></v-img></div
                    ></v-col>
                  </v-row>
                </v-col>
                <v-col cols="2" md="0" sm="0" xs="0"></v-col>
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
            <v-container style="margin-top: -125px;">
              <v-row>
                <v-col cols="2" md="0" sm="0" xs="0"></v-col>
                <v-col cols="8"> 
                  <v-row> 
                    <v-col cols="12" lg="6" md="12" sm="12" xs="12"
                      ><div class="d-flex flex-column">
                        <p class="sliderTxt mt-8">
                          Discover the Benifits of Jackfruite Guys
                        </p>
                        <img src="../../assets/images/image.png" style="height: 50%;object-fit: contain;"></img>
                        <v-btn color="#9EC43B" class="GoBtn">GO</v-btn>
                      </div></v-col
                    >
                    <v-col class="disappearing" cols="12" lg="6" md="0" sm="0" xs="0"
                      ><div class="d-sm-none d-lg-block">
                        <v-img src="../../assets/images/slider1.png"></v-img></div
                    ></v-col>
                  </v-row>
                </v-col>
                <v-col cols="2" md="0" sm="0" xs="0"></v-col>
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
            <v-container style="margin-top: -125px;">
              <v-row>
                <v-col cols="2" md="0" sm="0" xs="0"></v-col>
                <v-col cols="8"> 
                  <v-row> 
                    <v-col cols="12" lg="6" md="12" sm="12" xs="12"
                      ><div class="d-flex flex-column">
                        <p class="sliderTxt  mt-8">
                          Discover the Benifits of Jackfruite Guys
                        </p>
                        <img src="../../assets/images/image.png" style="height: 50%;object-fit: contain;"></img>
                        <v-btn color="#9EC43B" class="GoBtn">GO</v-btn>
                      </div></v-col
                    >
                    <v-col class="disappearing" cols="12" lg="6" md="0" sm="0" xs="0"
                      ><div class="d-sm-none d-lg-block">
                        <v-img src="../../assets/images/slider1.png"></v-img></div
                    ></v-col>
                  </v-row>
                </v-col>
                <v-col cols="2" md="0" sm="0" xs="0"></v-col>
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
@media (max-width:680px){
  .disappearing{
    display: none;
  }
}
</style>
