<template>
  <div class="mt-75" style="background-color: white">
    <!-- <NavbarCom /> -->
    <HeaderCom />
    <MainBenefits />
    <ChatBot />
    <FooterCom />
  </div>
</template>

<script>
// import NavbarCom from "../NavbarCom.vue";
import MainBenefits from "../BenefitsPage/MainBenefits.vue";
import FooterCom from "../AppFooter.vue";
import HeaderCom from "../BenefitsPage/Header.vue";
import ChatBot from "../ChatBot/ChatBot.vue";

export default {
  components: {
    // NavbarCom,
    MainBenefits,
    HeaderCom,
    FooterCom,
    ChatBot,
  },
};
</script>
<style>
@import "@/assets/css/style.css";
</style>
