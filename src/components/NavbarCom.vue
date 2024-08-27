<template>
  <v-app-bar
    app
    color="white"
    elevation="0"
    style="background-color: white; margin-bottom: 20px"
  >
    <!-- <v-container> -->
    <v-row align="center" justify="space-between">
      <v-col cols="2" class="logo-container">
        <v-img
          src="@/assets/images/logo.png"
          min-width="240px"
          alt="logo"
          contain
          class="logo"
        />
        <!-- Make sure to replace with your logo path -->
      </v-col>
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
            :class="{ active: activeButton === 'partners' }"
            @click="setActive('partners')"
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
        </v-row>
      </v-col>
      <v-col class="d-md-none d-flex justify-end">
        <v-btn icon @click.stop="drawer = !drawer">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <!-- </v-container> -->
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" app temporary>
    <v-list class="pa-3" style="background-color: white">
      <v-list-item
        v-for="button in buttons"
        :key="button"
        @click="setActive(button)"
        :class="{ active: activeButton === button }"
      >
        <v-list-item-title>{{ button }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      activeButton: "home", // Set default active button
      drawer: false, // For mobile menu
      buttons: [
        "HOME",
        "SUSTAINABILITY",
        "BENEFITS",
        "PRODUCTS",
        "EXPERIENCE",
        "PRESENCE",
        "PARTNERS",
        "CONTACT",
      ],
    };
  },
  methods: {
    setActive(button) {
      this.activeButton = button;
      if (button === "sustainability") {
        this.$router.push("/sustainability");
      } else if ( button == "home"){
        this.$router.push("/");
      }
      this.drawer = false; // Close drawer on selection
    },
  },
};
</script>

<style scoped>
.mainBtn {
  font-family: poppins-semibold, poppins, sans-serif;
  font-weight: 400 !important;
  font-size: 12px;
  background: white;
  margin-left: 4px;
  margin-top: 4px;
  margin-bottom: 4px;
  border-radius: 100px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 8px;
  padding-bottom: 8px;
  background: rgba(159, 196, 60, 0);
  border: 1px solid #9fc43c;
  transition: all 0.3s ease;
  box-shadow: none;
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
  max-height: 50px; /* Adjust based on needed logo size */
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
