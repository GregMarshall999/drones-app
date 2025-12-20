<template>
  <NavComp />

  <RouterView />

  <FooterComp />
</template>

<script setup lang="ts">
import NavComp from '@components/NavComp.vue';
import FooterComp from '@components/FooterComp.vue';
</script>