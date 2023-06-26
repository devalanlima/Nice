<template>
    <button class="px-10 py-3 border-[1px] border-branco self-baseline rounded-lg font-semibold text-branco
    bg-gradient-to-r from-transparent from-50% to-branco to-50% bg-[length:205%_100%] hover:bg-[99%] transition-all hover:transition-all hover:text-roxo_escuro z-10 hover:border-transparent
    ">
        {{ props.text }}
    </button>
</template>

<script setup>
const props = defineProps({
    text:{Type:String, default:'Botão'}
})
</script>