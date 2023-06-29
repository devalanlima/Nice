<script setup>
import NavBar from './components/NavBar.vue';
import BannerPrincipal from './components/BannerPrincipal.vue'
import SecaoBeneficios from './components/SecaoBeneficios.vue';
import SecaoQuemSomos from './components/SecaoQuemSomos.vue';
import SecaoContato from './components/SecaoContato.vue';
import SecaoFinal from './components/SecaoFinal.vue';
import BackToTop from './components/BackToTop.vue';

import { onMounted, ref } from 'vue'
const myHeader = ref(null)
const isShow = ref(false)
const verifica = () => {
  let rect = false
  try {
    rect = myHeader.value.getBoundingClientRect()
  } catch (error) {
    rect = false
  }
  if(rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)){
      isShow.value = false
    } else {
      isShow.value = true
    }
}

onMounted(() => {
  window.addEventListener('scroll', function () {
    verifica()
  });
})
</script>

<template>
  <header id="header" class="mb-6 px-5 pt-10 xl:px-28" ref="myHeader">
    <NavBar />
  </header>
  <main class="flex flex-col">
    <BannerPrincipal />
    <SecaoBeneficios id="secao-beneficios" />
    <SecaoQuemSomos id="secao-quemsomos" class="pb-20" />
    <SecaoContato id="secao-faleconosco" />
    <BackToTop v-if="isShow" class="fixed right-10 bottom-10"/>

  </main>
  <footer>
    <SecaoFinal />
  </footer>
</template>
