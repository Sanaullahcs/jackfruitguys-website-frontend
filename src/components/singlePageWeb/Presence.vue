<template>
  <div class="mt-75" style="background-color: white">
    <NavbarCom />
    <HeaderCom />
    <MainPresence />
    <ChatBot />
    <FooterCom />
  </div>
</template>

<script>
import NavbarCom from "../NavbarCom.vue";
import MainPresence from "../PresencePage/MainPresence.vue";
import FooterCom from "../AppFooter.vue";
import HeaderCom from "../PresencePage/Header.vue";
import ChatBot from "../ChatBot/ChatBot.vue";

export default {
  components: {
    NavbarCom,
    MainPresence,
    HeaderCom,
    FooterCom,
    ChatBot,
  },
};
</script>
<style>
@import "@/assets/css/style.css";
</style>
