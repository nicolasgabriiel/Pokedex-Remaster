<template>
    <h1>Dados Aqui! esse é o pokemon numero {{ idPokemon }}</h1>
</template>

<script lang="ts">
import { defineComponent} from 'vue'
import axios from 'axios';
export default defineComponent({
    name: 'Pagina-Individual-de-cada-Pokemon',
    data(){
        return{
            idPokemon: ''
        }
    },
    mounted() {
    const id = this.$route.params.id;
    this.idPokemon = id.toString()
    console.log(this.idPokemon)
    axios.get(`https://pokeapi.co/api/v2/pokemon/${this.idPokemon}`)
      .then(Data => {
        let DataPokemon = Data.data;
        console.log(DataPokemon)
    })
      .catch(error => {
        console.error(error);
      });
  },
})
</script>