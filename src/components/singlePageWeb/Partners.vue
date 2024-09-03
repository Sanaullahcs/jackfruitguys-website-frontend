<template>
  <div class="mt-75" style="background-color: white">
    <NavbarCom />
    <HeaderCom />
    <MainPartners />
    <ChatBot />
    <FooterCom />
  </div>
</template>

<script>
import NavbarCom from "../NavbarCom.vue";
import MainPartners from "../PartnersPage/MainPartners.vue";
import FooterCom from "../AppFooter.vue";
import HeaderCom from "../PartnersPage/Header.vue";
import ChatBot from "../ChatBot/ChatBot.vue";

export default {
  components: {
    NavbarCom,
    MainPartners,
    HeaderCom,
    FooterCom,
    ChatBot,
  },
};
</script>
<style>
@import "@/assets/css/style.css";
</style>
