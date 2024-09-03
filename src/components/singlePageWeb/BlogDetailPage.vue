<template>
  <div class="mt-75" style="background-color: white">
    <NavbarCom />
    <HeaderCom />
    <MainBlogDetail />
    <ChatBot />
    <FooterCom />
  </div>
</template>

<script>
import NavbarCom from "../NavbarCom.vue";
import MainBlogDetail from "../BlogsPage/BlogDetail.vue";
import FooterCom from "../AppFooter.vue";
import HeaderCom from "../BlogsPage/Header.vue";
import ChatBot from "../ChatBot/ChatBot.vue";

export default {
  components: {
    NavbarCom,
    MainBlogDetail,
    HeaderCom,
    FooterCom,
    ChatBot,
  },
};
</script>
<style>
@import "@/assets/css/style.css";
</style>
