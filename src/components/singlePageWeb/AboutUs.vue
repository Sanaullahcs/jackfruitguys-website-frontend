<template>
    <div class="mt-75" style="background-color: white">
      <!-- <NavbarCom /> -->
      <HeaderCom />
      <MainAbout/>
      <ChatBot />
      <FooterCom />
    </div>
  </template>
  
  <script>
  // import NavbarCom from "../NavbarCom.vue";
  import MainAbout from '../AboutUsPage/MainAbout.vue'
  import FooterCom from "../AppFooter.vue";
  import HeaderCom from "../AboutUsPage/Header.vue";
  import ChatBot from "../ChatBot/ChatBot.vue";
  
  export default {
    components: {
      // NavbarCom,
      MainAbout,
      HeaderCom,
      FooterCom,
      ChatBot,
      
    },
  
  };
  </script>
  <style>
  @import "@/assets/css/style.css";
  </style>
  