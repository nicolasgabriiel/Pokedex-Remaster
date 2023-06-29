<template>
    <li class="container-pokemon" v-for="imagem in PokemonImagens" :key="imagem" >
        <img class="imagem-pokemon" :src="imagem" />
        <p class="numero-pokemon"></p>
        <p class="nome-pokemon"></p>
        <div class="container-tipo">
            <div class="tipo1 ${type[0]}"><span></span></div>
            <div class="tipo2 ${type[1]}"><span></span></div>
        </div>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
    name: 'Pokemons-Component',
    data(){
        return{
            IndiceDeBusca: 11,
            PokemonImagens: ['']

        }
    },
    mounted() {
        for(let i = 0; i <= this.IndiceDeBusca; i++){
            let idPokemon = i + 1
    axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
      .then(Data => {
        let DataPokemon = Data.data;
        // console.log(DataPokemon.sprites.other['official-artwork'].front_default)
        this.PokemonImagens[i] = DataPokemon.sprites.other['official-artwork'].front_default
      })
      .catch(error => {
        console.error(error);
      });
  }
}
})
</script>

<style scoped>
.container-pokemon{
    margin-top: 50px;
    background-color: white;
    max-width: 220px;
    width: calc(48vw /4);
    border: 8px solid white;
    box-sizing: border-box;
    display: inline-block;
}
.container-pokemon:hover{
    position: relative;
    top: -5px;
    cursor: pointer;  
}
.imagem-pokemon{
    background-color: #F2F2F2;
    height: 205px;
    width: 100%;
    margin: 0 auto;
    border-radius: 10px;
}
</style>