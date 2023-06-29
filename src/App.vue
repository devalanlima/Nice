<script setup>
import NavBar from './components/NavBar.vue';
import BannerPrincipal from './components/BannerPrincipal.vue'
import SecaoBeneficios from './components/SecaoBeneficios.vue';
import SecaoQuemSomos from './components/SecaoQuemSomos.vue';
import SecaoContato from './components/SecaoContato.vue';
import SecaoFinal from './components/SecaoFinal.vue';
</script>

<template>
  <header class="mb-6 px-5 pt-10 xl:px-28">
    <NavBar/>
  </header>
  <main class="flex flex-col">
    <BannerPrincipal/>
    <SecaoBeneficios/>
    <SecaoQuemSomos   class="pb-20"/>
    <SecaoContato/>
  </main>
  <footer>
    <SecaoFinal/>
  </footer>
</template>
