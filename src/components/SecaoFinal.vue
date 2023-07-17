<template>
    <div class="bg-roxo_escuro">
        <div class="px-9 max-w-[1200px] mx-auto">
            <div class="pt-12 flex flex-col sm:gap-10 md:flex-row md:justify-between md:items-center">
                <div>
                    <h1 class="sr-only">Nice</h1>
                    <img src="/icons/logo-branco.svg" alt="Logotipo da marca Nice">
                </div>
                <div class="flex justify-between w-full gap-28 sm:gap-4 lg:gap-28">
                    <ul class="flex flex-col gap-4 mt-20 text-branco w-full max-w-[550px] sm:gap-8 sm:flex-row sm:mt-0 md:justify-between md:mx-auto md:mr-0">
                        <li class="relative">
                            <a href="#"
                                class="hover:before:content-['•'] before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:text-2xl">o
                                que fazemos</a>
                        </li>
                        <li class="relative">
                            <a href="#"
                                class="hover:before:content-['•'] before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:text-2xl">como
                                te ajudamos</a>
                        </li>
                        <li class="relative">
                            <a href="#"
                                class="hover:before:content-['•'] before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:text-2xl">fale
                                conosco</a>
                        </li>
                    </ul>
                    <ul class="flex gap-6 items-center">
                        <li>
                            <a href="#">
                                <div class="w-5 h-5">
                                    <p class="sr-only">Instagram</p>
                                    <img src="/icons/instagram-branco.svg" alt="logotipo do instagram">
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="w-5 h-5">
                                    <p class="sr-only">Facebook</p>
                                    <img src="/icons/facebook-branco.svg" alt="logotipo do Facebook">
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <form class="pt-12 flex flex-col gap-4 select-none sm:mt-10 sm:flex-row sm:items-center sm:gap-7" action="receba_novidades" method="get" autocomplete="on" :onsubmit="validateForm">
                <label for="inscrever" class="text-branco">Receba as novidades do nice</label>
                <div class="flex h-11 w-full max-w-[365px]">
                    <input id="inscrever" type="email"
                        :class="['outline outline-1 outline-branco bg-transparent rounded-tl-lg rounded-bl-lg py-3 pl-3 w-full text-branco', { 'outline-red-400': !emailIsValid }]"
                        placeholder="nome@email.com" aria-label="Email" v-model="email"
                        pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$" required>
                    <button type="submit"
                        :class="['bg-branco outline outline-1 outline-branco text-roxo_escuro py-3 pl-6 pr-4 rounded-tr-lg rounded-br-lg', { 'outline-red-400 bg-red-400 cursor-not-allowed': !emailIsValid }]"
                        :disabled="!emailIsValid || email.length === 0">Inscrever</button>
                </div>
            </form>
        </div>
        <div class="h-[1px] bg-roxo_claro mt-[71px] max-w-[1200px] mx-auto"></div>
        <p class="px-24 text-center py-10  text-branco text-xs">Nice template by @lopesluiza on Figma - 2021 / developed by Alan Lima</p>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const email = ref('')

const emailIsValid = computed(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
    if (emailRegex.test(email.value) || email.value.length === 0) {
        return true
    } else {
        return false
    }
})

const validateForm = ()=>{
    alert('Obrigado por querer se manter informado!')
    return false
}
</script>