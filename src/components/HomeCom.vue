<template>
  <div style="background-color: white">
    <NavbarCom />
    <MainComponent />
    <!-- <GalleryCom/> -->
    <SliderCom />
    <ChatBot />
    <FooterCom />
  </div>
</template>

<script>
import NavbarCom from "./NavbarCom.vue";
import FooterCom from "./AppFooter.vue";
import MainComponent from "./HomePageComponents/MainHomePage.vue";
import ChatBot from "./ChatBot/ChatBot.vue";
// import GalleryCom from "./HomePageComponents/Gallery.vue"
import SliderCom from "./HomePageComponents/SliderCom.vue";

export default {
  components: {
    NavbarCom,
    MainComponent,
    FooterCom,
    ChatBot,
    // GalleryCom,
    SliderCom,
  },
};
</script>
<style>
@import "../assets/css/style.css"
</style>
