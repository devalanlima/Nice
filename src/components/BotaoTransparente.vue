<template>
    <button :class="['px-10 transition-all py-3 border-[1px] border-branco self-baseline rounded-lg font-semibold text-branco z-10 hover:scale-105 disabled:bg-slate-400 disabled:text-gray-700', {'cursor-not-allowed': props.disabled }]" :type="props.type"
    :disabled="props.disabled"
    >
        {{ props.text }}
    </button>
</template>

<script setup>
const props = defineProps({
    text:{Type:String, default:'Botão'},
    type:{Type:String, default:'button'},
    disabled:{Type:Boolean, default:false}
})
</script>