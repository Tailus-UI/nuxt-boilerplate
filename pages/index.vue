<script>
import AppFooter from "@/components/AppFooter";
import HeroSection from "@/components/HeroSection";
import Ressources from "@/components/Ressources.vue";

export default {
  components: {
    AppFooter,
    HeroSection,
    Ressources,
  },
};
</script>

<template>
  <div>
    <HeroSection />
    <Ressources />
    <AppFooter />
  </div>
</template>

<style scoped>
@import "@/assets/css/tailus.css";
</style>
