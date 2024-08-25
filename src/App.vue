<template>
  <keep-alive include="home,about">
    <router-view></router-view>
  </keep-alive>
</template>

<script>

export default {
  name: "App",
  components: {

  },
};
</script>