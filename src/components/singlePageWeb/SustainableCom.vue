<template>
  <div class="mt-75" style="background-color: white">
    <!-- <NavbarCom /> -->
    <HeaderCom />
    <Main />
    <ChatBot />
    <FooterCom />
  </div>
</template>

<script>
// import NavbarCom from "../NavbarCom.vue";
import Main from "../SustainabilityPageComponents/Main.vue";
import FooterCom from "../AppFooter.vue";
import HeaderCom from "../SustainabilityPageComponents/Header.vue";
import ChatBot from "../ChatBot/ChatBot.vue";

export default {
  components: {
    // NavbarCom,
    Main,
    HeaderCom,
    FooterCom,
    ChatBot,
  },
};
</script>
<style>
@import "@/assets/css/style.css";
</style>
