<template>
    <button class="px-10 py-3 border-[1px] border-branco self-baseline rounded-lg font-semibold text-branco">
        {{ props.text }}
    </button>
</template>

<script setup>
const props = defineProps({
    text:{Type:String, default:'Botão'}
})
</script>