<template>
    <button class="bg-amarelo px-12 py-3 self-baseline rounded-lg font-semibold text-roxo_escuro">
        {{props.text}}
    </button>
</template>

<script setup>
const props = defineProps({
    text:{Type:String, default:'Botão'}
})
</script>