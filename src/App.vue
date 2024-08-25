<template>
  <Header />
  <keep-alive include="home,about">
    <router-view></router-view>
  </keep-alive>
  <PartnerComponent />
  <Footer />
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import PartnerComponent from "./components/PartnerComponent.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    PartnerComponent
  },
};
</script>