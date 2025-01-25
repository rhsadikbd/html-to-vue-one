<script setup>
import Header from "../components/HeaderComp.vue";
import Footer from "../components/FooterComp.vue";
</script>
<template>
  <!--================ Start Header Area =================-->
  <Header></Header>
  <!--================ End Header Area =================-->
  <router-view></router-view>
  <!--================ Start Newsletter Area =================-->

  <Footer></Footer>
  <!--================End Footer Area =================-->
</template>
<style scoped></style>
