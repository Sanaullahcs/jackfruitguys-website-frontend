<template>
    <div  class="mt-75" style="background-color: white">
      <NavbarCom />
      <HeaderCom />
      <MainContact/>
      <ChatBot />
      <FooterCom />
    </div>
  </template>
  
  <script>
  import NavbarCom from "../NavbarCom.vue";
  import MainContact from "../ContactPage/MainContact.vue"
  import FooterCom from "../AppFooter.vue";
  import HeaderCom from "../ContactPage/Header.vue";
  import ChatBot from "../ChatBot/ChatBot.vue";
  
  export default {
    components: {
      NavbarCom,
      MainContact,
      HeaderCom,
      FooterCom,
      ChatBot,
      
    },
  };
  </script>
  <style>
  @import "@/assets/css/style.css";
  </style>
  