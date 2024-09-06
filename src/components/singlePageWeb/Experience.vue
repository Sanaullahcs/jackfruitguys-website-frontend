<template>
    <div  class="mt-75" style="background-color: white">
      <!-- <NavbarCom /> -->
      <HeaderCom />
      <ChatBot />
      <FooterCom />
    </div>
  </template>
  
  <script>
  // import NavbarCom from "../NavbarCom.vue";
  import FooterCom from "../AppFooter.vue";
  import HeaderCom from "../ExperiencePage/Header.vue";
  import ChatBot from "../ChatBot/ChatBot.vue";
  
  export default {
    components: {
      // NavbarCom,
      HeaderCom,
      FooterCom,
      ChatBot,
      
    },
  };
  </script>
  <style>
  @import "@/assets/css/style.css";
  </style>
  