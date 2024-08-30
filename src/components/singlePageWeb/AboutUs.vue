<template>
    <div style="background-color: white">
      <NavbarCom />
      <HeaderCom />
      <ChatBot />
      <FooterCom />
    </div>
  </template>
  
  <script>
  import NavbarCom from "../NavbarCom.vue";
  import FooterCom from "../AppFooter.vue";
  import HeaderCom from "../AboutUsPage/Header.vue";
  import ChatBot from "../ChatBot/ChatBot.vue";
  
  export default {
    components: {
      NavbarCom,
      HeaderCom,
      FooterCom,
      ChatBot,
      
    },
  };
  </script>
  <style>
  @import "@/assets/css/style.css";
  </style>
  