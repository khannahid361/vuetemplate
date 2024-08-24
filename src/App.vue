<template>
  <Header />
  
  
  <Footer />
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
