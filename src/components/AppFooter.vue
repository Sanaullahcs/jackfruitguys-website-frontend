<template>
  <div style="background-color: #13a34c; color: white">
    <v-row class="pt-16 mb-6 px-16">
      <v-col cols="12" lg="3" md="3" sm="12">
        <div class="d-flex justify-center position-relative">
          <v-img
            max-width="180px"
            class="mt-n10"
            src="../assets/images/logoFooterNew.svg"
          ></v-img>
        </div>
      </v-col>
      <v-col cols="12" lg="9" md="9" sm="12">
        <div class="footer-wrapper">
          <div>
            <router-link class="text-decoration-none" to="/about">
              <p class="footerLink">{{ translations.about }}</p>
            </router-link>
          </div>
          <div>
            <router-link class="text-decoration-none" to="/sustainability">
              <p class="footerLink">{{ translations.sustainability }}</p>
            </router-link>
          </div>
          <div>
            <router-link class="text-decoration-none" to="/benefits">
              <p class="footerLink">{{ translations.benefits }}</p>
            </router-link>
          </div>
          <div>
            <router-link class="text-decoration-none" to="/products">
              <p class="footerLink">{{ translations.products }}</p>
            </router-link>
          </div>
          <div>
            <router-link class="text-decoration-none" to="/experience">
              <p class="footerLink">{{ translations.experience }}</p>
            </router-link>
          </div>
          <div>
            <router-link class="text-decoration-none" to="/presence">
              <p class="footerLink">{{ translations.presence }}</p>
            </router-link>
          </div>
          <div>
            <router-link class="text-decoration-none" to="/partners">
              <p class="footerLink">{{ translations.partners }}</p>
            </router-link>
          </div>
          <div>
            <router-link class="text-decoration-none" to="/recipe">
              <p class="footerLink">{{ translations.recipe }}</p>
            </router-link>
          </div>
          <div>
            <router-link class="text-decoration-none" to="/contact">
              <p class="footerLink">{{ translations.contact }}</p>
            </router-link>
          </div>
          <div>
            <router-link class="text-decoration-none" to="/blogs">
              <p class="footerLink">{{ translations.blogs }}</p>
            </router-link>
          </div>
          <div>
            <router-link class="text-decoration-none" to="/join-us">
              <p class="footerLink">{{ translations.joinUs }}</p>
            </router-link>
          </div>
        </div>
      </v-col>
    </v-row>
    <div style="background: #0e9242" class="px-8 d-flex justify-space-between">
      <v-row class="mb-3">
        <v-col cols="12" xl="6" lg="6" md="12" sm="12" xs="12">
          <p class="footerText">
            Copyright 2024, Jackfruit Guys | All rights reserved.
          </p>
        </v-col>
        <v-col cols="12" xl="6" lg="6" md="12" sm="12" xs="12">
          <div class="d-flex justify-end mt-4">
            <span>
              <v-img
                max-width="12px"
                min-width="12px"
                class="mx-3"
                src="../assets/images/fb.png"
              ></v-img>
            </span>
            <span>
              <v-img
                max-width="20px"
                class="mx-3"
                min-width="20px"
                src="../assets/images/insta.png"
              ></v-img>
            </span>
            <span>
              <v-img
                max-width="20px"
                class="mx-3"
                min-width="23px"
                src="../assets/images/x.png"
              ></v-img>
            </span>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import usa from "../assets/images/usa.svg";
import fr from "../assets/images/fr.svg";
import sp from "../assets/images/sp.svg";
import gr from "../assets/images/gr.svg";

export default {
  name: "Footer",
  data() {
    return {
      selectedLanguage: 1,
      translations: {
        about: "",
        sustainability: "",
        benefits: "",
        products: "",
        experience: "",
        presence: "",
        partners: "",
        recipe: "",
        contact: "",
        blogs: "",
        joinUs: "",
      },
      translationData: {
        1: {
          // English
          about: "About us",
          sustainability: "Sustainability",
          benefits: "Benefits",
          products: "Products",
          experience: "Experience",
          presence: "Presence",
          partners: "Partners",
          recipe: "Recipes",
          contact: "Contact",
          blogs: "Blogs",
          joinUs: "Join us",
        },
        2: {
          // French
          about: "À propos",
          sustainability: "Durabilité",
          benefits: "Avantages",
          products: "Produits",
          experience: "Expérience",
          presence: "Présence",
          partners: "Partenaires",
          recipe: "Recettes",
          contact: "Contactez-nous",
          blogs: "Blogs",
          joinUs: "Rejoignez-nous",
        },
        3: {
          // German
          about: "Über uns",
          sustainability: "Nachhaltigkeit",
          benefits: "Vorteile",
          products: "Produkte",
          experience: "Erlebnis",
          presence: "Präsenz",
          partners: "Partner",
          recipe: "Rezepte",
          contact: "Kontakt",
          blogs: "Blogs",
          joinUs: "Mitmachen",
        },
        4: {
          // Spanish
          about: "Sobre nosotros",
          sustainability: "Sostenibilidad",
          benefits: "Beneficios",
          products: "Productos",
          experience: "Experiencia",
          presence: "Presencia",
          partners: "Socios",
          recipe: "Recetas",
          contact: "Contáctenos",
          blogs: "Blogs",
          joinUs: "Únete a nosotros",
        },
      },
    };
  },
  mounted() {
    this.updateLanguageFromUrl();
  },
  watch: {
    $route() {
      this.updateLanguageFromUrl();
    },
  },
  methods: {
    updateLanguageFromUrl() {
      const params = new URLSearchParams(window.location.search);
      const langId = parseInt(params.get("language_id")) || 1;
      this.selectedLanguage = langId;
      this.updateTranslations();
    },
    updateTranslations() {
      this.translations = this.translationData[this.selectedLanguage];
    },
  },
};
</script>

<style scoped>
.text-decoration-none {
  text-decoration: none;
}
.footer-wrapper {
  display: flex;
  gap: 10px;
  margin: 35px 0px;
  flex-wrap: wrap;
}
.footerHead {
  font-family: "Playfair Display", serif;
  font-size: 25px;
  font-weight: 700;
}
.footerText {
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  line-height: 50px;
  font-weight: 400;
}
.footerLink {
  text-transform: uppercase !important;
  color: white;
  text-decoration: none;
  font-size: 14px !important;
  text-transform: none;
}
.font-weight-500 {
  font-weight: 500;
}
.bg-footer-img {
  position: absolute;
  left: 0px;
  top: 70px;
  min-height: 250px;
  min-width: 129px;
}
@media (max-width: 780px) {
  .footer-wrapper {
    display: flex;
    gap: 10px;
    margin: 35px 0px;
    /* flex-wrap: wrap; */
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
}
@media (max-width: 480px) {
  .footerText {
    font-size: 13px;
  }
}
</style>
