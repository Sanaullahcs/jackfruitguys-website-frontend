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
  data() {
    return {
      dotX: 0, // Current X position of the dot
      dotY: 0, // Current Y position of the dot
      targetX: 0, // Target X position based on mouse movement
      targetY: 0, // Target Y position based on mouse movement
    };
  },
  mounted() {
    // Add event listener for mousemove when the component is mounted
    window.addEventListener("mousemove", this.moveDot);

    // Start the animation loop for the lazy movement
    this.animateDot();
  },
  beforeDestroy() {
    // Remove event listener when the component is destroyed
    window.removeEventListener("mousemove", this.moveDot);
  },
  methods: {
    moveDot(event) {
      // Set the target positions to the mouse coordinates
      this.targetX = event.clientX;
      this.targetY = event.clientY;
    },
    animateDot() {
      // Interpolation to create the lazy movement effect
      const delayFactor = 0.1; // Adjust this value for the delay effect

      this.dotX += (this.targetX - this.dotX) * delayFactor;
      this.dotY += (this.targetY - this.dotY) * delayFactor;

      // Update the dot's position
      const dot = this.$refs.mouseDot;
      if (dot) {
        // Update the dot's position
        dot.style.left = `${this.dotX}px`;
        dot.style.top = `${this.dotY}px`;
      }

      // Continue the animation on the next frame
      requestAnimationFrame(this.animateDot);
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
  background-image: linear-gradient(90deg, #f6ae42, #f6ae42);
  background-position: left center;
}

.button:hover {
  background-position: right center;
}

/* Custom style for the small dot */
.mouse-dot {
  position: fixed;
  width: 30px;
  height: 30px;
  
  background-image: linear-gradient(90deg, #f6ae42, #f6ae42);
  border-radius: 50%;
  pointer-events: none;
  transition: transform 0.15s ease-out,
    background-position 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  transform: translate(-50%, -50%) scale(1);
  z-index: 9999;

  /* Add opacity for transparency */
  opacity: 0.8; /* Adjust the value between 0 and 1 (e.g., 0.7 for 70% opacity) */
}


/* To smooth out the hover interaction when the dot size changes */
.mouse-dot:hover {
  transform: translate(-50%, -50%) scale(1.2); /* Enlarge the dot on hover */
}
</style>
