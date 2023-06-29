<template>
    <div class="w-full relative flex flex-col overflow-hidden md:flex-row md:gap-5 md:justify-center gap-2 pb-8">
        <div class="mx-auto md:mx-0">
            <div class="mt-14 mx-auto ml-0 pl-8 pr-4 flex flex-col gap-4 max-w-[500px] lg:max-w-[577px] xl:max-w-[600px]">
                <h2 class="font-extrabold text-branco text-5xl leading-snug lg:text-6xl lg:leading-normal xl:text-[64px]">Um slogan chamativo aqui.</h2>
                <p class="text-branco text-lg tracking-tight leading-normal max-w-[454px]">
                    Um texto sobre o seu produto ou serviço. Explique <span class="text-amarelo font-bold">porque ele é valioso</span> e direcione o usuário ao
                    próximo objetivo.
                </p>
            </div>
            <div class="flex flex-col gap-4 pl-8 pt-8 sm:flex-row">
                <BotaoAmarelo text="Eu quero!"/>
                <BotaoTransparente text="Conhecer mais"/>
            </div>
        </div>
        <div class="relative mx-auto w-[375px] h-[560px] -mt-8 grid place-items-center sm:mx-auto md:mt-0 md:-mb-5 md:mx-0 ">
            <img class="w-full h-full object-cover" src="/images/Businessmaninvestinginbitcoin.png" alt="Imagem de um homem investidor segurando uma esfera roxa">
            <div class="absolute grid place-items-center top-0 left-16 -z-10 w-[317px] h-[362px] rounded-full ">
                <div class="w-[317px] h-[317px] rounded-full bg-gradient-1 blur-[100px]">
                </div>
                <div class="w-[152px] h-[215px] bg-gradient-2 absolute -bottom-10 blur-[100px]"></div>
            </div>
        </div>
        <div class="h-[81%] w-full bg-roxo_escuro absolute top-0 left-0 -z-20">
        </div>
    </div>
</template>

<script setup>
import BotaoAmarelo from './BotaoAmarelo.vue';
import BotaoTransparente from './BotaoTransparente.vue'
</script>