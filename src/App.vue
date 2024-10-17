<template>
  <v-app>
    <v-main style="background-color: #1e1f26; color: white">
      <NavbarCom />
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>

      <!-- Small dot that follows the mouse -->
      <div class="mouse-dot" ref="mouseDot"></div>
    </v-main>
  </v-app>
</template>

<script>
import NavbarCom from "./components/NavbarCom.vue";

export default {
  components: { NavbarCom },
  mounted() {
    // Add event listener for mousemove when the component is mounted
    window.addEventListener("mousemove", this.moveDot);
  },
  beforeDestroy() {
    // Remove event listener when the component is destroyed
    window.removeEventListener("mousemove", this.moveDot);
  },
  methods: {
    moveDot(event) {
      const dot = this.$refs.mouseDot;
      const x = event.clientX;
      const y = event.clientY;

      // Update the dot's position
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
    },
  },
};
</script>

<style>
:root {
  font-size: 16px;
}

body {
  overflow: hidden;
  background-color: #1e1f26;
  color: white;
  line-height: 1.5;
}

#app .container {
  display: flex;
  flex-direction: row;
  flex: 0 1 100%;
  width: 100%;
  height: 100vh;
  max-width: 1024px;
  margin: 0 auto;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.w-full {
  width: 100%;
}

.button {
  display: block;
  vertical-align: middle;
  margin: 8px auto;
  min-width: 209px;
  will-change: auto;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  border-radius: 3px;
  border-width: 0;
  color: #fff;
  padding: 16px 24px;
  appearance: none;
  background-image: linear-gradient(90deg, #f6ae42 , #f6ae42 );
  background-position: left center;
}

.button:hover {
  background-position: right center;
}

/* Custom style for the small dot */
.mouse-dot {
  position: fixed;
  width: 20px; /* Slightly larger to match the style */
  height: 20px;
  background-image: linear-gradient(90deg, #f6ae42 , #f6ae42 ); /* Same gradient as button */
  border-radius: 50%;
  pointer-events: none;
  transition: transform 0.1s ease, background-position 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  transform: translate(-50%, -50%);
  z-index: 9999;
}
</style>
