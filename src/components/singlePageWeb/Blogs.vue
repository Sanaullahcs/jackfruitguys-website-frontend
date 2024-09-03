<template>
  <div class="mt-75" style="background-color: white">
    <NavbarCom />
    <HeaderCom />
    <MainBlogs />
    <ChatBot />
    <FooterCom />
  </div>
</template>

<script>
import NavbarCom from "../NavbarCom.vue";
import MainBlogs from "../BlogsPage/MainBlogs.vue";
import FooterCom from "../AppFooter.vue";
import HeaderCom from "../BlogsPage/Header.vue";
import ChatBot from "../ChatBot/ChatBot.vue";

export default {
  components: {
    NavbarCom,
    MainBlogs,
    HeaderCom,
    FooterCom,
    ChatBot,
  },
};
</script>
<style>
@import "@/assets/css/style.css";
</style>
