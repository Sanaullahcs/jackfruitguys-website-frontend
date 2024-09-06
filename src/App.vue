<template>
  <v-app>
    <v-main style="background-color: white">
      <NavbarCom/>
      <router-view v-slot="{ Component }">
        <transition name="fade-slide">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavbarCom from "./components/NavbarCom.vue";
export default {
  components: { NavbarCom },
};
// Your script setup here
</script>

<style>
/* Add CSS for the fade + slide transition */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-slide-enter {
  opacity: 0;
  transform: translateX(100%);
}

.fade-slide-leave-to /* .fade-slide-leave-active for versions <2.1.8 */ {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
