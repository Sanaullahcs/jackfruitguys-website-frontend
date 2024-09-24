<template>
    <div class="mt-75" style="background-color: white">
      <!-- <NavbarCom /> -->
      <HeaderCom />
      <JoinUsMain />
      <ChatBot />
      <FooterCom />
    </div>
  </template>
  
  <script>
  // import NavbarCom from "../NavbarCom.vue";
  import FooterCom from "../AppFooter.vue";
  import HeaderCom from "../JoinUs/Header.vue";
  import JoinUsMain from "../JoinUs/JoinUsMain.vue";
  import ChatBot from "../ChatBot/ChatBot.vue";
  
  export default {
    components: {
      // NavbarCom,
      HeaderCom,
      FooterCom,
      JoinUsMain,
      ChatBot,
    },
  };
  </script>
  <style>
  @import "@/assets/css/style.css";
  </style>
  