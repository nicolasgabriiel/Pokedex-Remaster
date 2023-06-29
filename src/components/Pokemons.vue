<template>
    <li class="container-pokemon">
        <img class="imagem-pokemon"/>
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

        }
    },
    mounted() {
        for(let i = 1; i <= 12; i++){
    axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(Data => {
        let DataPokemon = Data.data;
        console.log(DataPokemon.name)

      })
      .catch(error => {
        console.error(error);
      });

      
  }}
})
</script>

<style scoped></style>