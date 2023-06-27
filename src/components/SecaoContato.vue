<template>
    <div class="w-full bg-[#F8F6Fa] select-none">
        <div class="flex flex-col gap-4 mx-auto px-16 pt-9">
            <img class="self-center" src="/images/Chat.png" alt="Imagem de um balão de fala">
            <h3 class="text-2xl text-center font-semibold text-roxo_escuro">Ainda tem dúvidas? Fale conosco!</h3>
            <span class="w-[97px] h-[3px] bg-amarelo mx-auto"></span>
        </div>
        <div class="p-9 leading-normal text-cinza_escuro">
            <p>
                Ofereça um meio de comunicação direto.
                <br>Pode ser um <a href="#" class="font-semibold underline">contato@email.com.br</a>
                <br>
                <br>Ou crie um formulário ao lado que entrem em contato <span class="font-bold text-roxo">o mais rápido
                    possível!</span>
            </p>
            <a href="#">
                <div class="flex gap-4 items-center mt-4">
                    <img src="/images/whatsapp-icon.png" alt="Ícone do aplicativo Whatsapp">
                    <p class="text-roxo_escuro font-semibold underline">Hey! Estamos no whatsapp!</p>
                </div>
            </a>
            <form action="fale_conosco" method="get" autocomplete="on" class="pt-12 flex flex-col gap-4">
                <div class="flex flex-col gap-[5px]">
                    <label for="nameContato" :class="['text-sm text-roxo font-medium',{'text-red-400': !nomeIsValid}]">Nome<span v-if="!nomeIsValid" class="text-red-400"> inválido</span></label>
                    <input aria-label="Nome"
                    :class="['w-full h-[40px] outline-[1px] outline-roxo_claro rounded-lg pl-4 py-2 text-cinza_escuro outline focus:outline-roxo_escuro focus:outline-2', {'focus:outline-red-400': !nomeIsValid},{'outline-red-400': !nomeIsValid}]"
                        type="text" id="nameContato" placeholder="Nome Sobrenome" autocomplete="name" required
                        v-model.trim="nome" @input="validateNome">
                </div>
                
                <div class="flex flex-col gap-[5px]">
                    <label for="emailContato" :class="['text-sm text-roxo font-medium', {'text-red-400': !emailIsValid}]">Email<span v-if="!emailIsValid" class="text-red-400"> inválido</span></label>
                    <input aria-label="Email"
                        :class="['w-full h-[40px] outline-[1px] outline-roxo_claro rounded-lg pl-4 py-2 text-cinza_escuro outline focus:outline-roxo_escuro focus:outline-2', {'focus:outline-red-400': !emailIsValid},{'outline-red-400': !emailIsValid}]"
                        type="email" id="emailContato" placeholder="nome@email.com.br" autocomplete="email" required
                        v-model="email" @input="validateEmail">
                </div>
                
                <div class="flex flex-col gap-[5px]">
                    <label for="telefoneContato" 
                    :class="['text-sm text-roxo font-medium', {'text-red-400': !telefoneIsValid}]"
                    >Telefone<span v-if="!telefoneIsValid" class="text-red-400"> inválido</span></label>
                    <input aria-label="Telefone"
                    :class="['w-full h-[40px] outline-[1px] outline-roxo_claro rounded-lg pl-4 py-2 text-cinza_escuro outline focus:outline-roxo_escuro focus:outline-2', {'focus:outline-red-400': !telefoneIsValid},{'outline-red-400': !telefoneIsValid}]"
                        type="tel" id="telefoneContato" placeholder="(00)0000-0000" maxlength="14" autocomplete="tel"
                        required v-model="telefone" @input="validateTelefone" 
                        >
                </div>
                <BotaoAmarelo class="mt-8 mx-auto mr-0" text="Enviar!" type="submit"/>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import BotaoAmarelo from './BotaoAmarelo.vue';
const nome = ref('')
const nomeIsValid = ref(true)
const email = ref('')
const emailIsValid = ref(true)
const telefone = ref('')
const telefoneIsValid = ref(true)

const validateNome = () => {
    const nomeRegex = /^[\p{L}\p{M}\s']{2,}(?:[\s'-][\p{L}\p{M}']+){1,}$/u
    if (nomeRegex.test(nome.value)) {
        nomeIsValid.value = true
    } else {
        nomeIsValid.value = false
    }
    
}

const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
    if (emailRegex.test(email.value)) {
        emailIsValid.value = true
    } else {
        emailIsValid.value = false
    }
}

const newLength = ref(0)
const oldLength = ref(0)
const validateTelefone = () => {
    const telefoneRegex = /^\(\d{2}\)\d{4,5}-\d{4}$/

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

    if (telefoneRegex.test(telefone.value)) {
        telefoneIsValid.value = true
    } else {
        telefoneIsValid.value = false
    }
}

</script>