<template>
    <div class="h-[864px] w-full overflow-hidden">
        <div class="pl-[31px] pr-[33px] flex flex-col gap-4">
            <p class="text-roxo">#CONTECOMAGENTE</p>
            <h3 class="font-bold text-4xl leading-normal text-roxo_escuro">Simples, rápido e do seu jeito.</h3>
            <p class="tracking-[-.8px] leading-normal">
                Mostre os valores da sua marca e como ela pode fazer parte da vida do usuário que está lendo. Gerar
                identificação é a chave para <span class="font-bold text-roxo">conquistar seu cliente.</span>
            </p>
            <BotaoAmarelo class="mt-2" text="Eu quero!" />
        </div>
        <div class="relative mt-12">
            <img class="absolute -right-44 -top-10 rotate-[60deg] blur-md object-contain w-[247px]" src="/images/Burger Shape.png" alt="Imagem de uma esfera roxa partida em duas metades">
            <img class="absolute -right-11 top-60 rotate-[60deg] blur-[3px] object-contain w-[86px]" src="/images/Burger Shape.png" alt="Imagem de uma esfera roxa partida em duas metades">
            <div class="relative w-[375px]">
                <img class="absolute left-7 top-12 object-contain w-16" src="/images/Burger Shape.png" alt="Imagem de uma esfera roxa partida em duas metades">
                <img class="mx-auto" src="/images/Man talking on phone.png" alt="">
            </div>
            <div class="absolute grid place-items-center -top-20 left-5 -z-10 w-[317px] h-[362px] rounded-full">
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