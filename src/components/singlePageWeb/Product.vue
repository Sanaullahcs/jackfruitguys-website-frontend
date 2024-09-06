<template>
  <div class="mt-75" style="background-color: white">
    <!-- <NavbarCom /> -->
    <HeaderCom />
    <MainProduct />
    <ChatBot />
    <FooterCom />
  </div>
</template>

<script>
// import NavbarCom from "../NavbarCom.vue";
import MainProduct from "../ProductsPage/MainProduct.vue";
import FooterCom from "../AppFooter.vue";
import HeaderCom from "../ProductsPage/Header.vue";
import ChatBot from "../ChatBot/ChatBot.vue";

export default {
  components: {
    // NavbarCom,
    MainProduct,

    HeaderCom,
    FooterCom,
    ChatBot,
  },
};
</script>
<style>
@import "@/assets/css/style.css";
</style>
