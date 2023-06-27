<script setup>
import NavBar from './components/NavBar.vue';
import BannerPrincipal from './components/BannerPrincipal.vue'
import SecaoBeneficios from './components/SecaoBeneficios.vue';
import SecaoQuemSomos from './components/SecaoQuemSomos.vue';
import SecaoContato from './components/SecaoContato.vue';
</script>

<template>
  <header class="mb-6 px-5 pt-10">
    <NavBar/>
  </header>
  <main class="flex flex-col gap-4">
    <BannerPrincipal/>
    <SecaoBeneficios/>
    <SecaoQuemSomos/>
    <SecaoContato/>
  </main>
</template>
