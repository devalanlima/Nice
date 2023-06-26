<template>
    <div class="flex flex-col">
        <h3 class="text-center text-2xl text-roxo_escuro font-semibold pl-14 pr-16 tracking-tighter leading-normal mb-6">Um subtítulo para quem
            rolou até aqui!</h3>
        <p class="px-4 text-center tracking-tight text-cinza_escuro leading-normal">Aproveite esta seção para destacar os benefícios do seu
            produto ou serviço. Palavras-chave ajudam no SEO.</p>
        <div class="flex pl-8 gap-6 w-full overflow-x-auto mt-3 pr-8 pb-14">
            <BeneficioCard 
                title="Rápido"
                description="Aproveite esta seção para destacar os benefícios do seu produto ou serviço.">
                    <img src="/images/Target.png" alt="Imagem de um alvo com uma flecha cravada no centro">
            </BeneficioCard>

            <BeneficioCard 
                title="Do seu jeito"
                description="Aproveite esta seção para destacar os benefícios do seu produto ou serviço.">
                    <img src="/images/Ethereum Coin.png" alt="Imagem de uma mão segurando a criptomoeda Etherium">
            </BeneficioCard>

            <BeneficioCard 
                title="Como você queria"
                description="Aproveite esta seção para destacar os benefícios do seu produto ou serviço.">
                    <img src="/images/Credit Card.png" alt="Imagem de um alvo com uma flecha cravada no centro">
            </BeneficioCard>
        </div>
    </div>
</template>

<script setup>
import BeneficioCard from './BeneficioCard.vue';

</script>