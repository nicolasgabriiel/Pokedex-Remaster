<template>
    <header>ola eu sou o pokemon {{ dataPokemon.name }}</header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios';
export default defineComponent({
    name:'Pokemon-Indiviual-Status',
    data() {
    return {
      idPokemon: '',
      dataPokemon: []
    }
  },
  mounted() {
    const id = this.$route.params.id;
    this.idPokemon = id.toString()
    console.log(this.idPokemon)
    axios.get(`https://pokeapi.co/api/v2/pokemon/${this.idPokemon}`)
      .then(Data => {
        let DataPokemon = Data.data;
        this.dataPokemon = DataPokemon
        console.log(DataPokemon)
      })
      .catch(error => {
        console.error(error);
      });
  }
})
</script>