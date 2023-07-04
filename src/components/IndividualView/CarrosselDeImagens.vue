<template lang="">
    <div class='container-de-imagem'>
        <div class='imagem-principal' :style="`background-image: url(${imagemAtiva})`">
            <button class="botao" @click="trocaDeImagem" >&lt;</button>
            <button class="botao" @click="trocaDeImagem" >></button>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent,  } from 'vue';
import axios from 'axios'
export default defineComponent({
    name: 'Carrossel-de-Imagens',
    data(){
        return{
            imagemN: "",
            imagemS: "",
            imagemAtiva: "",
        }
    },
    mounted(){
        const id = this.$route.params.id;
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(Data => {
                let DataPokemon = Data.data;
                this.imagemN = DataPokemon.sprites.other['official-artwork'].front_default;
                this.imagemS = DataPokemon.sprites.other['official-artwork'].front_shiny;
                this.imagemAtiva = this.imagemN.toString()
                console.log(this.imagemAtiva)
            })
            .catch(error => {
                console.error(error);
            });

} ,
    methods:{
        trocaDeImagem(){
            if (this.imagemAtiva == this.imagemN){
                this.imagemAtiva = this.imagemS
            }else{
                this.imagemAtiva = this.imagemN
            }
        }
    }
})

</script>
<style scoped>
    .imagem-principal{
        width: calc(25vw - 40px);
        height: calc(25vw - 40px);
        margin: 20px;
        background-color: #f2f2f2;
        background-size: contain;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: 0.2s;
        
    }
    .botao{
        color: black;
        font-weight: bold;
        font-size: 20px;
        border-radius: 200px;
        background-color: gray;
        border: none;
        transition: 0.2s;
        cursor: pointer;
        opacity: 0;
        margin: 4px;
    }
    .imagem-principal:hover {
        cursor: pointer;
        opacity: .7;
    }
    .imagem-principal:hover .botao{
        opacity: 1;
    }
    .botao:hover {
        opacity: 1;
        background-color: black;
        color: white;
    }
</style>