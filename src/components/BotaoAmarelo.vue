<template>
    <button :class="['box-border transition-all px-12 py-3 self-baseline rounded-lg font-semibold text-roxo_escuro bg-amarelo disabled:bg-slate-400 disabled:text-gray-700 hover:scale-105', {'cursor-not-allowed': props.disabled }]"
    :disabled="props.disabled"
    >
        {{props.text}}
    </button>
</template>

<script setup>
const props = defineProps({
    text:{Type:String, default:'Botão'},
    type:{Type:String, default:'button'},
    disabled:{Type:Boolean, default:false}
})
</script>