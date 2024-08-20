<template>
  <div style="background-color: white">
    <NavbarCom />
    <MainComponent />
    <!-- <GalleryCom/> -->
    <SliderCom />
    <AboutCom/>
    <WhyJackfruits />
    <HealthOptions/>
    <ChatBot />
    <FooterCom />
  </div>
</template>

<script>
import NavbarCom from "./NavbarCom.vue";
import FooterCom from "./AppFooter.vue";
import MainComponent from "./HomePageComponents/MainHomePage.vue";
import AboutCom from "./HomePageComponents/About.vue"
import HealthOptions from "./HomePageComponents/HealthOptions.vue"
import ChatBot from "./ChatBot/ChatBot.vue";
import WhyJackfruits from "./HomePageComponents/WhyJackfruits.vue"
// import GalleryCom from "./HomePageComponents/Gallery.vue"
import SliderCom from "./HomePageComponents/SliderCom.vue";

export default {
  components: {
    NavbarCom,
    MainComponent,
    FooterCom,
    AboutCom,
    HealthOptions,
    WhyJackfruits,
    ChatBot,
    // GalleryCom,
    SliderCom,
  },
};
</script>
<style>
@import "../assets/css/style.css"
</style>
