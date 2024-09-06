<template>
  <v-app>
    <v-main style="background-color: white">
      <NavbarCom />
      <router-view v-slot="{ Component }">
        <!-- <transition name="fade"> -->
          <component :is="Component" />
        <!-- </transition> -->
      </router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavbarCom from "./components/NavbarCom.vue";
export default {
  components: { NavbarCom },
};
</script>

<style>
/* Add CSS for the fade transition */
/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter {
  opacity: 0;
}

.fade-leave-to  {
  opacity: 0;
} */
</style>
