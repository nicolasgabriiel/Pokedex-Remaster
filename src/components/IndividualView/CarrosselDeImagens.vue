<template lang="">
    <div class='container-de-imagem'>
        <div class='imagem-principal' :style="`background-image: url(${ImagemAtiva})`">
            <button class="botão de Troca" @click="trocaDeImagem" >Aqui</button>
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
            Imagens: [],
            ImagemAtiva: "",
        }
    },
    mounted(){
        const id = this.$route.params.id;
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(Data => {
                let DataPokemon = Data.data;
                this.Imagens[0] = DataPokemon.sprites.other['official-artwork'].front_default;
                this.Imagens[1] = DataPokemon.sprites.other['official-artwork'].front_shiny;
                this.ImagemAtiva = this.Imagens[0].toString()
            })
            .catch(error => {
                console.error(error);
            });

            this.ImagemAtiva = this.Imagens[0]
} ,
    methods:{
        trocaDeImagem(){
            if (this.ImagemAtiva == this.Imagens[0]){
                this.ImagemAtiva = this.Imagens[1]
            }else{
                this.ImagemAtiva = this.Imagens[0]
            }
        }
    }
})

</script>
<style scoped>
    .imagem-principal{
        width: 200px;
        height: 200px;
        background-color: red;
        background-size: contain;
    }
</style>