<template lang="">
    <div class='container-de-imagem'>
        <img :src=Imagens[0] :class="{'hide': !Imagem1}">
        <img :src=Imagens[1] :class="{'hide': Imagem1}">
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
            Imagem1: false
        }
    },
    mounted(){
        const id = this.$route.params.id;
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(Data => {
                let DataPokemon = Data.data;
                this.Imagens[0] = DataPokemon.sprites.other['official-artwork'].front_default;
                this.Imagens[1] = DataPokemon.sprites.other['official-artwork'].front_shiny;
                console.log(this.Imagens[0])
            })
            .catch(error => {
                console.error(error);
            });
}   
})

</script>
<style scoped>
    .hide{
        display: none;
    }
</style>