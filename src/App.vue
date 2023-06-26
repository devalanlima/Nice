<script setup>
import NavBar from './components/NavBar.vue';
import BannerPrincipal from './components/BannerPrincipal.vue'
import SecaoBeneficios from './components/SecaoBeneficios.vue';
</script>

<template>
  <header class="mb-6 px-5 pt-10">
    <NavBar/>
  </header>
  <main class="flex flex-col gap-4">
    <BannerPrincipal/>
    <SecaoBeneficios/>
  </main>
</template>
