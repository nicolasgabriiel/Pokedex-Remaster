<template>
    <header>
        <h1>{{ nomePokemon }}</h1>
        <h2>{{ idPokemonCompleto }}</h2>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios';
export default defineComponent({
    name:'Pokemon-Indiviual-Status',
    data() {
    return {
      idPokemon: '',
      dataPokemon: [],
      nomePokemon:'',
      idPokemonCompleto: ''
    }
  },
  mounted() {
    const id = this.$route.params.id;
    this.idPokemon = id.toString()
    console.log(this.idPokemon)
    axios.get(`https://pokeapi.co/api/v2/pokemon/${this.idPokemon}`)
      .then(Data => {
        let DataPokemon = Data.data;
        this.dataPokemon = DataPokemon;
        this.nomePokemon ='Nº ' + DataPokemon.id.toString().padStart(4, '0')
        this.idPokemonCompleto = DataPokemon.name.charAt(0).toUpperCase() + DataPokemon.name.slice(1)

      })
      .catch(error => {
        console.error(error);
      });
  }
})
</script>