<template>
    <nav class="flex justify-between items-center relative">
        <button class="h-[27px] w-[30px] flex justify-start group sm:ml-3 md:ml-24" title="Botão do menu" @click="toggleMenuView">
            <div
                class="transition-all before:transition-all after:transition-all relative group-hover:w-[20px] group-hover:before:w-[30px] group-hover:after:w-[20px]

                w-[30px] h-[6px] bg-black rounded-sm

                before:w-[20px] before:h-[6px] before:bg-black before:rounded-sm before:block before:absolute before:top-[11px] before:left-0

                after:w-[30px] after:h-[6px] after:bg-black after:rounded-sm after:block after:absolute after:top-[22px] after:left-0">
            </div>
        </button>
        <ul v-if="menuView" class="absolute top-12 bg-white px-10 pl-14 py-5 -left-10 flex flex-col gap-5 rounded-br-lg">
            <li class="relative">
                <a href="#" class="hover:before:content-['•'] before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:text-2xl">o que fazemos</a>
            </li>
            <li class="relative">
                <a href="#" class="hover:before:content-['•'] before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:text-2xl">como te ajudamos</a>
            </li>
            <li class="relative">
                <a href="#" class="hover:before:content-['•'] before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:text-2xl">fale conosco</a>
            </li>
        </ul>
        <div class="absolute left-1/2 -translate-x-1/2">
            <h1 class="sr-only">Nice</h1>
            <img class="-mt-[10px]" src="/icons/logo.svg" alt="Logotipo da marca Nice">
        </div>
        <ul class="flex gap-6 items-center">
            <li>
                <a href="#">
                    <div class="w-5 h-5">
                        <p class="sr-only">Instagram</p>
                        <img src="/icons/instagram.svg" alt="logotipo do instagram">
                    </div>
                </a>
            </li>
            <li>
                <a href="#">
                    <div class="w-5 h-5">
                        <p class="sr-only">Facebook</p>
                        <img src="/icons/facebook.svg" alt="logotipo do Facebook">
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { ref } from 'vue'

const menuView = ref(false)

const toggleMenuView = ()=>{
    menuView.value = !menuView.value
}
</script>