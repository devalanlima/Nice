<template>
    <button class="bg-[0%] bg-[length:205%_100%] bg-gradient-to-r from-amarelo from-50% to-transparent to-0% hover:transition-all transition-all hover:text-amarelo box-border px-12 py-3 self-baseline rounded-lg font-semibold text-roxo_escuro hover:bg-[99%] border-[1px] border-amarelo ">
        {{props.text}}
    </button>
</template>

<script setup>
const props = defineProps({
    text:{Type:String, default:'Botão'}
})
</script>