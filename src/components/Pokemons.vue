<template>
    <li class="container-pokemon">
        <img class="imagem-pokemon" v-for="imagem in PokemonImagens" :key="imagem" :src="imagem" />
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
            IndiceDeBusca: 20,
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

<style scoped></style>