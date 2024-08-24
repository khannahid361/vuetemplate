<template>
  <Header />
  <keep-alive include="home,about">
    <router-view></router-view>
  </keep-alive>
  <Footer />
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>