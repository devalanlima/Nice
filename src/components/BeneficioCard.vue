<template>
    <div>
        <div class="h-[306px] w-[287px] bg-white shadow-2xl rounded-[20px] flex flex-col relative mt-16">
            <div class="h-[170px] -mt-16 -mb-4 grid place-content-center">
                <slot></slot>
            </div>
            <div class="flex flex-col p-8 gap-4">
                <h4 class="text-lg font-semibold">{{ props.title }}</h4>
                <p class="text-cinza_escuro">{{ props.description }}</p>
            </div>
            <button class="absolute right-5 bottom-5 hover:rotate-180 hover:transition-all transition-all">
                <img src="/icons/plus-circle.svg" alt="Botão de mais">
            </button>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title:{type: String, default:'Título'},
    description:{type: String, default:'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'}
})
</script>

