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

<style>

body {
  background-color: #0d1218;
  color: #fafafa;
  margin: 0;
  font-family: 'Noto Sans', sans-serif;
}

a {
  color: #fafafa;
  text-decoration: none;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 14px;
}

.background-light {
  background-color: #111921;
}

.primary {
  color: #197fe6;
}

</style>