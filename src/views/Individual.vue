<template>
    <h1>Dados Aqui! esse é o pokemon numero {{ idPokemon }}</h1>
</template>

<script lang="ts">
import { defineComponent} from 'vue'
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
  },
})
</script>