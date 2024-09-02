<template>
  <div class="mt-75" style="background-color: white">
    <NavbarCom />
    <HeaderCom />
    <MainRecipes />
    <ChatBot />
    <FooterCom />
  </div>
</template>

<script>
import NavbarCom from "../NavbarCom.vue";
import MainRecipes from "../BenefitsPage/MainBenefits.vue";
import FooterCom from "../AppFooter.vue";
import HeaderCom from "../RecipesPage/Header.vue";
import ChatBot from "../ChatBot/ChatBot.vue";

export default {
  components: {
    NavbarCom,
    MainRecipes,
    HeaderCom,
    FooterCom,
    ChatBot,
  },
};
</script>
<style>
@import "@/assets/css/style.css";
</style>
