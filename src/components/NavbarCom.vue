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
          src="@/assets/images/logo.png"
          max-width="300px"
          min-width="300px"
          alt="logo"
          contain
          class="logo"
        />
        <v-select
          min-width="100px"
          max-width="100px"
          v-model="selectedLanguage"
          :items="languages"
          class="position-absolute"
          style="right: 12px; top: 15px"
          density="compact"
          @update:modelValue="updateLanguageInUrl"
          item-title="label"
          item-value="value"
          variant="outlined"
        >
        </v-select>
      </div>
      <!-- <v-container> -->
      <v-row align="center" justify="space-between">
        <!-- <v-col cols="2" class="logo-container">
        <v-img
          src="@/assets/images/logo.png"
          min-width="240px"
          alt="logo"
          contain
          class="logo"
        />
       
      </v-col> -->
        <v-col class="d-none d-md-flex">
          <v-row align="center" justify="center">
            <v-btn
              text
              elevation="0"
              class="mainBtn"
              :class="{ active: activeButton === 'home' }"
              @click="setActive('home')"
            >
              Home
            </v-btn>
            <v-btn
              text
              elevation="0"
              class="mainBtn"
              :class="{ active: activeButton === 'sustainability' }"
              @click="setActive('sustainability')"
            >
              Sustainability
            </v-btn>
            <v-btn
              text
              elevation="0"
              class="mainBtn"
              :class="{ active: activeButton === 'about' }"
              @click="setActive('about')"
            >
              About Us
            </v-btn>
            <v-btn
              text
              elevation="0"
              class="mainBtn"
              :class="{ active: activeButton === 'benefits' }"
              @click="setActive('benefits')"
            >
              Benefits
            </v-btn>
            <v-btn
              text
              elevation="0"
              class="mainBtn"
              :class="{ active: activeButton === 'products' }"
              @click="setActive('products')"
            >
              Products
            </v-btn>
            <v-btn
              text
              elevation="0"
              class="mainBtn"
              :class="{ active: activeButton === 'experience' }"
              @click="setActive('experience')"
            >
              Experience
            </v-btn>
            <v-btn
              text
              elevation="0"
              class="mainBtn"
              :class="{ active: activeButton === 'presence' }"
              @click="setActive('presence')"
            >
              Presence
            </v-btn>
            <v-btn
              text
              elevation="0"
              class="mainBtn"
              :class="{ active: activeButton === 'partner' }"
              @click="setActive('partner')"
            >
              Partners
            </v-btn>
            <v-btn
              text
              elevation="0"
              class="mainBtn"
              :class="{ active: activeButton === 'contact' }"
              @click="setActive('contact')"
            >
              Contact
            </v-btn>
            <v-btn
              text
              elevation="0"
              class="mainBtn"
              :class="{ active: activeButton === 'blog' }"
              @click="setActive('blog')"
            >
              Blogs
            </v-btn>
            <v-btn
              text
              elevation="0"
              class="mainBtn"
              :class="{ active: activeButton === 'recipe' }"
              @click="setActive('recipe')"
            >
              Recipes
            </v-btn>
            <v-btn
              text
              elevation="0"
              class="mainBtn"
              :class="{ active: activeButton === 'join-us' }"
              @click="setActive('join-us')"
            >
              Join Us
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
    <!-- </v-container> -->
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" app temporary class="appNav">
    <v-list class="pa-3 pt-16 mt-6" style="background-color: white">
      <v-list-item
        v-for="button in buttons"
        :key="button"
        @click="setActive(button)"
        :class="{ active: activeButton === button }"
      >
        <v-list-item-title>{{ toUpperCase(button) }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      selectedLanguage: "English",
      languages: [
        { label: "English", value: 1 },
        { label: "French", value: 2 },
        { label: "German", value: 3 },
        { label: "Spanish", value: 4 },
      ],
      activeButton: "home", // Set default active button
      drawer: false, // For mobile menu
      buttons: [
        "home",
        "about",
        "sustainability",
        "benefits",
        "products",
        "experience",
        "presence",
        "partners",
        "contact",
        "blogs",
        "recipe",
        "join-us",
      ],
    };
  },
  // created() {
  //   // Set active button based on the current URL
  //   const path = this.$route.path;
  //   console.log("hello mfs")

  //   switch (path) {
  //     case "/":
  //       this.activeButton = "home";
  //       break;
  //     case "/about":
  //       this.activeButton = "about";
  //       break;
  //     case "/sustainability":
  //       this.activeButton = "sustainability";
  //       break;
  //     case "/benefits":
  //       this.activeButton = "benefits";
  //       break;
  //     case "/contact":
  //       this.activeButton = "contact";
  //       break;
  //     case "/products":
  //       this.activeButton = "products";
  //       break;
  //     case "/experience":
  //       this.activeButton = "experience";
  //       break;
  //     case "/presence":
  //       this.activeButton = "presence";
  //       break;
  //     case "/partner":
  //       this.activeButton = "partner";
  //       break;
  //     case "/blog":
  //       this.activeButton = "blog";
  //       break;
  //     case "/recipe":
  //       this.activeButton = "recipe";
  //       break;
  //       case "/join-us":
  //       this.activeButton = "join-us";
  //       break;
  //     default:
  //       this.activeButton = ""; // Reset if no match
  //   }
  // },
  mounted() {
    // Set active button when the component is mounted
    this.setActiveButton();
  },
  watch: {
    // Watch for route changes and update the active button
    $route() {
      this.setActiveButton();
    },
  },
  methods: {
    updateLanguageInUrl() {
      console.log("url update");
      // Update the query param in the URL with the selected language value
      this.$router.push({ query: { language_id: this.selectedLanguage } });
    },

    toUpperCase(text) {
      return text.toUpperCase();
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
        case "/experience":
          this.activeButton = "experience";
          break;
        case "/presence":
          this.activeButton = "presence";
          break;
        case "/partner":
          this.activeButton = "partner";
          break;
        case "/blog":
          this.activeButton = "blog";
          break;
        case "/recipe":
          this.activeButton = "recipe";
          break;
        case "/join-us":
          this.activeButton = "join-us";
          break;
        default:
          this.activeButton = ""; // Reset if no match
      }
    },
    setActive(button) {
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
        case "blog":
          this.$router.push("/blog");
          break;
        case "experience":
          this.$router.push("/experience");
          break;
        case "presence":
          this.$router.push("/presence");
          break;
        case "partner":
          this.$router.push("/partner");
          break;
        case "recipe":
          this.$router.push("/recipe");
          break;
        case "join-us":
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
.v-list {
  background-color: white;
}
.v-toolbar__content {
  height: 150px !important;
}
.mainBtn {
  font-weight: 600 !important;
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
  font-size: 12px;
  background: white;
  margin-left: 4px;
  margin-top: 4px;
  margin-bottom: 4px;
  border-radius: 100px;
  padding-left: 5px;
  padding-right: 5px;
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
</style>
