<template>
  <NavComp />

  <RouterView />

  <FooterComp />
</template>

<script setup lang="ts">
import NavComp from '@components/NavComp.vue';
import FooterComp from '@components/FooterComp.vue';
import { initSEO } from '@/plugins/seo'

initSEO()
</script>

<style lang="scss">
@import '@sass/main.scss';

body {
  background-color: $bg-dark;
  color: $text-color;
  margin: 0;
  font-family: $main-font;
}

</style>
