<template>
  <v-app-bar
    app
    color="white"
    elevation="0"
    style="background-color: red; margin-bottom: 20px; height: 127px"
  >
    <div class="w-100 mt-n10 position-relative">
      <div class="d-flex justify-center pb-5">
        <v-img
          v-motion-fade-visible
          src="@/assets/images/hdlogo.svg"
          max-width="272px"
          min-width="252px"
          alt="logo"
          contain
          class="logo"
        />
        <v-select
          min-width="100px"
          max-width="100px"
          v-model="selectedLanguage"
          :items="languages"
          class="position-absolute flag-selector"
          style="right: 22px; top: 10px"
          density="compact"
          @update:modelValue="updateLanguageInUrl"
          item-title="label"
          item-value="value"
          variant="outlined"
        >
          <template v-slot:selection="{ item, props }">
            <v-list-item :prepend-avatar="item.raw.avatar" v-bind="props">
              {{ item.raw.title }}
            </v-list-item>
          </template>

          <template v-slot:item="{ item, props }">
            <v-list-item :prepend-avatar="item.raw.avatar" v-bind="props">
              {{ item.raw.title }}
            </v-list-item>
          </template>
        </v-select>
      </div>
      <v-row align="center" justify="space-between">
        <v-col class="d-none d-md-flex">
          <v-row align="center" justify="center">
            <v-btn
              v-for="button in translatedButtons"
              :key="button.value"
              text
              elevation="0"
              class="mainBtn"
              :class="{ active: activeButton === button.value }"
              @click="setActive(button.value)"
            >
              {{ button.label }}
            </v-btn>
          </v-row>
        </v-col>
        <v-col class="d-md-none d-flex justify-end">
          <v-btn icon @click.stop="drawer = !drawer">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" app temporary class="appNav">
    <v-list class="pa-3 pt-16 mt-6" style="background-color: white">
      <v-list-item
        v-for="button in translatedButtons"
        :key="button.value"
        @click="setActive(button.value)"
        :class="{ active: activeButton === button.value }"
      >
        <v-list-item-title>{{ button.label }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import usa from "../assets/images/usa.svg";
import fr from "../assets/images/fr.svg";
import sp from "../assets/images/sp.svg";
import gr from "../assets/images/gr.svg";

export default {
  name: "Navbar",
  data() {
    return {
      selectedLanguage: 1,
      languages: [
        { label: "", value: 1, avatar: usa },
        { label: "", value: 2, avatar: fr },
        { label: "", value: 3, avatar: gr },
        { label: "", value: 4, avatar: sp },
      ],
      activeButton: "home", // Set default active button
      drawer: false, // For mobile menu
      translationData: {
        1: {
          // English
          buttons: {
            home: "Home",
            about: "About Us",
            sustainability: "Sustainability",
            benefits: "Benefits",
            products: "Products",
            experience: "Experience",
            presence: "Presence",
            partners: "Partner",
            contact: "Contact Us",
            blogs: "Blogs",
            recipe: "Recipes",
            joinUs: "Join Us",
          },
        },
        2: {
          // French
          buttons: {
            home: "Accueil",
            about: "À propos",
            sustainability: "Durabilité",
            benefits: "Avantages",
            products: "Produits",
            experience: "Expérience",
            presence: "Présence",
            partners: "Partenaires",
            contact: "Contactez-nous",
            blogs: "Blogs",
            recipe: "Recettes",
            joinUs: "Rejoignez-nous",
          },
        },
        3: {
          // German
          buttons: {
            home: "Startseite",
            about: "Über uns",
            sustainability: "Nachhaltigkeit",
            benefits: "Vorteile",
            products: "Produkte",
            experience: "Erlebnis",
            presence: "Präsenz",
            partners: "Partner",
            contact: "Kontakt",
            blogs: "Blogs",
            recipe: "Rezepte",
            joinUs: "Mitmachen",
          },
        },
        4: {
          // Spanish
          buttons: {
            home: "Inicio",
            about: "Sobre nosotros",
            sustainability: "Sostenibilidad",
            benefits: "Beneficios",
            products: "Productos",
            experience: "Experiencia",
            presence: "Presencia",
            partners: "Socios",
            contact: "Contáctenos",
            blogs: "Blogs",
            recipe: "Recetas",
            joinUs: "Únete a nosotros",
          },
        },
      },
    };
  },
  computed: {
    translatedButtons() {
      // console.log("URL ID:", this.$route.query.language_id);
      // this.setId(this.$route.query.language_id);
      const languageData = this.translationData[this.selectedLanguage];
      if (!languageData) {
        return []; // Return an empty array if selectedLanguage data is not available
      }
      return Object.keys(languageData.buttons).map((key) => ({
        value: key,
        label: languageData.buttons[key],
      }));
    },
  },
  mounted() {
    console.log("URL ID:", this.$route.query.language_id);
    // this.selectedLanguage = 1;
    this.setId(1);
    this.watchRouteChange();
    this.setActiveButton();
  },
  watch: {
    $route() {
      this.setActiveButton();
    },
  },
  methods: {
    setId(id) {
      this.selectedLanguage = id;
      console.log("setting id ", id);
    },
    watchRouteChange() {
      this.$watch(
        () => this.$route.path,
        (newPath, oldPath) => {
          if (newPath !== oldPath) {
            this.selectedLanguage = 1;
          }
        }
      );
    },
    updateLanguageInUrl() {
      this.$router.push({ query: { language_id: this.selectedLanguage } });
    },
    setActiveButton() {
      const path = this.$route.path;

      switch (path) {
        case "/":
          this.activeButton = "home";
          break;
        case "/about":
          this.activeButton = "about";
          break;
        case "/sustainability":
          this.activeButton = "sustainability";
          break;
        case "/benefits":
          this.activeButton = "benefits";
          break;
        case "/contact":
          this.activeButton = "contact";
          break;
        case "/products":
          this.activeButton = "products";
          break;
        case "/blog":
          this.activeButton = "blogs";
          break;
        case "/experience":
          this.activeButton = "experience";
          break;
        case "/presence":
          this.activeButton = "presence";
          break;
        case "/partner": // Fix: use "/partners" instead of "/partner"
          this.activeButton = "partners"; // Fix: use "partners" to match button value
          break;
        case "/recipe":
          this.activeButton = "recipe";
          break;
        case "/join-us":
          this.activeButton = "joinUs";
          break;
        default:
          this.activeButton = ""; // Reset if no match
      }
    },
    setActive(button) {
      console.log("button", button);
      this.activeButton = button;

      switch (button) {
        case "home":
          this.$router.push("/");
          break;
        case "about":
          this.$router.push("/about");
          break;
        case "sustainability":
          this.$router.push("/sustainability");
          break;
        case "benefits":
          this.$router.push("/benefits");
          break;
        case "contact":
          this.$router.push("/contact");
          break;
        case "products":
          this.$router.push("/products");
          break;
        case "blogs":
          this.$router.push("/blog");
          break;
        case "experience":
          this.$router.push("/experience");
          break;
        case "presence":
          this.$router.push("/presence");
          break;
        case "partners":
          this.$router.push("/partner");
          break;
        case "recipe":
          this.$router.push("/recipe");
          break;
        case "joinUs":
          this.$router.push("/join-us");
          break;
        default:
          console.error("Unknown button:", button);
      }

      this.drawer = false; // Close drawer on selection
    },
  },
};
</script>
<style>
.flag-selector {
  max-width: 75px !important;
  min-width: 75px !important;
  font-family: "Nunito", sans-serif;
  border: 2px solid transparent;
  padding: 0;
}

.flag-selector .v-select__selection-text {
  font-size: 11px;
  margin-top: -7px;
}

.flag-selector .v-field {
  height: 0px;
  color: white;
  border: 2px solid transparent;
  display: flex;
}
.flag-selector .v-label {
  font-size: 10px;
  font-family: "Nunito", sans-serif;
}
.v-list {
  background-color: white;
}
.v-toolbar__content {
  height: 150px !important;
}
.mainBtn {
  font-weight: 600 !important;
}
.v-list {
  background-color: white !important;
  color: black !important;
  font-size: 14px;
}
.v-list .v-list-item-title {
  font-size: 13px;
}
.v-list .v-list-item {
  min-height: 36px !important;
}
</style>
<style scoped>
.appNav {
  background: white;
  color: black;
}
.mainBtn {
  font-family: poppins-semibold, poppins, sans-serif;
  overflow: hidden;
  /* font-weight: 400 !important; */
  font-size: 10px;
  background: white;
  margin-left: 4px;
  margin-top: 4px;
  margin-bottom: 4px;
  border-radius: 100px;
  padding-left: 12px;
  padding-right: 12px;
  /* padding-top: 5px;
  padding-bottom: 5px; */
  background: rgba(159, 196, 60, 0);
  border: 1px solid #9fc43c;
  transition: all 0.3s ease;
  box-shadow: none;
  height: 30px;
}
.mainBtn::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.6),
    rgba(255, 255, 255, 0)
  );
  opacity: 0.3;
  transform: rotate(-45deg);
  pointer-events: none;
  transition: all 0.3s ease;
}
.mainBtn:hover::before {
  animation: shine 1s forwards;
}
@keyframes shine {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
.mainBtn:hover {
  background-color: #9fc43c;
  color: white;
}
.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  max-height: 66px; /* Adjust based on needed logo size */
}
@media (max-width: 480px) {
  .logo {
    margin-top: 20px;
  }
}

.v-btn {
  font-weight: bold;
  color: black;
}

.active {
  background-color: #f6ae42 !important; /* Use your desired background color */
  color: white !important;
  border-radius: 50px !important;
  border: 0;
}

.v-divider {
  height: 30px;
}
@media screen and (max-width: 480px) {
  .flag-selector {
    left: 11px !important;
    top: 80px !important;
  }
}
</style>
