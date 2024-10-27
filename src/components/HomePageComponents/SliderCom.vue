<template>
  <div style="background-color: #FFFFFF;margin-top: 6%;">
    <!-- show-arrows="hover" -->
    <v-carousel height="650px" hide-delimiters hide-delimiter-background  cycle
    interval="4000">
      <v-carousel-item>
        <v-sheet height="100%" style="background-color: white">
          <div
            class="d-flex fill-height justify-center align-center text-black mt-n2"
          >
            <v-container style="margin-top: -125px;">
              <v-row no-gutters>
                <!-- <v-col cols="2" md="0" sm="0" xs="0"></v-col> -->
                <v-col style="margin: auto;"  cols="10"> 
                  <v-row> 
                    <v-col cols="12" lg="6" md="12" sm="12" xs="12"
                      ><div class="d-flex flex-column">
                        <p class="sliderTxt  mt-16 pt-15">
                          {{ translations.discover }}
                        </p>
                        <img src="../../assets/images/add1.jpg" style=" height: 425px;object-fit: cover;"></img>
                        <router-link class="text-decoration-none" to="/about"
              ><v-btn color="#9EC43B" class="GoBtn">{{ translations.go}}</v-btn></router-link
              >

                        <!-- <router-link class="text-decoration-none" to="/contact"
              ><p class="footerLink">CONTACT</p></router-link
            > -->
                      </div></v-col
                    >
                    <v-col style="padding: 0;" class="disappearing" cols="12" lg="6" md="0" sm="0" xs="0"
                      ><div class="d-sm-none d-lg-block">
                        <v-img min-height="300px" src="../../assets/images/sliderimg1.webp"></v-img></div
                    ></v-col>
                  </v-row>
                </v-col>
                <!-- <v-col cols="2" md="0" sm="0" xs="0"></v-col> -->
              </v-row>
            </v-container>
          </div>
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item>
        <v-sheet height="100%" style="background-color: white">
          <div
            class="d-flex fill-height justify-center align-center text-black mt-n2"
          >
            <v-container style="margin-top: -125px;">
              <v-row>
                <!-- <v-col cols="2" md="0" sm="0" xs="0"></v-col> -->
                <v-col style="margin: auto;"  cols="10"> 
                  <v-row> 
                    <v-col cols="12" lg="6" md="12" sm="12" xs="12"
                      ><div class="d-flex flex-column">
                        <p class="sliderTxt mt-16 pt-15">
                          {{ translations.explore }}
                        </p>
                        <img src="../../assets/images/sliderimg2.webp" style=" height: 425px;object-fit: cover;"></img>
                        <router-link class="text-decoration-none" to="/about"
              ><v-btn color="#9EC43B" class="GoBtn">{{ translations.go}}</v-btn></router-link
              >
                      </div></v-col
                    >
                    <v-col style="padding: 0;" class="disappearing" cols="12" lg="6" md="0" sm="0" xs="0"
                      ><div class="d-sm-none d-lg-block">
                        <v-img min-height="300px" src="../../assets/images/sliderimg3.webp"></v-img></div
                    ></v-col>
                  </v-row>
                </v-col>
                <!-- <v-col cols="2" md="0" sm="0" xs="0"></v-col> -->
              </v-row>
            </v-container>
          </div>
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item>
        <v-sheet height="100%" style="background-color: white">
          <div
            class="d-flex fill-height justify-center align-center text-black mt-n2"
          >
            <v-container style="margin-top: -125px;">
              <v-row>
                <!-- <v-col cols="2" md="0" sm="0" xs="0"></v-col> -->
                <v-col style="margin: auto;"  cols="10"> 
                  <v-row> 
                    <v-col cols="12" lg="6" md="12" sm="12" xs="12"
                      ><div class="d-flex flex-column">
                        <p class="sliderTxt  mt-16 pt-15">
                                                      
                          {{ translations.epic }}
                        </p>
                        <img src="../../assets/images/sliderimg4.webp" style=" height: 425px;object-fit: cover;"></img>
                        <router-link class="text-decoration-none" to="/about"
              ><v-btn color="#9EC43B" class="GoBtn">{{ translations.go}}</v-btn></router-link
              >
                      </div></v-col
                    >
                    <v-col style="padding: 0;" class="disappearing" cols="12" lg="6" md="0" sm="0" xs="0"
                      ><div class="d-sm-none d-lg-block">
                        <v-img min-height="300px" src="../../assets/images/sliderimg5.webp"></v-img></div
                    ></v-col>
                  </v-row>
                </v-col>
                <!-- <v-col cols="2" md="0" sm="0" xs="0"></v-col> -->
              </v-row>
            </v-container>
          </div>
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item>
        <v-sheet height="100%" style="background-color: white">
          <div
            class="d-flex fill-height justify-center align-center text-black mt-n2"
          >
            <v-container style="margin-top: -125px;">
              <v-row>
                <!-- <v-col cols="2" md="0" sm="0" xs="0"></v-col> -->
                <v-col style="margin: auto;"  cols="10"> 
                  <v-row> 
                    <v-col cols="12" lg="6" md="12" sm="12" xs="12"
                      ><div class="d-flex flex-column">
                        <p class="sliderTxt  mt-16 pt-15">     
                          {{ translations.around }}
                        </p>
                        <img src="../../assets/images/sliderimg6.webp" style=" height: 425px;object-fit: cover;"></img>
                        <router-link class="text-decoration-none" to="/about"
              ><v-btn color="#9EC43B" class="GoBtn">{{ translations.go}}</v-btn></router-link
              >
                      </div></v-col
                    >
                    <v-col style="padding: 0;" class="disappearing" cols="12" lg="6" md="0" sm="0" xs="0"
                      ><div class="d-sm-none d-lg-block">
                        <v-img min-height="300px" height="100%" src="../../assets/images/sliderimg7.webp"></v-img></div
                    ></v-col>
                  </v-row>
                </v-col>
                <!-- <v-col cols="2" md="0" sm="0" xs="0"></v-col> -->
              </v-row>
            </v-container>
          </div>
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item>
        <v-sheet height="100%" style="background-color: white">
          <div
            class="d-flex fill-height justify-center align-center text-black mt-n2"
          >
            <v-container style="margin-top: -125px;">
              <v-row>
                <!-- <v-col cols="2" md="0" sm="0" xs="0"></v-col> -->
                <v-col style="margin: auto;"  cols="10"> 
                  <v-row> 
                    <v-col cols="12" lg="6" md="12" sm="12" xs="12"
                      ><div class="d-flex flex-column">
                        <p class="sliderTxt  mt-16 pt-15">
                                                      
                          {{ translations.team }}
                        </p>
                        <img src="../../assets/images/sliderimg8.webp" style=" height: 425px;object-fit: contain;"></img>
                        <router-link class="text-decoration-none" to="/about"
              ><v-btn color="#9EC43B" class="GoBtn">{{ translations.go}}</v-btn></router-link
              >
                      </div></v-col
                    >
                    <v-col style="padding: 0;" class="disappearing" cols="12" lg="6" md="0" sm="0" xs="0"
                      ><div class="d-sm-none d-lg-block">
                        <!-- <v-img min-height="300px" src="../../assets/images/slider1.png"></v-img> -->
                        <v-responsive style="max-height: 748px;">
          <video  controls autoplay muted >
            <source src="../../assets/images/videojackfruits.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </v-responsive>
                        </div
                    ></v-col>
                  </v-row>
                </v-col>
                <!-- <v-col cols="2" md="0" sm="0" xs="0"></v-col> -->
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
    return {
      languageId: 1, // Default to 1 (English)
      translations: {
        discover: '',
        explore: '',
        epic: '',
        around: '',
        team: '',
        go:''
      },
      translationData: {
  1: { // English
    discover: "Discover the Benefits of Jackfruits",
    explore: "Explore our Jackfruit Delights Selection",
    epic: "Epic Xperience: Jackfruit Guys' Eventful Adventures",
    around: "Around the World with Jackfruit Guys: Global Presence",
    team: "Global Team: Jackfruit Guys' Collaborators",
    go: "Go" // Added "Go" translation
  },
  2: { // French
    discover: "Découvrez les avantages du jacquier",
    explore: "Explorez notre sélection de délices au jacquier",
    epic: "Épique expérience: les aventures mouvementées des Jackfruit Guys",
    around: "Autour du monde avec les Jackfruit Guys: Présence mondiale",
    team: "Équipe mondiale: les collaborateurs des Jackfruit Guys",
    go: "Aller" // Added "Go" translation
  },
  3: { // German
    discover: "Entdecken Sie die Vorteile von Jackfruits",
    explore: "Entdecken Sie unsere Auswahl an Jackfruit-Delikatessen",
    epic: "Episches Erlebnis: Jackfruit Guys' ereignisreiche Abenteuer",
    around: "Rund um die Welt mit Jackfruit Guys: Globale Präsenz",
    team: "Globales Team: Jackfruit Guys' Mitarbeiter",
    go: "Gehen" // Added "Go" translation
  },
  4: { // Spanish
    discover: "Descubre los beneficios del Jackfruit",
    explore: "Explora nuestra selección de delicias de Jackfruit",
    epic: "Experiencia épica: Las aventuras llenas de eventos de Jackfruit Guys",
    around: "Alrededor del mundo con Jackfruit Guys: Presencia global",
    team: "Equipo global: Colaboradores de Jackfruit Guys",
    go: "Ir" // Added "Go" translation
  }
}

    };
  },
  mounted() {
    this.updateLanguageIdFromURL();
  },
  watch: {
    // Watch the URL change and update languageId accordingly
    '$route': 'updateLanguageIdFromURL'
  },
  methods: {
    updateLanguageIdFromURL() {
      const params = new URLSearchParams(window.location.search);
      const langId = parseInt(params.get('language_id')) || 1;
      this.languageId = langId;
      this.updateTranslations();
    },
    updateTranslations() {
      this.translations = this.translationData[this.languageId];
    }
  }
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
      font-size: 43px;
    line-height: 39px;
  /* margin-top: -20px; */
  margin-bottom: 20px;
  font-weight: 700;
}
@media (max-width:680px){
  .disappearing{
    display: none;
  }
  .sliderTxt{
    font-size: 31px;
  }
}
</style>
