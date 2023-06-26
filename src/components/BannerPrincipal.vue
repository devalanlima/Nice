<template>
    <div class="h-[1048px] w-full relative flex flex-col overflow-hidden">
        <div class="mt-16 mx-auto pl-8 pr-4 flex flex-col gap-4">
            <h2 class="font-extrabold text-branco text-5xl leading-snug">Um slogan chamativo aqui.</h2>
            <p class="text-branco text-lg tracking-tight">
                Um texto sobre o seu produto ou serviço. Explique <span class="text-amarelo font-bold">porque ele é valioso</span> e direcione o usuário ao
                próximo objetivo.
            </p>
        </div>
        <div class="flex flex-col gap-4 pl-8 pt-8">
            <BotaoAmarelo text="Eu quero!"/>
            <BotaoTransparente text="Conhecer mais"/>
        </div>
        <div class="relative mx-auto w-[560px] h-[560px] -mt-8">
            <img class="absolute left-5 top-16" src="/images/Burger Shape.png" alt="">
            <img src="/images/Businessman investing in bitcoin.png" alt="">
            <div class="absolute grid place-items-center top-0 left-16 -z-10 w-[317px] h-[362px] rounded-full">
                <div class="w-[317px] h-[317px] rounded-full bg-gradient-1 blur-[100px]">
                </div>
                <div class="w-[152px] h-[215px] bg-gradient-2 absolute -bottom-10 blur-[100px]"></div>
            </div>
        </div>
        <div class="h-[903px] w-full bg-roxo_escuro absolute top-0 left-0 -z-20">
        </div>
    </div>
</template>

<script setup>
import BotaoAmarelo from './BotaoAmarelo.vue';
import BotaoTransparente from './BotaoTransparente.vue'
</script>