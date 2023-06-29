<template>
    <div
        class="w-full max-w-[1440px] overflow-hidden text-cinza_escuro flex flex-col items-center mx-auto md:flex md:flex-row md:justify-center md:py-10 relative xl:pt-16">
        <div class="pl-[31px] pr-[33px] flex flex-col gap-4">
            <p class="text-roxo">#CONTECOMAGENTE</p>
            <h3 class="font-bold text-4xl leading-normal text-roxo_escuro max-w-[340px]">Simples, rápido e do seu jeito.
            </h3>
            <p class="tracking-[-.8px] leading-normal max-w-[400px]">
                Mostre os valores da sua marca e como ela pode fazer parte da vida do usuário que está lendo. Gerar
                identificação é a chave para <span class="font-bold text-roxo">conquistar seu cliente.</span>
            </p>
            <BotaoAmarelo class="mt-2 sm:mt-8" text="Eu quero!" />
        </div>
        <div class="absolute -right-44 top-80 md:top-10 xl:-right-20">
            <img class="object-contain w-[187px] blur-[2px] hidden -ml-52 xl:block" src="/images/Burger Shape.png"
                alt="Imagem de uma esfera roxa partida em duas metades">
            <img class="rotate-[60deg] blur-md object-contain w-[247px] xl:-mt-56" src="/images/Burger Shape.png"
                alt="Imagem de uma esfera roxa partida em duas metades">
            <img class="rotate-[60deg] blur-[3px] object-contain w-[86px] ml-7 mt-10 xl:-ml-10 xl:-mt-0"
                src="/images/Burger Shape.png" alt="Imagem de uma esfera roxa partida em duas metades">
        </div>
        <div class="relative pb-0">
            <div class="relative w-[375px]">
                <img class="absolute left-7 top-12 object-contain w-16" src="/images/Burger Shape.png"
                    alt="Imagem de uma esfera roxa partida em duas metades">
                <img class="mx-auto" src="/images/Man talking on phone.png" alt="">
            </div>
            <div
                class="absolute grid place-items-center -top-20 left-5 -z-10 w-[317px] h-[300px] rounded-full md:-top-0 lg:-top-0 lg:left-14">
                <div class="w-[317px] h-[317px] rounded-full bg-gradient-1 blur-[100px]">
                </div>
                <div class="w-[152px] h-[215px] bg-gradient-2 absolute -bottom-10 blur-[100px]"></div>
                <div class="w-[152px] h-[215px] bg-violet-600 absolute -bottom-10 blur-[100px] opacity-40"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import BotaoAmarelo from './BotaoAmarelo.vue';

</script>