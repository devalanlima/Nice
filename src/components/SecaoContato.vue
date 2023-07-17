<template>
    <div class="w-full bg-[#F8F6Fa] select-none ">
        <div class="max-w-[1000px] mx-auto">
            <div class="flex flex-col gap-4 mx-auto px-16 pt-9">
                <img class="self-center" src="/images/Chat.png" alt="Imagem de um balão de fala">
                <h3 class="text-2xl text-center font-semibold text-roxo_escuro">Ainda tem dúvidas? Fale conosco!</h3>
                <span class="w-[97px] h-[3px] rounded-full bg-amarelo mx-auto"></span>
            </div>
            <div class="p-9 h-full leading-normal text-cinza_escuro mx-auto sm:flex sm:justify-between sm:gap-5">
                <div class="max-w-[380px] mx-auto sm:flex sm:flex-col sm:mx-0 lg:pt-5">
                    <p>
                        Ofereça um meio de comunicação direto.
                        <br>Pode ser um <a href="#" class="font-semibold underline">contato@email.com.br</a>
                        <br>
                        <br>Ou crie um formulário ao lado que entrem em contato <span class="font-bold text-roxo">o mais rápido
                            possível!</span>
                    </p>
                    <a href="#" class="mt-4 sm:mt-12">
                        <div class="flex gap-4 items-center">
                            <img src="/images/whatsapp-icon.png" alt="Ícone do aplicativo Whatsapp">
                            <p class="text-roxo_escuro font-semibold underline">Hey! Estamos no whatsapp!</p>
                        </div>
                    </a>
                </div>
                <form action="fale_conosco" method="get" class="pt-12 mx-auto flex flex-col gap-4 sm:pt-0 max-w-[400px] sm:w-full sm:mx-0" :onsubmit="validateForm">
                    <div class="flex flex-col gap-[5px]">
                        <label for="nameContato" :class="['text-sm text-roxo font-medium',{'text-red-500': !nomeIsValid}]">Nome<span v-if="!nomeIsValid" class="text-red-500"> inválido</span></label>
                        <input aria-label="Nome"
                        :class="['w-full h-[40px] outline-[1px] outline-roxo_claro rounded-lg pl-4 py-2 text-cinza_escuro outline focus:outline-roxo_escuro focus:outline-2', {'focus:outline-red-500 outline-red-500': !nomeIsValid}]"
                            type="text" id="nameContato" placeholder="Nome Sobrenome" autocomplete="name" required
                            v-model.trim="nome">
                    </div>
            
                    <div class="flex flex-col gap-[5px]">
                        <label for="emailContato" :class="['text-sm text-roxo font-medium', {'text-red-500': !emailIsValid}]">Email<span v-if="!emailIsValid" class="text-red-500"> inválido</span></label>
                        <input aria-label="Email"
                            :class="['w-full h-[40px] outline-[1px] outline-roxo_claro rounded-lg pl-4 py-2 text-cinza_escuro outline focus:outline-roxo_escuro focus:outline-2', {'focus:outline-red-500 outline-red-500': !emailIsValid}]"
                            type="email" id="emailContato" placeholder="nome@email.com.br" autocomplete="email" required
                            v-model="email"
                            pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$"
                            >
                    </div>
            
                    <div class="flex flex-col gap-[5px]">
                        <label for="telefoneContato"
                        :class="['text-sm text-roxo font-medium', {'text-red-500': !telefoneIsValid}]"
                        >Telefone<span v-if="!telefoneIsValid" class="text-red-500"> inválido</span></label>
                        <input aria-label="Telefone"
                        :class="['w-full h-[40px] outline-[1px] outline-roxo_claro rounded-lg pl-4 py-2 text-cinza_escuro outline focus:outline-roxo_escuro focus:outline-2', {'focus:outline-red-500 outline-red-500': !telefoneIsValid}]"
                            type="tel" id="telefoneContato" placeholder="(00)0000-0000" maxlength="14" autocomplete="tel"
                            required v-model="telefone"
                            pattern="^\(\d{2}\)\d{4,5}-\d{4}$"
                            >
                    </div>
                    <BotaoAmarelo class="mt-8 mx-auto mr-0" text="Enviar!" type="submit" :disabled="!nomeIsValid || !emailIsValid || !telefoneIsValid || nome.length === 0 || email.length === 0 || telefone.length === 0 "/>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import BotaoAmarelo from './BotaoAmarelo.vue';
const nome = ref('')
const email = ref('')
const telefone = ref('')

const nomeIsValid = computed(()=>{
    const nomeRegex = /^[\p{L}\p{M}\s']{2,}(?:[\s'-][\p{L}\p{M}']+){1,}$/u
    if (nomeRegex.test(nome.value) || nome.value.length === 0) {
        return true
    } else {
        return false
    }
})

const emailIsValid = computed(()=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
    if (emailRegex.test(email.value) || email.value.length === 0) {
        return true
    } else {
        return false
    }
})

const newLength = ref(0)
const oldLength = ref(0)

const telefoneIsValid = computed(()=>{
    const telefoneRegex = /^\(\d{2}\)\d{4,5}-\d{4}$/
    telefone.value = telefone.value.replace(/[^()\d-]+/,'')
    newLength.value = telefone.value.length
    if (newLength.value > oldLength.value){
        if(newLength.value === 1){
        telefone.value = '(' + telefone.value
    }
    if (newLength.value === 3) {
        telefone.value += ')'
    }
    if (newLength.value === 8) {
        telefone.value += '-'
    }
    if(newLength.value === 14) {
        telefone.value = telefone.value.replace('-',"")
        telefone.value = `${telefone.value.slice(0,9)}-${telefone.value.slice(9)}`
    }
    }
    oldLength.value = telefone.value.length

    if (telefoneRegex.test(telefone.value) || telefone.value.length === 0) {
        return true
    } else {
        return false
    }
})

const validateForm = ()=>{
    alert('Obrigado por querer se manter informado!')
    return false
}
</script>